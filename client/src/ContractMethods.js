import { ethers } from "ethers";
import { TaskContractAddress } from "./config";
import TaskAbi from "./utils/AdBidContract.json";

const getContractData = async ({ setData }) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://matic-mumbai.chainstacklabs.com/"
    );
    const TaskContract = new ethers.Contract(
      TaskContractAddress,
      TaskAbi.abi,
      provider
    );
    const cid = await TaskContract.getCid();
    const owner = await TaskContract.tempOwner();
    const price = await TaskContract.price();

    setData({ cid, owner, price });
  } catch (error) {
    console.log(error);
  }
};

const setCid = async ({ user, newCid }) => {
  if (!user.connected) return;
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
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
        alert("done! content updated");
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
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
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
        alert("done! transaction successfull");
      }
    } else {
      console.log("Ethereum object doesn't exist");
    }
  } catch (error) {
    console.log(error);
  }
};

export { getContractData, setCid, bid };
