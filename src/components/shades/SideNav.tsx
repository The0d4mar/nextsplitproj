


import { SideNavBtn } from '@/styled/sidenavbtn';
import React, {FC} from 'react';
import Link from 'next/link';
import { COLORS } from '@/styled/theme';
import { ChartLine, Notebook, RefreshCcw, Settings, WalletCards } from 'lucide-react';

interface SideNavProps{

}
const SideNav:FC<SideNavProps> = () => {
  return (
    <aside className='w-20 h-auto flex-col justify-between items-center z-20' style={{backgroundColor: `${COLORS.buttonColor}`}}>
      
      <Link href='/'><SideNavBtn $isdisabled>ВГ</SideNavBtn></Link>

      <Link href='/indicators' ><SideNavBtn><ChartLine/> показатели</SideNavBtn></Link>

      <Link href='/'><SideNavBtn><RefreshCcw/> операции</SideNavBtn></Link>

      <Link href='/'><SideNavBtn><WalletCards/> счета</SideNavBtn></Link>

      <Link href='/'><SideNavBtn><Notebook/> категории</SideNavBtn></Link>

      <Link href='/'><SideNavBtn><Settings/> настроки</SideNavBtn></Link>
      
    </aside>
  );
};

export default SideNav;