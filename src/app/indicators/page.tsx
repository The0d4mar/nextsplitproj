'use client'

import DynamicPlotBlock, { DynamicPlotFlag } from '@/components/shades/DynamicPlotBlock';
import IndicatorsCont from '@/components/shades/IndicatorsCont';
import LinePlotBlock from '@/components/shades/LinePlotBlock';
import PiePlotBlock from '@/components/shades/PiePlotBlock';
import UserFilterPart from '@/components/shades/UserFilterPart';
import { cn } from '@/lib/utils';
import { RootState } from '@/store/store';
import React, {FC} from 'react';
import { useSelector } from 'react-redux';

interface pageProps{

}
const page:FC<pageProps> = () => {
    const activeUserStore = useSelector((store: RootState) => store.userStore.activeUser)
    const filterPeriod = ['По дням', 'По месяцам', 'По годам']
    const walletFiltres = ['Все счета', 'Основной', 'Накопительный', 'Общий']
  return (
    <div className="flex flex-col w-352 relative" >
        <IndicatorsCont children={<UserFilterPart activeUserStore={activeUserStore} filterPeriod={filterPeriod} walletFiltres={walletFiltres}/>}/>
        <section className={cn('flex flex-col relative gap-5', 'MainPage__customizeBlock')}>
          <IndicatorsCont children={<LinePlotBlock/>}/>
          <IndicatorsCont children={<PiePlotBlock/>}/>
          <IndicatorsCont children={<DynamicPlotBlock header="Динамика расходов" flag={DynamicPlotFlag.expenses}/>}/>
          <IndicatorsCont children={<DynamicPlotBlock header="Динамика доходов" flag={DynamicPlotFlag.income}/>}/>
        </section>
    </div>
  );
};

export default page;