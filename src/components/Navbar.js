import React from "react"
import logo from "../assets/logo.png";
import { TbWorld} from 'react-icons/tb';
import { GoThreeBars} from 'react-icons/go';
import { VscAccount} from 'react-icons/vsc';
import { AiOutlineSearch} from 'react-icons/ai';
import { BsFillHouseDoorFill} from 'react-icons/bs';





export default function Navbar(){
    return (
            <nav className="border-b bg-white flex items-center  justify-between sticky top-0 z-50">
                <div className="nav-left h-20 flex ">
                        <img src={logo} className="object mx-3"/>
                </div>
            <div className="nav-middle hidden lg:flex relative items-center shadow-md shadow-gray-400 border rounded-full justify-center " >
            <input type="search" placeholder="" className="py-2.5 w-[20rem] rounded-full" />

                <div className="flex absolute items-center justify-between w-full pr-12 pl-4 font-semibold text-gray-500 grid-cols-3 divide-x">
                        <button className=" w-full">Place</button>
                        <button className="w-full">Time </button>
                        <button className="w-full text-gray-600/60">Group Size</button>

                    </div>
                <div className=" rounded-full p-2 bg-[#ff5a60] mr-2 " >
                    <AiOutlineSearch className="text-white"/>
                </div>
                   

                    

            </div>

            <div className="nav-right flex items-center mr-3 justify-center font-semibold text-gray-600 ">
                    <p className="mr-6">Rent House</p>
                    <div className="flex justify-center items-center mr-5">
                    <TbWorld className="mx-4"/>
                    <p className="-ml-4 mr-6">EN</p>
                    </div>
                    <div className="flex items-center border rounded-full justify-center px-3 py-2 shadow-lg  bg-[#ff5a60] text-white hover:bg-[#ec6d71] ">
                        <GoThreeBars className="mr-2"/>
                        <VscAccount className="mr-1"/>

                    </div>

                </div>
            </nav>
    )
}