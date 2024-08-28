import { SiGravatar } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { FcMusic } from "react-icons/fc";
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className=" bg-gray-300 shadow-md" >
            <div className=" w-[1400px] m-auto flex p-4 justify-between items-center">
                <div className=' '>
                   <div className="rounded-3xl  shadow-lg bg-white  inline-block w-[74px] pl-2  relative">
                        <div className='flex  logo'>
                                <span className='font-bold text-[36px]  text-lime-700'>S</span>
                                <div className="flex flex-col text-lg">
                                    <span className='font-bold text-sm text-yellow-500'>B</span>
                                    <span><SiGravatar className="text-yellow-600" /> </span>
                                </div >
                                <span className='font-bold text-[20px] absolute left-[42px] text-green-700'>M</span>
                        </div>
                   </div>
                </div>
                <div className="flex gap-8">
                    <Link to={"/register"} className="text-red-600 font-mono font-bold text-[22px]">REGISTER</Link>
                    <Link to={"/"} className="text-blue-800 font-mono font-bold text-[22px]">HOME</Link>
                </div>
            </div>

        </div>
    )
}

export default Header
