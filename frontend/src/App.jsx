import { useContext } from "react";
import Login from "./Login";
import axios from 'axios';
import {UserContext} from './UserContext'
import Dashboard from "./Dashboard";

export default function App(){
  // axios.defaults.url = 'http://localhost:4000';
  axios.defaults.withCredentials = true;

  const {userID} = useContext(UserContext);

  if(userID){
    return <Dashboard/>  }

  return (
      <Login></Login>
  )
}