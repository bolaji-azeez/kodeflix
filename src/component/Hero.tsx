import React from 'react'
import styled from "@emotion/styled"
import {Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation,Autoplay } from 'swiper/modules'

import bg1 from "../assets/sli1.jpg"
import bg2 from "../assets/sli2.png"
import bg3 from "../assets/sli3.png"
import bg4 from "../assets/sli4.jpg"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Container = styled(Swiper)`
min-height: 500px;
width: 100%;
color: white;


`
const SwippingSlide = styled(SwiperSlide)<{bg: string}>`
height: 500px;
width: 100%;



background-image: url(${(props) => props.bg})
background-position: center;
background-size: cover;
backgroung-repeat: no-repeat;
position: relative;

`

const TransparentBackground = styled.div`
background: linear-gradient(

90deg,
rgba(0, 0, 0, 0.9640231092436975) 31%,
rgba(26, 26, 25, 0.2049194677871149) 100%,
rgba(255, 255, 255, 0) 100%

)
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
padding-left: 50px;

`

const TypeHead = styled.div`
font-size: 20px;
margin-top: 100px;
font-weight: 500;
`
const Title = styled.div`
font-size: 20px;
margin-top: 100px;
font-weight: bolder;


`
const P  = styled.div`
width: 600px;
font-size: 13px;
margin-bottom: 40px;

`

const Button = styled.button<{bgg: string; cl: string;}>`
padding: 10px 15px 10px 15px;
background-color: ${(props) => props.bgg};
color: ${(props) => props.cl}
border: none;
outline: none;
margin-right: 15px;
border-radius: 5px;
`


const Hero: React.FC = () => {
  return ( 
    <>
   <Container 
   spaceBetween= {30}
   centeredSlide = {true}
   autoplay = {{delay: 2500,
              disableOnInterraction: false,
}} // navigation = {true}
              modules={[Pagination, Navigation, Autoplay]}
              className = 'mySwipper'>
              <SwippingSlide bg = {bg1}>
              <TransparentBackground>
              <TypeHead> TRAVIS'S MOVIE BOX </TypeHead>
              <Title>LATEST 2023 MOVIES</Title>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur
               deleniti quos natus quod eius error sequi dolore dignissimos ea expedita qui,
               voluptatum corrupti ipsum quibusdam accusantium reprehenderit dolor cum?
               </P>
               <Button cl='white' bgg = '#0b397a'>
               Watch Movies
               
               </Button>

            
              
              </TransparentBackground>
              </SwippingSlide>

              <SwippingSlide bg = {bg2}>
              <TransparentBackground>
              <TypeHead> TRAVIS'S MOVIE BOX </TypeHead>
              <Title>LATEST 2023 MOVIES</Title>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur
               deleniti quos natus quod eius error sequi dolore dignissimos ea expedita qui,
               voluptatum corrupti ipsum quibusdam accusantium reprehenderit dolor cum?
               </P>
               <Button cl='white' bgg = '#0b397a'>
               Watch Movies
               
               </Button>

            
              
              </TransparentBackground>
              </SwippingSlide>

              <SwippingSlide bg = {bg3}>
              <TransparentBackground>
              <TypeHead> TRAVIS'S MOVIE BOX </TypeHead>
              <Title>LATEST 2023 MOVIES</Title>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur
               deleniti quos natus quod eius error sequi dolore dignissimos ea expedita qui,
               voluptatum corrupti ipsum quibusdam accusantium reprehenderit dolor cum?
               </P>
               <Button cl='white' bgg = '#0b397a'>
               Watch Movies
               
               </Button>

            
              
              </TransparentBackground>
              </SwippingSlide>
              <SwippingSlide bg = {bg4}>
                {" "}
              <TransparentBackground>
              <TypeHead> TRAVIS'S MOVIE BOX </TypeHead>
              <Title>LATEST 2023 MOVIES</Title>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur
               deleniti quos natus quod eius error sequi dolore dignissimos ea expedita qui,
               voluptatum corrupti ipsum quibusdam accusantium reprehenderit dolor cum?
               </P>
               <Button cl='white' bgg = '#0b397a'>
               Watch Movies
               
               </Button>

            
              
              </TransparentBackground>
              </SwippingSlide>
   
   
   
   

   </Container>
   </>
  )
}

export default Hero
