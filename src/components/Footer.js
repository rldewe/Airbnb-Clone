import React from "react";
import {BsTwitter,BsInstagram,BsFacebook} from "react-icons/bs"

export default function Footer(){
    return(

        <div className="sticky bottom-0">
            <div className="h-10 w-full bg-white border-t-2 shadow-sm items-center justify-center">
                {/**Social Media */}
                <p className="flex gap-12 mt-3 justify-center text-gray-600" ><BsFacebook/><BsInstagram/><BsTwitter/></p>
            </div>


        </div>
    )
}