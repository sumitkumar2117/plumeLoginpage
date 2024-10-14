import { useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import Cases from "./component/Cases";
import Thismonth from "./component/Thismonth";
import PatientStatus from "./component/PatientStatus";
import SIP from "./component/SIP";
import SearchBar from "./component/SearchBar";


export default function Dashboard(){

    const {setUserIDname} = useContext(UserContext);
    
    async function logout() {
        axios.post('http://localhost:4000/logout').then(() =>{
            setUserIDname(null);
        });
    }

    return (
        <div className="bg-slate-200 grid grid-cols-2 h-screen ">
            
            <div className="grid grid-rows-5 gap-y-7 p-5">
                <div className="row-span-2 p-4 bg-white border-[1px] border-[#C9C9C9] rounded-lg">
                    <div className="flex justify-between">
                        <div className="font-medium">Patient Status</div>
                        <Thismonth/>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-4 ">
                            {/* 1st */}
                            <PatientStatus/>
                            {/* 2nd */}
                            <PatientStatus/>
                            {/* 3rd */}
                            <PatientStatus/>
                            {/* 4th */}
                            <PatientStatus/>
                        </div>
                    </div>
                </div>
                <div className="row-span-3 bg-white border-[#C9C9C9] border-[1px] rounded-lg mb-8 ">
                    <div className="p-4 border-[1px] pb-10 border-[#E0E0E0]">
                        <div className="flex justify-between">
                            <div className="font-medium">SIP (Service In Progress)</div>
                            <Thismonth/>
                        </div>
                    </div>
                    <div>
                        <SIP status = {"Under Process"}/>
                        <SIP status = {"Query"}/>
                        <SIP status = {"Initial Pending"}/>
                        <SIP status = {"Initial Received"}/>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="p-4 bg-white border-[1px] border-[#C9C9C9] rounded-lg">
                    <div>
                        <div className="flex justify-between">
                            <select className="border-[1px] border-[#CBCBCB] p-3 px-7 rounded-lg text-[#0B1C33]" name="" id="">
                                <option value="">Planned Admission Cases</option>
                            </select>
                            <Thismonth/>
                        </div>
                        <div className="flex justify-between">
                            {/* Toggle */}
                            <div><input type="checkbox" name="" id="" /></div>
                            {/* SearchBar */}
                            <SearchBar/>
                        </div>     
                    </div>
                    <Cases/>
                </div>
                <button onClick={logout}
                className="bg-blue-800 w-36 text-white rounded-md mt-4  py-3">LOG OUT</button>
            </div>           
        </div>
    )
}