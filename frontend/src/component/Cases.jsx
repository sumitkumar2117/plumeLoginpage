import Phone from '/Dashboard/Phone_Solid.svg'
import Admitted from '/Dashboard/Admitted.svg'

export default function Cases(){
    return (
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
    )
}