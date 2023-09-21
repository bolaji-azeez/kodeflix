import React, {useState} from "react";
import Hero from "../component/Hero";
import Card from "../component/Comons/Card";
import styled from "@emotion/styled";
import Card2 from "../component/Comons/Card2";

const HomePage = () => {

	const [keyword, setKeyword] = useState("")
	return (
		<div style={{ color: "white", minHeight: "100vh" }}>
			<Hero />

			<input onChange={(e)=>{
				setKeyword(e.target.value)
			}} />
			<h2
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				Searched
			</h2>

			<Card2 keyword = {keyword} />
			<h2
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				MOVIES
			</h2>

			<Card />
		</div>
	);
};

export default HomePage;