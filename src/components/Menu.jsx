import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ReactCurvedText from 'react-curved-text';


function Menu({ eleccion, setEleccion, pizzas }) {
    const pizzasString = pizzas.map((pizza) => pizza.name).join(" ");
    console.log(pizzasString)
        

    return (
        <div className="w-full h-full flex flex-col items-center relative">
         <ReactCurvedText
    width={1142}
    height={80}
    cx={571} // La mitad del ancho
    cy={150}
    rx={571} // La mitad del ancho
    ry={100}
    startOffset={285} // La mitad del ancho dividido por 2
    reversed={true}
    text={pizzasString}
    textProps={{ style: { fontSize: 24 } }}
    textPathProps={null}
    tspanProps={null}
    ellipseProps={null}
    svgProps={null}
/>

            <div className="w-full h-full flex flex-col justify-center overflow-hidden relative ">
                <div className="w-[1152px] h-[1152px] rounded-full border-2 border-white flex items-center justify-center relative " style={{ borderRadius: '50%' }}>
                    <div className="w-[1098px] h-[1098px] rounded-full border-[2px] border-white flex items-center justify-center  opacity-32 ">
                        <Image src="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
