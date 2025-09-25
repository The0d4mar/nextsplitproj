import { UserProps } from '@/interfaces/interfaces';
import { COLORS, SIZES } from '@/styled/theme';
import React, {FC} from 'react';
import UserFiltersBtn from './UserFiltersBtn/UserFiltersBtn';
import { DateRangeButton } from './DateRangeButton';

interface UserFilterPartProps{
    activeUserStore: UserProps
    filterPeriod: string[]
    walletFiltres:string[]
    

}
const UserFilterPart:FC<UserFilterPartProps> = ({activeUserStore, filterPeriod, walletFiltres}) => {
  return (
    <div className='flex justify-between items-center relative w-352'>

        <div className="flex-col justify-between items-start box-content whitespace-nowrap">
            <div className="userName" style={{fontSize: SIZES.fontSizeH2, fontWeight:SIZES.fontWeightH2}}>
              {activeUserStore.name} {activeUserStore.secondName}
            </div>
            <div className="userDateOfRegistration" style={{fontSize: SIZES.fontSizeSmall, color: `${COLORS.fontColor_opt}`}}>
              Дата регистрации: {activeUserStore.registerData}
            </div>
            
          </div>
          <div className="flex justify-between items-center gap-10">
            <DateRangeButton title={'Период'} filters={[]} choosenfilter={''}/>
            <UserFiltersBtn title={"Отображение"} choosenfilter={filterPeriod[0]} filters = {filterPeriod} />
            <UserFiltersBtn title={"Счета"} choosenfilter={walletFiltres[0]} filters = {walletFiltres} />
            
            
          </div>
      
    </div>
  );
};

export default UserFilterPart;