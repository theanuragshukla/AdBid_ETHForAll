import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import NavBar from "./NavBar";
const About = () => {
	return (
		<div className="flex AboutMain">
		<NavBar>
		<button><Link to='/manage'>Manage</Link></button>
		<button><Link to='/adspace'>AdSpace</Link></button>
		</NavBar>
		<div className="flex section">
		<div className="heading">
		<h1>What is this ??</h1>
		</div>
		<div className="para">
		<p>
		In simplest terms, This is a Platform which supports bidding for an
		AdSpace. The highest Bidder controls the contents of the AdSpace.
		The Bidding is open Forever. At any point of time, the current
		Highest Bidder can modify the content of the Adspace and any other
		person can Claim the ownerShip of the AdSpace by bidding more than
            the previous Highest Bid Amount(keeping GAS in consideration).
          </p>
        </div>
      </div>
      <div className="flex section">
        <div className="heading">
          <h1>How to Use ??</h1>
        </div>
        <div className="para">
          <p>
            <ul>
              <li>
                Navigate to <Link to="/manage">/manage</Link> and then Connect
                your MetaMask wallet
              </li>
              <li>
                On that page, You may see different UI depending you are the
                current Highest Bidder or not.
              </li>
              <li>
                If you are the Current Highest Bidder, You'll see the Option for
                changing the content of AdSpace. You may Upload any Image/HTML
                file to replace the current content of AdSpace
              </li>
              <li>
                In any other Situation, You'll find an option to bid an amount
                to claim the ownerShip of the AdSpace. You have to enter the
                Amount you want to bid and the Press Enter. If the transaction
                Succeed, you'll be able to change the AdSpace content
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex section">
        <div className="heading">
          <h1>How this Works ??</h1>
        </div>
        <div className="para">
          <p>
            This platform utilises technologies like IPFS, Polygon, etc to
            achieve its current working state. Here are some key Points
            describing its working:
            <ul>
              <li>
                It uses smart Contract deployed on the Polygon Network as the
                only sosurce of truth.
              </li>
              <li>
                It Uses Pinata's IPFS gateway to upload Content files to IPFS
                and then update the CID in the Smart Contract using EthersJS.
              </li>
              <li>
                It also uses EthersJS for accessing infos like price, current
                bidder, current CID, etc from SmartContract.
              </li>
              <li>
                Metamask browser extension is currently supported as the payment
                technology
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex section">
        <div className="heading">
          <h1>Who built this ??</h1>
        </div>
        <div className="para">
          <p>
            This was built by <span className="strike">two</span> 3 Students
            during the Hackathon <span className="bold">ETHForAll 2023</span>.
            Here are the links to their profiles:
            <ul>
              <li>
                <a href="https://theanuragshukla.github.io/portfolio">
                  Anurag Shukla
                </a>
              </li>
              <li>
                <a href="https://github.com/vatsalmadhur">
                  Madhur Vatsal Bharti
                </a>
              </li>
              <li>
                <a href="https:///github.com/kumarmanishrai">
                  Manish Kumar Rai
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex section">
        <div className="heading">
          <h1>Important links</h1>
        </div>
        <div className="para">
          <p>
            This project is completely OpenSource on Github. Here are few
            Destinations you might want to visit:
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/adspace">AdSpace</Link>
              </li>

              <li>
                <Link to="/manage">Manage</Link>
              </li>
              <li>
                <a href="https://github.com/theanuragshukla/ETHForAll">
                  Github Repo
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
