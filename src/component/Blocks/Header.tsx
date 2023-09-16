import React from 'react'
import styled  from '@emotion/styled'
import {VscSearch} from "react-icons/vsc"
import {LuUserCircle2} from "react-icons/lu"

const Container =styled.div`
height: 50px;
background-color: black;
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
padding: 20px;
`
const Logo = styled.div``
const Input = styled.div`
height: 40px;
width: 220px;
background-color: white;
border: 0px;
border-radius: 3px;
display: flex;
align-items: center;
gap: 10px;
color: black;
padding-left: 10px;
`

const InHold = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

const Header = () => {
  return (
   <Container>

    <Logo>
        <h1>KODEFLIX</h1>
    </Logo>

    <InHold>
    <Input>
    <VscSearch />
    <input type="text" placeholder='Search'/>
    
    </Input>
    <LuUserCircle2/>
    </InHold>
    
   </Container>
  )
}

export default Header
