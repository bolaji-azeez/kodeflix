import React from 'react'
import {Global, css} from "@emotion/react"

export const Globalstyle:React.FC = () => {
  return (
    <Global
    styles={css`
    
 
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;600;700;800&display=swap');

body{
    min-height: 100vh;
    font-family: "Manrope";
    margin: 0;
    padding: 0;
    background-color:  #f1f1f1;
    color: black;
    
}

    `}
    />
  )
}
