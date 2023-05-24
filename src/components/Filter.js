import React from "react";

export default function Filter({icon,title}){
    return (
        <div className="text-white bg-[#ff5a60]  flex items-center gap-2 rounded-full py-1 px-4
        my-2 hover:bg-white hover:text-gray-600 hover:font-bold"> 
            {icon}
            {title}
        </div>
    )
}