
import styled from "@emotion/styled" 
import {useState, useEffect} from "react"
import pics from "../../src/assets/sli1.jpg"
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { Rating } from "react-simple-star-rating";
import movieData from "../../src/Pages/MovieData.json"
import {useParams} from "react-router-dom"

const Container = styled.div`
padding-bottom: 100px`
const MainHero = styled.div`
min-height: 400px;
width: 100%;
background-color: blanchedalmond;
background-image: url(${pics});
background-position: center;
background-size: cover;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`

const TransParentBackground = styled.div`
position: absolute;
background: radical-gradient(
    circle,
    rgba(0,0,0,0.42060574229691) 4%,
        rgba(114, 49, 201, 1) 50%,
        rgba(0, 0, 0, 1) 100%
);
top: 0;
bottom: 0;
left: 0;
right: 0;

`

const TypeHead = styled.div`
font-size: 20px;
margin-top: 100px;
font-weight: 500;
`
const ContHold = styled.div`
color: white;
z-index: 10;
text-align: center;
`
const Title = styled.div`
    font-size: 60px;
    margin-top: 10px;
    font-weight: bolder;
`
const Button = styled.button<{ bg: string; cl: string}>`
    padding: 10px 15px 10px 15px;
    background-color: ${(props) => props.bgg};
    color: ${(props) => props.cl};
    border: 0;
    outline: none;
    margin-right: 30px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    transition: all 350ms;
    border: 1px solid silver;

    :hover {
        background-color: transparent;
        color:  white;
    }
`
const Icon = styled.div`
    margin-right: 10px;
`

const Main = styled.div`
    display: flex;
`

 const PosterImage = styled.div`
    height: 300px;
    width: 350px;
    background-color: #fff;
    object-fit: cover;
 `

 const Hold = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin-top: 100px;
 `

const Second = styled.div`
    color: white;
`

const H1 = styled.div`
    font-size: 17px;
    font-weight: bold;
`

const Sub = styled.div`
    font-size: 13px;
    margin-bottom: 10px;
`

const P = styled.div`
    font-size: 20px;
`


const Detailed = () => {
    const { id } = useParams()

    const DetailedData = movieData.find((el) => el.id === Number(id))
    console.log(DetailedData)

    const [show, setShow] = useState(false)

    const toggleState = () => {
        setShow(!show)
    }

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    })
  return (
    <Container>
     <MainHero bgIm= {DetailedData?.backgroundImg}>
     <TransParentBackground></TransParentBackground>
        <ContHold>
            <TypeHead>ROVIES</TypeHead>
            <Title>{DetailedData?.title} {DetailedData?.year}</Title>
            <p>{DetailedData?.plot}</p>
            <Button cl="black" bgg="white">
                <Main>
                    <Icon>
                        <IoMdNotifications />
                    </Icon>
                    <span>Subscribe</span>
                </Main>
            </Button>

            <Button cl="black" bgg="white">
                <Main onClick = {toggleState}>
                    <Icon>
                        <BsFillPlayFill />
                    </Icon>
                    <span>Watch Trailer</span>
                </Main>
            </Button>
        </ContHold>
     </MainHero>

     <Hold>
				<PosterImage src={DetailedData?.poster_url} />

				<Second>
					<H1>Title</H1>
					<Sub>{DetailedData?.title}</Sub>
					<H1>plot</H1>
					<P>{DetailedData?.plot}</P>
					<br />
					<H1>Actors</H1>

					<Sub>
						{DetailedData?.actors?.map((props) => (
							<>
								<span>{props}</span>
								<br />
							</>
						))}
					</Sub>
					<br />
					<H1>Writers</H1>
					<Sub>
						{DetailedData?.writers?.map((props) => (
							<>
								<span>{props}</span>
								<br />
							</>
						))}
					</Sub>
					<br />
					<H1>rating</H1>
					<Sub>{DetailedData?.rating}</Sub>
					<Rating
						size={10}
						style={{
							fontSize: "14px",
						}}
						initialValue={DetailedData!.rating % 5}
					/>
				</Second>
			</Hold>

			{show ? <Modal video={DetailedData?.trailer_url} toggleState = {toggleState} /> : null}
    </Container>
  )
}

export default Detailed
