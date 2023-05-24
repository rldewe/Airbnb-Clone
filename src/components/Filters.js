import React from "react"
import Filter from "./Filter";

import { AiOutlineKey} from 'react-icons/ai';
import { GiMountainCave} from 'react-icons/gi';
import { AiOutlineFire} from 'react-icons/ai';
import { MdOutlineVilla} from 'react-icons/md';
import { BiBed} from 'react-icons/bi';
import { MdOutlineDirectionsBoatFilled} from 'react-icons/md';


export default function Filters(){
    {/*creating array */}
    const sort=[
        {title:"Key",icon:<AiOutlineKey/>},
        {title:"Mountain",icon:<GiMountainCave/>},
        {title:"Fire",icon:<AiOutlineFire/>},
        {title:"Villa",icon:<MdOutlineVilla/>},
        {title:"Room",icon:<BiBed/>},
        {title:"Cruise",icon:<MdOutlineDirectionsBoatFilled/>}

    ];
    return (
        
        <div className="flex justify-center gap-4 items-center mt-4 ">

            {sort.map((obg) => <Filter title={obg.title} icon={obg.icon}/>)}
        </div>




    )
}


