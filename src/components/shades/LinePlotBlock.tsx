import { cn } from '@/lib/utils';
import { COLORS, SIZES } from '@/styled/theme';
import { DollarSign, Menu } from 'lucide-react';
import React, {FC} from 'react';
import MainPlotCategorie from './MainPlotCategorie';
import MainPlot__Plot from './MainPlot__Plot';
import { returnData } from '@/testdata';
import PlotsHeader from '../PlotsHeader';
import { useSliceOperation } from '@/hooks/useSliceOperation';
import { useOperationData } from '@/hooks/useOperationModifaer';

interface MainPlotBlockProps{

}
const LinePlotBlock:FC<MainPlotBlockProps> = () => {
    const testData = returnData()
    const timeData = useSliceOperation(testData, ["2025-01-20", '2025-04-15']) // хук для выборки заданного периода
    const { line, incomePie, expensePie } = useOperationData(timeData, 'months');
  return (
    <div className='w-352'>
        <PlotsHeader title='Общее' sign={<DollarSign className='w-6 aspect-square'/>}/>

        <div className={cn('flex mt-8 justify-between', 'mainPlot__body')}>
            <div className={cn('', 'mainPlot__categories')}>
                <MainPlotCategorie name={'Доходы'} value={2100000}/>

                <MainPlotCategorie name={'Расходы'} value={1500000}/>

                <MainPlotCategorie name={'Накопления'} value={750000}/>
                
            </div>
            <div className={cn('', 'mainPlot__plot')}>
                <MainPlot__Plot data={line} showPeriod = {'months'}/>
            </div>
        </div>
    </div>
  );
};

export default LinePlotBlock;