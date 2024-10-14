import React from 'react'

function SIP(props) {
  return (
    <div className="flex justify-between w-full p-5 border-b-[1px]">
        <div className="font-medium w-32">{props.status}</div>
        <div className="px-12 py-1 bg-[#F1F6FF] text-[#9AB0D8] border-[#9AB0D8] border-[1px] rounded-md ">10</div>
        <button className="bg-[#3788E5] px-10 mr-6 text-white rounded-md" >View</button>
    </div>
  )
}

export default SIP;