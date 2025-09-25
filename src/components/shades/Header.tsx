import { COLORS, SIZES } from '@/styled/theme';
import React, {FC} from 'react';
import HeaderEnterBtn from './HeaderEnterBtn';

interface HeaderProps{

}
const Header:FC<HeaderProps> = () => {
  return (
    <header 
        style={{height: SIZES.buttonHeight__dec, backgroundColor:COLORS.buttonColor}}
        className='flex justify-end pr-10 items-center absolute top-0 w-screen z-1'
    >

        <HeaderEnterBtn/>
      
    </header>
  );
};

export default Header;