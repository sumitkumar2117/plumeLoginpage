import LoginLogo from '/login/logo.svg'
import Group from '/login/Group.svg'
import Background from '/login/Vector.svg'
import { useState } from 'react';

function Login() {
    const [userID,setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');


  return (
    <div className="py-12 pb-16 pl-20 grid grid-cols-5 w-full bg-cover" 
        style={{backgroundImage: "url(/login/Vector.svg)", color: "black"}}>
        <div className='col-span-3'>
            <img src={LoginLogo} alt="" />
            <img className='mt-14' src={Group} alt="" />
            
        </div>
        <div className='col-span-2 items-center'>
            <div className='grid my-16 pt-8 justify-center mx-5'>
                <div className='grid text-center'>
                    <div className='flex text-4xl font-semibold'> Welcome To <div className='text-[#01D35A] ml-2'> Plunes AWC</div></div>
                    <div className='mt-7 text-lg font-semibold'>Log-in To your Account </div>
                    <div className='w-full grid justify-center'><hr className='w-52 items-center h-1' /></div>
                </div>
                <div className='mt-12'>
                    <form className='gap-y-7 grid' action="">
                        <div className='pr-8' >
                            <div className='text-xs font-medium'>User ID</div>
                            <input value={userID}
                                onChange={e => setUserID(e.target.value)}
                                className='mt-1 w-full h-16 p-6 rounded-[10px] border-[1px] border-[#8AC0FF] text-[#4F4F4F]' 
                                type="text"
                                placeholder='Priyanshu.raj@Plunes.com'
                                />
                        </div>
                        <div className='pr-8' >
                            <div className='text-xs font-medium'>Mobile No</div>
                            <input value={mobileNo}
                                onChange={e => setMobileNo(e.target.value)}
                                className='mt-1 w-full h-16 p-6 rounded-[10px] border-[1px] border-[#8AC0FF] text-[#4F4F4F]'
                                type="text" 
                                placeholder='+91 8507653666'
                                />
                            
                        </div>
                        <div className='pr-8' >
                            <div className='text-xs font-medium'>Password</div>
                            <input value={password}
                                onChange={e => setPassword(e.target.value)}
                                className='mt-1 w-full h-16 p-6 rounded-[10px] border-[1px] border-[#8AC0FF] text-[#4F4F4F]'
                                type="password"
                                placeholder='******************'
                                />
                            <div className='mt-1 text-xs w-full justify-end grid'>Forgot Your Password ?</div>
                        </div>
                        <div className='pr-8 mt-6'>
                            <button className='w-full text-xl rounded-md shadow-md shadow-[#C0C0C0] font-semibold bg-[#00A82E] py-3 mr-3 text-white'>Login</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Login