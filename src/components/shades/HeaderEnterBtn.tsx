'use client'

import { COLORS, SIZES } from '@/styled/theme';
import React, {FC, useState} from 'react';

interface HeaderEnterBtnProps{

}
const HeaderEnterBtn:FC<HeaderEnterBtnProps> = () => {
  const [autherFlag, setAutherFlag] = useState<boolean>(false)
  return (
    <button 
      className='px-4 py-3 flex justify-center items-center border-1 border-[#6B461C] rounded-[8px]'
      style={{fontSize:SIZES.fontSizeBig}}
    >
        {autherFlag ? 'Войти': 'Выйти'}
    </button>
  );
};

export default HeaderEnterBtn;