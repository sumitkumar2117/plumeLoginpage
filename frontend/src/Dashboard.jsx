import { useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import Phone from '/Dashboard/Phone_Solid.svg'
import Admitted from '/Dashboard/Admitted.svg'


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
                        <div>
                            <select className="border-[1px] border-[#DAE3F8] rounded-lg px-4 h-8" name="" id="">
                                <option value="">This Month</option>
                                <option value="">Jan</option>
                                <option value="">Feb</option>
                                <option value="">Mar</option>
                                <option value="">May</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-4 ">
                            {/* 1st */}
                            <div className="w-full bg-[#FFF8E3] p-3 rounded-xl flex items-center border-[#D9D9D9] border-[1px]">
                                <div className="bg-[#E5BF59] rounded-full p-3 text-white text-2xl">50</div>
                                <div className="ml-4 text-[#E5BF59]">
                                    <div className="font-bold text-xl">Intimations </div>
                                    <div>Patients</div>
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className="w-full bg-[#FFF8E3] p-3 rounded-xl flex items-center">
                                <div className="bg-[#E5BF59] rounded-full p-3 text-white text-2xl">50</div>
                                <div className="ml-4 text-[#E5BF59]">
                                    <div className="font-bold text-xl">Intimations </div>
                                    <div>Patients</div>
                                </div>
                            </div>
                            <div className="w-full bg-[#FFF8E3] p-3 rounded-xl flex items-center">
                                <div className="bg-[#E5BF59] rounded-full p-3 text-white text-2xl">50</div>
                                <div className="ml-4 text-[#E5BF59]">
                                    <div className="font-bold text-xl">Intimations </div>
                                    <div>Patients</div>
                                </div>
                            </div>
                            <div className="w-full bg-[#FFF8E3] p-3 rounded-xl flex items-center">
                                <div className="bg-[#E5BF59] rounded-full p-3 text-white text-2xl">50</div>
                                <div className="ml-4 text-[#E5BF59]">
                                    <div className="font-bold text-xl">Intimations </div>
                                    <div>Patients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-span-3 bg-white border-[#C9C9C9] border-[1px] rounded-lg mb-8 ">
                    <div className="p-4 border-[1px] pb-10 border-[#E0E0E0]">
                        <div className="flex justify-between">
                            <div className="font-medium">Patient Status</div>
                            <div>
                                <select className="border-[1px] border-[#DAE3F8] rounded-lg px-4 h-8" name="" id="">
                                    <option value="">This Month</option>
                                    <option value="">Jan</option>
                                    <option value="">Feb</option>
                                    <option value="">Mar</option>
                                    <option value="">May</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between w-full p-5 border-b-[1px]">
                            <div className="font-medium w-32">Under Process</div>
                            <div className="px-12 py-1 bg-[#F1F6FF] text-[#9AB0D8] border-[#9AB0D8] border-[1px] rounded-md ">10</div>
                            <button className="bg-[#3788E5] px-10 mr-6 text-white rounded-md" >View</button>
                        </div>
                        <div className="flex justify-between w-full p-5 border-b-[1px]">
                            <div className="font-medium w-32">Query</div>
                            <div className="px-12 py-1 bg-[#F1F6FF] text-[#9AB0D8] border-[#9AB0D8] border-[1px] rounded-md ">10</div>
                            <button className="bg-[#3788E5] px-10 mr-6 text-white rounded-md" >View</button>
                        </div>
                        <div className="flex justify-between w-full p-5 border-b-[1px]">
                            <div className="font-medium  w-32">Under Process</div>
                            <div className="px-12 py-1 bg-[#F1F6FF] text-[#9AB0D8] border-[#9AB0D8] border-[1px] rounded-md ">10</div>
                            <button className="bg-[#3788E5] px-10 mr-6 text-white rounded-md" >View</button>
                        </div>
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
                            <select className="border-[1px] border-[#DAE3F8] rounded-lg px-4 h-8" name="" id="">
                                    <option value="">This Month</option>
                                    <option value="">Jan</option>
                                    <option value="">Feb</option>
                                    <option value="">Mar</option>
                                    <option value="">May</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <div>checkbox</div>
                            <div>SearchBar</div>
                        </div>     
                    </div>

                    <div className="rounded-lg border-[1px] border-[#00A82E] mt-3">
                        <div className="flex justify-between rounded-t-md bg-[#13B2AD] text-white p-3">
                            <div className="flex ">
                                <div className="mr-14">IP:14</div>
                                <div className="mr-14">Priyanshu Raj</div>
                                <div>27 yrs</div>
                            </div>
                            <div className="flex">
                                <img src={Phone} alt="" />
                                <div className="ml-2">7500190739  </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 p-4 ">
                            <div className="grid col-span-1 gap-y-4">
                                <div>Service Provider-</div>
                                <div>Hospital-</div>
                                <div>Treatment-</div>
                            </div>
                            <div className="grid col-span-3 gap-y-4">
                                <div>Aditya Birla Health Insurance Company Ltd</div>
                                <div>Fortis Noida</div>
                                <div>Radiation Therapy</div>
                            </div>

                        </div>
                        <div className="grid grid-cols-8 p-3 gap-x-5 text-sm">
                            <div className="p-4 col-span-3 flex border-[1px] border-[#D2D2D2] rounded-lg">
                                <img src={Admitted} className="" alt="" />
                                <div className="ml-3 text-sm">
                                    <div>Admitted</div>
                                    <div>06-Mar-2024</div>
                                </div>
                            </div>
                            <div className="p-4 col-span-2 border-[1px] border-[#D2D2D2] rounded-lg">
                                <div>Claim Status</div>
                                <div>Initial Pending</div>
                            </div>
                            <div className="p-4 col-span-3 border-[1px] border-[#D2D2D2] rounded-lg">
                                <div>Hospital Ops Status</div>
                                <div className="flex justify-between">
                                    <div>Status</div>
                                    <div className="text-[#30C118]">Yes</div>
                                    <div className="bg-[#30C118] rounded-lg text-white p-1">25</div>
                                    <div>View</div>
                                </div>
                            </div>
                            

                        </div>

                    </div>
                </div>
                <button onClick={logout}
                className="bg-blue-800 w-36 text-white rounded-md mt-4  py-3">LOG OUT</button>
            
            </div>




           
        </div>
    )
}