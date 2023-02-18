import React, { useEffect, useState, ReactDOM } from "react";
import { getContractData } from "./ContractMethods";
import Footer from './Footer/Footer.jsx'
import "./Homepage.css";
import DOMPurify from "dompurify";

const Homepage = () => {
  const [data, setData] = useState(null);
	useEffect(() => {
		getContractData({ setData });
	}, []);
	const [html, setHtml] = useState("");
	const [mime, setMime] = useState(null);

	useEffect(() => {
		if (!data) return;
		async function fetchHtml() {
			const response = await fetch(
				`https://ipfs.io/ipfs/${data.cid}`
			);
			setMime(response.headers.get("content-type"));
			const html = await response.text();
			const clean = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } } );
			console.log(clean)
			setHtml(clean);
		}
		fetchHtml();
	}, [data]);

	return (
		<>
		<div className="homeMain">
		{mime ? 
			(mime === "text/html" ? (
				<div
				className="innerPage"
				dangerouslySetInnerHTML={{ __html: html }}
				/>
			) : (
				<img src={`https://ipfs.io/ipfs/${data.cid}`} />
			)) : (
				<center className="loading"><h2>Loading Content...</h2></center>
			)}
		</div>
		<Footer/>
		</>
	);
};
export default Homepage;
