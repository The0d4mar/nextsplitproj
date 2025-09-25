'use client'
import { Operation, PlotPoint } from '@/interfaces/interfaces';
import { SIZES } from '@/styled/theme';
import React, {FC} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';



interface MainPlot__PlotProps{
    data: PlotPoint[]
    showPeriod: string;
    chosenPeriod?: string[]

}
const MainPlot__Plot:FC<MainPlot__PlotProps> = ({data, showPeriod, chosenPeriod = []}) => {
      return (
     <LineChart height={Number(SIZES.PlotsHeight)} data={data} width={Number(SIZES.plotWidht)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#82ca9d" name="Доход" />
        <Line type="monotone" dataKey="expenses" stroke="#ff4d4f" name="Расходы" />
        <Line type="monotone" dataKey="savings" stroke="#8884d8" name="Накопления" />
    </LineChart>
  );
};

export default MainPlot__Plot;