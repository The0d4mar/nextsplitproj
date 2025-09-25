import React, {FC} from 'react';
import PlotsHeader from '../PlotsHeader';
import { cn } from '@/lib/utils';
import { returnData } from '@/testdata';
import { useSliceOperation } from '@/hooks/useSliceOperation';
import { useOperationData } from '@/hooks/useOperationModifaer';
import { returnColorArray } from '@/API/api';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export enum DynamicPlotFlag{
    expenses= 'expenses',
    income= 'income',
}

interface DynamicPlotBlockProps{
    header:string;
    flag: DynamicPlotFlag
}
interface colorRow{
    color: string;
}
const DynamicPlotBlock:FC<DynamicPlotBlockProps> = ({header, flag}) => {
    const testData = returnData()
    const timeData = useSliceOperation(testData, [])
    const { line, incomePie, expensePie } = useOperationData(timeData, 'months');
    const resultData = flag == 'expenses' ? expensePie : incomePie
    const colorIncrementIndexArray:string[] = returnColorArray(resultData.length)
    const numofCol = Math.ceil(resultData.length/2)
    const categoryObj = {}
    let i = 0;
    let resultSum = 0
    for(let row of resultData) {
        row['color'] = colorIncrementIndexArray[i]
        resultSum+=row.value
        i+=1;
    }

    const sortResData = resultData.sort((a,b) => b.category.length - a.category.length)


  return (
    <div>
      <PlotsHeader title={header}/>

      <div className={cn('', 'DynamicPlotBody')}>
        <div className={cn('grid grid-rows-2 gap-4 mt-6', 'DynamicPlotBody__title')} style={{gridTemplateColumns: `repeat(${numofCol}, minmax(0, 1fr))`}}>

        {sortResData.map(item =>
            <div className='flex items-center gap-1.5 box-content'>
                <div className='w-4 h-4 rounded-full' style={{backgroundColor:`${item.color}`}}></div>
                {item.category}
            </div>

        )}

        </div>
        <div className={cn('flex gap-10', 'DynamicPlotBody__line mt-8')}>
            <div className=''>
                За выбранный период
            </div>
            <div className='w-222 flex items-center gap-1 relative'>
                {resultData.sort((a,b) => b.value - a.value).map(item =>
                <>


                    <Tooltip>
                        <TooltipTrigger asChild><div className='h-11 rounded-[8px]' style={{width: `${item.value/resultSum*100}%`, backgroundColor:`${item.color}`}}></div></TooltipTrigger>
                        <TooltipContent>
                            <p>{item.category}: {item.value}</p>
                        </TooltipContent>
                    </Tooltip>

                    </>
                )}

            </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPlotBlock;