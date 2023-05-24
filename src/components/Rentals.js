import React from "react";
import abc_image from "../assets/abc_image.png";
import house1 from "../assets/house2.png";
import house2 from "../assets/house3.png"
import house3 from "../assets/house4.png"
import house4 from "../assets/house5.png";
import house5 from "../assets/house6.png";
import house6 from "../assets/house7.png";
import house7 from "../assets/house8.png";
import house8 from "../assets/house2.png";
import house9 from "../assets/house10.png";
import house10 from "../assets/house11.png";
import house11 from "../assets/abc_image.png";

import Rental from "./Rental";
import { AiOutlineStar } from 'react-icons/ai';

export default function Rentals(){
    
    const rentals=[
        {title:"Bali, Indonesia",image:abc_image,price:"$111",desc:"Escape to a tranquil paradise with a private villa nestled amidst lush tropical gardens.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"5.0"},
        {title:"Reykjavik, Iceland",image:house1,price:"$141",desc:"Experience the wonders of Iceland from a cozy apartment in the heart of the capital, just steps away from geothermal spas and vibrant nightlife.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"1.4"},
        {title:"Kyoto, Japan",image:house3,price:"$1090",desc:"Immerse yourself in Japanese tradition at a traditional Machiya house, where sliding doors open to reveal serene Zen gardens.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"3.0"},
        {title:"Cape Town, South Africa",image:house4,price:"$625",desc:"Indulge in luxury with a seaside penthouse boasting panoramic views of the Atlantic Ocean and direct access to the city's vibrant waterfront.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"4.0"},
        {title:"Santorini, Greece",image:house5,price:"$500",desc:"Unwind in a charming cave house carved into the cliffs, offering breathtaking views of the Aegean Sea and access to secluded beaches.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"2.2"},
        {title:"Queenstown, New Zealand",image:house6,price:"$325",desc:"Embark on adrenaline-fueled adventures by day and retreat to a cozy mountain chalet with a fireplace and stunning alpine vistas.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"5.0"},
        {title:"Rio de Janeiro, Brazil",image:house7,price:"$400",desc:"Live the beachfront dream in a stylish apartment overlooking Copacabana, where samba rhythms and vibrant street life await.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"5.0"},
        {title:"Marrakech, Morocco",image:house8,price:"$100",desc:"Step into a world of Moroccan opulence with a riad featuring intricately tiled courtyards, a refreshing plunge pool, and a rooftop terrace.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"4.4"},
        {title:"Vancouver, Canada",image:house9,price:"$1199",desc:"Experience urban luxury in a sleek downtown condo with floor-to-ceiling windows showcasing breathtaking views of the city skyline and mountains.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"5.0"},
        {title:"Edinburgh, Scotland",image:house10,price:"$200",desc:"Uncover the secrets of the Royal Mile from a charming historic apartment with exposed stone walls and a cozy fireplace.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"5.0"},
        {title:"Bali, Indonesia",image:house11,price:"$330",desc:"Uncover the secrets of the Royal Mile from a charming historic apartment with exposed stone walls and a cozy fireplace.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"4.0"},
        {title:"Reykjavik, Iceland",image:house1,price:"$400",desc:"Experience the wonders of Iceland from a cozy apartment in the heart of the capital, just steps away from geothermal spas and vibrant nightlife.",time:"29 Aug-12 Oct",stars:<AiOutlineStar/>,points:"3.0"}



     ]
    



    return(


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-4 mr-4 p-4">
            
            {rentals.map((rental)=> 
            <Rental title={rental.title}
            image={rental.image}
            price={rental.price}
            desc={rental.desc}
            time={rental.time}
            stars={rental.stars}
            points={rental.points}/>)}
        </div>
    )
}