import { useSeparateData } from '@/hooks/useSeparateData';
import { returnData } from '@/testdata';
import React, {FC} from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PiePlotBlock__Pie from '../PiePlotBlock__Pie';
import PlotsHeader from '../PlotsHeader';
import { useSliceOperation } from '@/hooks/useSliceOperation';
import { useOperationData } from '@/hooks/useOperationModifaer';
import { returnColorArray } from '@/API/api';
import { SIZES } from '@/styled/theme';

interface PiePlotBlockProps{

}
const PiePlotBlock:FC<PiePlotBlockProps> = () => {


    const testData = returnData()
    const timeData = useSliceOperation(testData, [])
    const { line, incomePie, expensePie } = useOperationData(timeData, 'months');
    const colorIncrementIndexArray:string[] = returnColorArray(incomePie.length)
    const colorExpendIndexArray:string[] = returnColorArray(expensePie.length)

  return (
    <div className='w-352'>
        <PlotsHeader title='Сводка'/>
        <div className='flex justify-between mt-8' style={{height:`${SIZES.PlotsHeight}px`}}>
            <PiePlotBlock__Pie header={'Структура доходов'} data={incomePie} colorArray={colorIncrementIndexArray}/>
            <PiePlotBlock__Pie header={'Структура расходов'} data={expensePie} colorArray={colorExpendIndexArray}/>
        </div>
    </div>
  );
};

export default PiePlotBlock;