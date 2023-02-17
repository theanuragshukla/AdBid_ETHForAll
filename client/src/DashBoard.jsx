import NavBar from "./NavBar";
import { useContext, useState } from "react";
import { useEffect } from "react";
import ContractInfo from "./ContractInfo";
import { getContractData } from "./ContractMethods";
import { UserContext } from "./userContext";
function DashBoard() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState({
    cid: null,
    owner: null,
    price: null,
  });
  const [updateCount, setUpdateCount] = useState(0);

  const update = () => setUpdateCount((state) => state + 1);

  useEffect(() => {
    getContractData({ setData });
  }, [updateCount]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <NavBar />
      <ContractInfo data={data} user={user} update={update} />
    </>
  );
}

export default DashBoard;
