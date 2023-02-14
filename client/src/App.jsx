import './App.css';
import NavBar from './NavBar'
import AddNew from './AddNew';
import {useState} from 'react';
import { useEffect} from 'react';
import { TaskContractAddress } from './config.js';
import {ethers} from 'ethers';
import ContractInfo from './ContractInfo';
import TaskAbi from './utils/TaskContract.json'
import {UserContext} from './userContext'
function App() {

	const [user, setUser] = useState({
		connected:false,
		address:null
	})

	const [tasks,setTasks]=useState([]);

	const getAllTasks = async() => {
		if(!user.connected)return
		try {
			const {ethereum} = window

			if(ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const TaskContract = new ethers.Contract(
					TaskContractAddress,
					TaskAbi.abi,
					signer
				)

				let allTasks = await TaskContract.getMyTasks();
				setTasks(allTasks);
			} else {
				console.log("Ethereum object doesn't exist");
			}
		} catch(error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if(user.connected){
			//getAllTasks()
		}
	},[user]);

	return (
		<UserContext.Provider value={{user, setUser, tasks, setTasks}}>
		<div className="App">
		<NavBar/>
		<ContractInfo/>
		{/*
		  *<AddNew todos= {tasks} setTodos = {setTasks}></AddNew>
		  */}
		</div>
		</UserContext.Provider>
	);
}

export default App;
