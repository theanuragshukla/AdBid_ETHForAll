# AdBid 

## Video Demo Link

[watch it on youtube](https://youtu.be/aOH3-FZmMUo)

# 🧭 Table of contents

- [`Introduction`](#Introduction)
- [🚀 Quick Start](#🚀-Quick-Start)
- [🚀 How this works](#How-this-dApp-works)
	- [`Frontend`](#Frontend)
	- [`Backend`](#Backend)
	- [`Smart Contract`](#Smart-Contract)


# Introduction

This is our Project for Submission in the Hackathon `ETHForAll`.

In simplest terms, This is a Platform which supports bidding for an AdSpace. 
The highest Bidder controls the contents of the AdSpace. The Bidding is open Forever. At any point of time, the current Highest Bidder can modify the content of the Adspace and any other person can Claim the ownerShip of the AdSpace by bidding more than the previous Highest Bid Amount(keeping GAS in consideration).

# 🚀 Quick Start

📄 Clone or fork this repo and change current directory to `ETHForAll/client`:

```sh
git clone https://github.com/theanuragshukla/ETHForAll.git
```

💿 Install all dependencies:

```sh
cd ETHForAll/client
npm install
```
🚴‍♂️ Run your App:

```sh
npm run dev
```

Any Changes in SmartContract can be done in `/Blockchain` directory and can be redeployed using ` npx hardhat run scripts/deploy.js --network polygon` after configuring you API Keys for Metamask and Alchemy.


# How this dApp works

### This dApp has three main parts 
- [`Frontend`](#Frontend)
- [`Backend`](#Backend)
- [`Smart Contract`](#Smart-Contract)


# Frontend

This dApp uses `React` at its core for frontend applications.

# Backend

This Dapp don't need any Centralised server for its working. Everything Happens through APIs and Clientside Technology.

# Smart-Contract

The Smart Contract for this dApp is written in `Solidity` language and is currently deployed on the `Polygon Testnet`.

This Contract takes care of the Transactions happening and manages the CIDs and Bidders.

### Contract Address
```
contractAddress: 0x6286cD4aD95663E94514399AD649Deb44271B76D
```

# Where is this dApp deployed

Currently this dApp is deployed on [`IPFS`](https://bafybeih5tisg3kbny67gwgrawfl5qhijigrtpapq42fnit6y5nvndcmape.ipfs.dweb.link/) and the Smart-Contract is deployed on the `Polygon Testnet`.


# 🤝 `Need help?`

If you need help with setting up the environment or have any other questions - write to us on our email or social media and we will check asap.




