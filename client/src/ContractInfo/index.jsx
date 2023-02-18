import React, { useEffect, useState } from "react";
import Card from "../Cards/ContCard.jsx";
import { TaskContractAddress } from "../config";
import { bid, setCid } from "../ContractMethods.js";
import "./ContractInfo.css";
import axios from "axios";
const API_KEY = "4e73af18d3434f688b8f";
const API_SECRET =
  "62659081106ac972560067216ffb6ecbdc8959f9028a1c10a4cc6dcdca4ae189";

const ContractInfo = ({ user, data, update }) => {
  const [isOwner, setIsOwner] = useState(false);
  const [amt, setAmt] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("Confirm");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setUploadStatus("uploading...");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            pinata_api_key: API_KEY,
            pinata_secret_api_key: API_SECRET,
          },
        }
      );
      setUploadStatus("updating...");
      await setCid({ user, newCid: response.data.IpfsHash });
      update();
    } catch (error) {
      console.error(error);
    }
    setUploadStatus("Confirm");
  };

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

  const [loading, setLoading] = useState(false);

  const HandleBid = async () => {
    setLoading(true);
    await bid({ user, price: amt });
    setAmt(0);
    update();
    setLoading(false);
  };

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
              <span className="key"># Current CID</span>
              <span className="value">{data.cid || "getting data..."}</span>
            </p>

            <p>
              <span className="key"># Current Bidder</span>
              <span className="value">{data.owner || "getting data..."}</span>
            </p>
            <p>
              <span className="key"># Last Bid Amount</span>
              <span className="value">
                {(data.price && data.price.toString()) || "getting data..."}
              </span>
            </p>
          </div>
          {user.connected ? (
            <div className="bidBox">
              {!isOwner ? (
                <>
                  <input
                    type="number"
                    name="amount"
                    value={amt}
                    onChange={changeAmount}
                    placeholder="Enter Bid Amount"
                  />
                  <button onClick={HandleBid}>
                    {loading ? "wait..." : "Confirm"}
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="file"
                    name="file"
                    id="amount"
                    onChange={handleFileChange}
                  />
                  <button onClick={handleUpload}>{uploadStatus}</button>
                </>
              )}
            </div>
          ) : (
            <center>
              <h3>Connect your Wallet for taking furthur actions</h3>
            </center>
          )}
        </Card>
      </div>
    </>
  );
};

export default ContractInfo;
