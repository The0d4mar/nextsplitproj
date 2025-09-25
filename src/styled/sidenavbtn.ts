'use client'


import styled from "styled-components";
import { COLORS, SIZES } from "./theme";

interface ButtonProps{
    $isdisabled?: boolean
    $isActive?: boolean;
}



 export const SideNavBtn = styled.button<ButtonProps>`

    width: 80px;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    gap:10px;
    justify-content: center;
    align-items: center;
    background-color: ${({$isdisabled, $isActive}) => ($isdisabled ? "#E1A231" : $isActive ?COLORS.buttonColor_hover : "transperent")};
    font-weight: bold;
    font-size: ${({ $isdisabled }) => ($isdisabled ? SIZES.fontSizeH1 : SIZES.fontSizeSmall_2)};
    color: ${COLORS.mainBGColor};
    cursor: ${({ $isdisabled }) => ($isdisabled ? "not-allowed" : "pointer")};
    
    &:last-child {
        text-transform: capitalize;
    }
    
    

    &:hover {
        background-color: ${({$isdisabled}) => ($isdisabled ? "transperent" : COLORS.buttonColor_hover)};
        transition: 0.3s;
    }

`
