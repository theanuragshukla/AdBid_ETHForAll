import React, { useEffect, useState } from "react";
import Card from "../Cards/ContCard.jsx";
import { TaskContractAddress } from "../config";
import { bid } from "../ContractMethods.js";
import "./ContractInfo.css";

const ContractInfo = ({ user, data }) => {
  const [isOwner, setIsOwner] = useState(false);
  const [amt, setAmt] = useState(0);

  useEffect(() => {
    if (!user.address || !data.owner) return;
    setIsOwner(
      user.address.toString().toLowerCase() ===
        data.owner.toString().toLowerCase() || false
    );
  }, [user, data]);

  const changeAmount = (e) => {
    setAmt(e.target.value);
  };

  const HandleBid = (e) => {};

  return (
    <>
      <div className="mainBody">
        <Card heading="Manage">
          <div className="list">
            <p>
              <span className="key"># Contract Address</span>
              <span className="value">{TaskContractAddress}</span>
            </p>

            <p>
              <span className="key"># Current Bidder</span>
              <span className="value">
                {data.owner || "Metamask not Connected"}
              </span>
            </p>
            <p>
              <span className="key"># Last Bid Amount</span>
              <span className="value">
                {(data.price && data.price.toString()) ||
                  "Metamask not Connected"}
              </span>
            </p>
          </div>
          {!isOwner ? (
            <div className="bidBox">
              <input
                type="number"
                name="amount"
                value={amt}
                onChange={changeAmount}
                placeholder="Enter Bid Amount"
              />
              <button onClick={HandleBid}>Confirm</button>
            </div>
          ) : (
            <div className="bidBox">
              <input
                type="file"
                name="amount"
                id="amount"
                placeholder="Enter Bid Amount"
              />
              <button>Confirm</button>
            </div>
          )}
        </Card>
      </div>
    </>
  );
};

export default ContractInfo;
