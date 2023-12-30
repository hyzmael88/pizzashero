import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Pizza from "./Pizza";

function Menu({ eleccion, setEleccion, pizzas, indice, sentido }) {
  const pizzasString = pizzas.map((pizza) => pizza.name).join(" ");
 

  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <div className="w-full h-full absolute rotate-[305deg] left-[150px] -top-[270px]">
        {pizzasString.split(" ").map((pizza, i) => (
          <div
            key={i}
            className=" text-white hover:text-black cursor-pointer
        flex flex-col justify-center items-center
        "
            style={{
              display: "inline-block",
              position: "absolute",
              left: "25%",
              transformOrigin: "0 600px",
              transform: `rotate(${i * 17}deg)`,
              fontSize: "1.2em",
              gap: "1em",
            }}
          >
            <div className="rotate-3">
              <span className="text-[17px]">{pizza}</span>
            </div>
            {eleccion.name === pizza && (
              <div className="ml-4 w-[25px] h-[25px] bg-white rounded-full" />
            )}
          </div>
        ))}
      </div>

      <div className="w-full h-full flex flex-col justify-center overflow-hidden relative ">
        <div
          className="w-[1152px] h-[1152px] rounded-full border-2 border-white flex items-center justify-center relative"
          style={{ borderRadius: "50%" }}
        >
          <div className="w-[1098px] h-[1098px] rounded-full border-[2px] border-[#b0b0b051] flex items-center justify-center  opacity-32 ">
            <AnimatePresence mode="wait">
             <Pizza
            sentido={sentido}
            eleccion={eleccion}
            key={eleccion.name}
             />
             </AnimatePresence>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
