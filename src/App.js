import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes,  Route, useNavigate} from 'react-router-dom';
import axios from 'axios';

// components
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

// utils
import {axiosWithAuth} from './utils/AxiosWithAuth'

function App() {

  // STATE
  const [data, setData] = useState([])
  
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  
  // DATA FETCHED WITH TOKEN
  useEffect(()=>{
    axiosWithAuth()
    .get('http://localhost:9000/api/friends')
    .then(res => setData(res.data))
    .catch(err => console.error(err))
  
  
  },[])

  // NAV

  const navigate = useNavigate()

  
  //sets 'token' in localStorage
  const submit = (e) => {
    e.preventDefault()
  axios.post('http://localhost:9000/api/login', credentials)
  .then(res => {
    localStorage.setItem('token', res.data.token);
    navigate('/friends')
  })
  .catch(err => console.error(err))
  
  
}

// ACTIONS 


const addBud = (newFriend) => {
  setData([...data,
     {
      id: Date.now(),
      name: newFriend.name,
      email: newFriend.email
     }
    ])
}


const formChange = (e) => {
  setCredentials({
    ...credentials,
    [e.target.name] : e.target.value
  })
}


// RENDER
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home submit={submit} formChange={formChange} creds={credentials} />} />
        <Route path='/friends' element={<FriendsList data={data} />} />
        <Route path='/addfriend' element={<AddFriend addBud={addBud} />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
