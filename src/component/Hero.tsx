
import styled from "@emotion/styled"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules";

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
background-image: url(${(props) => props.bg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;

`

const TransParentBackground = styled.div`
background: linear-gradient(
  90deg,
  rgba(0,0,0,0.964) 31%,
  rgba(26, 26, 25, 0.2049194677871149) 100%,
  rgba(255, 255, 255, 0) 100%
);

position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
padding-top: 60px;

`

const TypeHead = styled.div`
font-size: 60px;
margin-top: 50px;
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
cursor: pointer;
:hover {
  background-color: transparent;
}
`


const Hero = () => {
  return ( 
    <>
   <Container 
   spaceBetween= {30}
   centeredSlides={true}
   autoplay = {{delay: 2500,
              disableOnInteraction: false,
}}  navigation = {true}
              modules={[Pagination, Navigation, Autoplay]}
              className = 'mySwipper'>
              <SwippingSlide bg = {bg1}>
              <TransParentBackground>
              <TypeHead> TRAVIS'S MOVIE BOX </TypeHead>
              <Title>LATEST 2023 MOVIES</Title>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur
               deleniti quos natus quod eius error sequi dolore dignissimos ea expedita qui,
               voluptatum corrupti ipsum quibusdam accusantium reprehenderit dolor cum?
               </P>
               <Button bgg="#477890" cl='white'>Get Started</Button>
                <Button bgg="#e1dd8f" cl='white'>Movies</Button>

            
              
              </TransParentBackground>
              </SwippingSlide>

              <SwippingSlide bg = {bg2}>
              <TransParentBackground>
              <TypeHead> TRAVIS'S MOVIE BOX </TypeHead>
              <Title>LATEST 2023 MOVIES</Title>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur
               deleniti quos natus quod eius error sequi dolore dignissimos ea expedita qui,
               voluptatum corrupti ipsum quibusdam accusantium reprehenderit dolor cum?
               </P>
               <Button bgg="#477890" cl='white'>Get Started</Button>
                <Button bgg="#e1dd8f" cl='white'>Movies</Button>

            
              
              </TransParentBackground>
              </SwippingSlide>

              <SwippingSlide bg = {bg3}>
              <TransParentBackground>
              <TypeHead> TRAVIS'S MOVIE BOX </TypeHead>
              <Title>LATEST 2023 MOVIES</Title>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur
               deleniti quos natus quod eius error sequi dolore dignissimos ea expedita qui,
               voluptatum corrupti ipsum quibusdam accusantium reprehenderit dolor cum?
               </P>
               <Button bgg="#477890" cl='white'>Get Started</Button>
                <Button bgg="#e1dd8f" cl='white'>Movies</Button>

            
              
              </TransParentBackground>
              </SwippingSlide>

              <SwippingSlide bg = {bg4}>
              <TransParentBackground>
              <TypeHead> TRAVIS'S MOVIE BOX </TypeHead>
              <Title>LATEST 2023 MOVIES</Title>
              <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur
               deleniti quos natus quod eius error sequi dolore dignissimos ea expedita qui,
               voluptatum corrupti ipsum quibusdam accusantium reprehenderit dolor cum?
               </P>
               <Button bgg="#477890" cl='white'>Get Started</Button>
                <Button bgg="#e1dd8f" cl='white'>Movies</Button>

            
              
              </TransParentBackground>
              </SwippingSlide>
   
   
   
   

   </Container>
   </>
  )
}

export default Hero
