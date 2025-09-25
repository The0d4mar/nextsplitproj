import React, {FC} from 'react';
import classes from './UserFiltersBtn.module.css'
import { COLORS, SIZES } from '@/styled/theme';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface UserFiltersBtnProps{
    title: string;
    filters: string[];
    choosenfilter: string;

}
const UserFiltersBtn:FC<UserFiltersBtnProps> = ({title, filters, choosenfilter}) => {
  return (
    <div className={classes.UserFilterBtn}>
        <div className='p-0.5 absolute left-4 top-1 z-10' style={{fontSize: SIZES.fontSizeSmall_3, backgroundColor: COLORS.mainBGColor}}>
            {title}
        </div>

        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={choosenfilter} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>Выбрать период</SelectLabel>
                    {filters.map(filter =>
                        <SelectItem value={filter}>{filter}</SelectItem>
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>



      
    </div>
  );
};

export default UserFiltersBtn;