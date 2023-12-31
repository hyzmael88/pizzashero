import Image from 'next/image';
import React from 'react'
import izq from '../assets/botones/izq.png'
function Left({ indice, setIndice, pizzas, setSentido }) {
    

    return (
        <>
        {indice >= 1 && (
        <div
            className='w-[102px] h-[102px] rounded-full border-2 border-white flex items-center justify-center bg-[#D9D9D970]
             absolute bottom-[10%] left-[2%] text-center text-[50px] text-white cursor-pointer font-lateef'
            onClick={() =>{
                setSentido("izquierda")
                setIndice(indice - 1)}
            } 
        >
            <Image src={izq} className='w-[50px] h-[40px] object-contain' alt='derecha'/>
        </div>
        )}
        </>
    );
}

export default Left