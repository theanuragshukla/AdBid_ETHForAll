import React, { useEffect, useState, ReactDOM } from "react";
import { getContractData } from "./ContractMethods";
import "./Homepage.css";

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
        `https://ipfs.io/ipfs/QmcAjVDUFaeCf181RzK7riX43vSD2dUhGTuicsy8UgmRmU`
      );
      setMime(response.headers.get("content-type"));
      const html = await response.text();
      setHtml(html);
    }
    fetchHtml();
  }, [data]);

  return (
    <div className="homeMain">
      {mime &&
        (mime === "text/html" ? (
          <div
            className="innerPage"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <img src={`https://ipfs.io/ipfs/${data.cid}`} />
        ))}
    </div>
  );
};
export default Homepage;
