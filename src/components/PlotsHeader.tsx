import { COLORS, SIZES } from '@/styled/theme';
import { DollarSign, Menu } from 'lucide-react';
import React, {FC} from 'react';

interface PlotsHeaderProps{

    title:string;
    sign?: React.ReactNode

}
const PlotsHeader:FC<PlotsHeaderProps> = ({title, sign = undefined}) => {
  return (
    <div className='flex gap-4 items-center'>

        <Menu style={{color: `${COLORS.elementColor}`}}/>
        {sign == undefined ?
        <h2 className='flex items-center' style={{fontSize:`${SIZES.fontSizeH2}`, fontWeight:`${SIZES.fontWeighRegual}`}}>
            {title}
        </h2>

        :
        <h2 className='flex items-center' style={{fontSize:`${SIZES.fontSizeH2}`, fontWeight:`${SIZES.fontWeighRegual}`}}>
            {title}, {sign}
        </h2>
    
        }

    </div>
  );
};

export default PlotsHeader;