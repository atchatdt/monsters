import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder,handleChane})=>{
    return(
        <input 
        className="search" 
        type="search" 
        placeholder={placeholder}
        onChange={handleChane}/>
    )
}