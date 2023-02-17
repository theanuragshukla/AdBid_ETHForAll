import './App.css';
import {useState} from 'react';
import {UserContext} from './userContext'
import {Route, Routes} from 'react-router-dom';
import DashBoard from './DashBoard';
import Homepage from './Homepage'
function App() {

	const [user, setUser] = useState({
		connected:false,
		address:null
	})

	return (
		<UserContext.Provider value={{user, setUser}}>
		<div className="App">
		<Routes>
		<Route path='/' element={<Homepage/>}/>
		<Route path='/manage' element={<DashBoard/>}/>
		</Routes>
		</div>
		</UserContext.Provider>
	);
}

export default App;
