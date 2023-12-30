import Image from "next/image";
import React, { useEffect, useRef } from "react";


function Menu({ eleccion, setEleccion, pizzas }) {
    const pizzasString = pizzas.map((pizza) => pizza.name).join(" ");
    

        

    return (
        <div className="w-full h-full flex flex-col items-center relative">
         <div className="w-full h-full absolute rotate-[305deg] left-[50px] -top-[225px]">
            
         {pizzasString.split(" ").map((pizza, i) => (
    <span 
        key={i} 
        className="text-white hover:text-black cursor-pointer"
        style={{
            display: 'inline-block',
            position: 'absolute',
            left: '25%',
            transformOrigin: '0 700px',
            transform: `rotate(${i * 17}deg)`,
            fontSize: '1.2em'
        }}
    >
        {pizza}
    </span>
))}
         </div>

            <div className="w-full h-full flex flex-col justify-center overflow-hidden relative ">
                <div className="w-[1152px] h-[1152px] rounded-full border-2 border-white flex items-center justify-center relative"
                 style={{ borderRadius: '50%' }}>
                    <div className="w-[1098px] h-[1098px] rounded-full border-[2px] border-white flex items-center justify-center  opacity-32 ">
                        <Image src={eleccion.image} alt={eleccion.name} className="w-[949px] " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
