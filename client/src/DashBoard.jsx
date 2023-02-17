import NavBar from "./NavBar";
import { useContext, useState } from "react";
import { useEffect } from "react";
import ContractInfo from "./ContractInfo";
import { bid, getContractData, setCid } from "./ContractMethods";
import { UserContext } from "./userContext";
function DashBoard() {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({
    cid: null,
    owner: null,
    price: null,
  });

  useEffect(() => {
    getContractData({ setData });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <NavBar />
      <ContractInfo data={data} user={user} />
    </>
  );
}

export default DashBoard;
