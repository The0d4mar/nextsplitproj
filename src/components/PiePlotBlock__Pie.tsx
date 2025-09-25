'use client'
import { NoteProps, PieRow } from '@/interfaces/interfaces';
import { SIZES } from '@/styled/theme';
import React, {FC} from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface PiePlotBlock__PieProps{
    header:String;
    data: PieRow[];
    colorArray:string[]

}
const PiePlotBlock__Pie:FC<PiePlotBlock__PieProps> = ({header, data, colorArray}) => {
  return (
    <div className='flex flex-col items-center w-100 relative justify-center'>
        <h3 className='mb-5 z-8' style={{fontSize:`${SIZES.fontSizeH2}`, fontWeight:`${SIZES.fontWeighRegual}`}}>{header}</h3>
        <ResponsiveContainer className='z-10'>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                >
                    {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={colorArray[index]}
                    />
                    ))}
                </Pie>
                <Tooltip
                    formatter={(val: number) =>
                    new Intl.NumberFormat("ru-RU").format(val) + " ₽"
                    }
                />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
      
    </div>
  );
};

export default PiePlotBlock__Pie;