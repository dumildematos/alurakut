import React, { useState } from "react";
import styled from "styled-components";
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

const InnerDarkModeToggle = styled.div`
    position:absolute;
    right: 3%;
    top: 1%;
    z-index: 1000;
`;

const Toggle = styled.button`
    cursor: pointer;
    display: block;
    height: 35px;
    width: 35px;   
    border-radius: 50%;
    border: none;
    font-size: 1em;
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
    svg{
        width: 30px;
        height: 30px;
    }
`;


export default function DarkModeToggle(props) {
    
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };
    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;
   return (
    <InnerDarkModeToggle>
        <Toggle onClick={changeTheme}>
            {icon}
        </Toggle>
    </InnerDarkModeToggle>
   ) 
}