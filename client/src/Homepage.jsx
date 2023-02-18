import React, { useEffect, useState } from "react";
import { getContractData } from "./ContractMethods";

const Homepage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getContractData({ setData });
  });
  return (
    <div className="homeMain">
      {data && (
        <iframe
          src={`https://ipfs.io/ipfs/${data.cid}`}
          frameborder="0"
        ></iframe>
      )}
    </div>
  );
};
export default Homepage;
