import { MainPageContainer } from '@/styled/MainPageCont';
import React, {FC} from 'react';

interface IndicatorsContProps{
    children: React.ReactElement
}
const IndicatorsCont:FC<IndicatorsContProps> = ({children}) => {
  return (
    <div>
        <MainPageContainer>
            {children}
        </MainPageContainer>
      
    </div>
  );
};

export default IndicatorsCont;