import { cn } from '@/lib/utils';
import { SIZES } from '@/styled/theme';
import React, {FC} from 'react';

interface MainPlotCategorieProps{
    name: string;
    value: number;

}
const MainPlotCategorie:FC<MainPlotCategorieProps> = ({name, value}) => {
        function formatNumber(num: number): string {
            return new Intl.NumberFormat("ru-RU").format(num);
        }
     const fromatValue = formatNumber(value)
    
  return (
    <div className={cn('flex items-baseline relative box-border justify-between gap-6', 'mainPlot__categorie')}>
        <div className={cn('', 'mainPlot__categorieName')}
        style={{fontSize: `${SIZES.fontSizeRegual}`, fontWeight:`${SIZES.fontWeighRegual}`}}
        
        >
            {name}
        </div>
        <div className={cn('', 'mainPlot__categorieValue')}
            style={{fontSize: `${SIZES.fontSizeH2}`, fontWeight:`${SIZES.fontWeighRegual}`}}
        >
            {fromatValue}
        </div>
    </div>
  );
};

export default MainPlotCategorie;