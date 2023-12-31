import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import der from '../assets/botones/der.png'

function Right({indice, setIndice,pizzas, setSentido}) {
    console.log(indice)

    return (
        <>
            {indice < pizzas.length-1 && (
                <div
                    className='w-[102px] h-[102px] rounded-full border-2 border-white flex items-center 
                    justify-center bg-[#D9D9D970] absolute bottom-[10%] right-[2%] text-center text-[50px]
                      text-white cursor-pointer font-lateef'
                     onClick={() => {
                        setIndice(indice + 1)
                        setSentido("derecha")
                    }}
                     >
                    <Image src={der} className='w-[50px] h-[40px] object-contain' alt='derecha'/>
                </div>
            )}
        </>
    )
}

export default Right