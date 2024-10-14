import { useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";


export default function Dashboard(){

    const {setUserIDname} = useContext(UserContext);
    
    async function logout() {
        axios.post('http://localhost:4000/logout').then(() =>{
            setUserIDname(null);
        });
    }

    return (
        <div>
            <button onClick={logout}
                className="bg-blue-800 w-36">LOG OUT</button>
        </div>
    )
}