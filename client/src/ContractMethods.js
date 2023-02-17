import { ethers } from "ethers";
import { TaskContractAddress } from "./config";
import TaskAbi from "./utils/AdBidContract.json";

const getContractData = async ({ setData }) => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      const signer = provider.getSigner();
      const TaskContract = new ethers.Contract(
        TaskContractAddress,
        TaskAbi.abi,
        signer
      );
      const cid = await TaskContract.getCid();
      const owner = await TaskContract.tempOwner();
      const price = await TaskContract.price();

      setData({ cid, owner, price });
    } else {
      console.log("Ethereum object doesn't exist");
    }
  } catch (error) {
    console.log(error);
  }
};

const setCid = async ({ user, newCid }) => {
  if (!user.connected) return;
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      const signer = provider.getSigner();
      const TaskContract = new ethers.Contract(
        TaskContractAddress,
        TaskAbi.abi,
        signer
      );
      const transaction = await TaskContract.setCid(newCid);
      const transactionReceipt = await transaction.wait();
      if (transactionReceipt.status !== 1) {
        alert("error message");
        return;
      } else {
        alert("done");
      }
    } else {
      console.log("Ethereum object doesn't exist");
    }
  } catch (error) {
    console.log(error);
  }
};

const bid = async ({ user, price }) => {
  if (!user.connected) return;
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      const signer = provider.getSigner();
      const TaskContract = new ethers.Contract(
        TaskContractAddress,
        TaskAbi.abi,
        signer
      );
      const transaction = await TaskContract.bid({
        value: price,
      });
      const transactionReceipt = await transaction.wait();
      if (transactionReceipt.status !== 1) {
        alert("error message");
        return;
      } else {
        alert("done");
      }
    } else {
      console.log("Ethereum object doesn't exist");
    }
  } catch (error) {
    console.log(error);
  }
};

export { getContractData, setCid, bid };
