'use client'


import styled from "styled-components";
import { COLORS, SIZES } from "./theme";

 export const MainPageContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%; 
    max-width: 100%;
    align-items: center;
    padding: 13px 40px;
    height: fit-content;
    position: relative;
    box-sizing: border-box;
    
    &::after{
        content: '';
        background-color: ${COLORS.elementColor};
        position: absolute;
        top:100%;
        left: 0;
        width: 100%;
        height: 1px;
    }
 `