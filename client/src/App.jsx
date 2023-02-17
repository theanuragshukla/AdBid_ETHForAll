import './App.css';
import NavBar from './NavBar'
import {useState} from 'react';
import { useEffect} from 'react';
import ContractInfo from './ContractInfo';
import {UserContext} from './userContext'
import {bid, getContractData, setCid} from './ContractMethods';
function App() {

	const [user, setUser] = useState({
		connected:false,
		address:null
	})
	const [data,setData]=useState({
		cid:null, 
		owner:null, 
		price:null
	});

	useEffect(() => {
		getContractData({setData})
	},[]);

	useEffect(()=>{
		console.log(data)
	}, [data])

	return (
		<UserContext.Provider value={{user, setUser}}>
		<div className="App">
		<NavBar/>
		<ContractInfo/>
		<button onClick={()=>{
			setCid({user, newCid :"asdf"})
		}}>SetCid</button>
		<button onClick={()=>{
			bid({user, price:200})
		}}>Bid</button>

		</div>
		</UserContext.Provider>
	);
}

export default App;
