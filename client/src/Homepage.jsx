import React, { useEffect, useState } from "react";
import { getContractData } from "./ContractMethods";
import Footer from './Footer/Footer.jsx'
const Homepage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getContractData({ setData });
  });
  return (
    <>
    <div className="homeMain">
      {data && (
        <iframe
          src={`https://ipfs.io/ipfs/${data.cid}`}
          frameBorder="0"
          onLoad='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this))'
        ></iframe>

        )}
    </div>
        <Footer/>
    </>
  );
};
export default Homepage;
