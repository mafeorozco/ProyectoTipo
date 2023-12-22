import React from 'react'
import { ButtonTitle } from '../../Style';

export const Button = ({children,className,onClick}) => {
    return ( 
        <button className={`${className}`} onClick={onClick}>{children}</button>
     );
}
