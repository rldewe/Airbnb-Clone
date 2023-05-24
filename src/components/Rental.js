import React from "react";

export default function Rental({title,image,price,desc,time,stars,points}){
    return(
        <div className="relative group"> 
            <div className="flex">
                <img src={image} alt="" className="object-cover rounded-[1rem] opacity-100  group-hover:opacity-70 duration-500  group-hover:backdrop-brightness-50"></img>

                <div className=" absolute inset-0 flex    ">
                <p className=" absolute text-white font-bold text-[20px] opacity-100 group-hover:opacity-0 transition-opacity left-3 bottom-6">{title} <br></br> {price}</p>

                <p className=" absolute text-[16px] text-white opacity-0 group-hover:opacity-100 transition-opacity left-3 bottom-12 mr-12">{desc}</p>
                <p className=" absolute text-[12px] text-white opacity-0 group-hover:opacity-100 transition-opacity left-3 bottom-7">{time}</p>
                <p className=" absolute flex justify-center items-center text-[15px] text-white opacity-0 group-hover:opacity-100 transition-opacity right-3 bottom-7">{stars}{points}</p>

                </div>

            
            </div>
            
        </div>
    )
}
