import React, { useEffect, useState } from 'react'

function Right({indice, setIndice,pizzas}) {
    console.log(indice)

    return (
        <>
            {indice < pizzas.length-1 && (
                <div
                    className='w-[102px] h-[102px] rounded-full border-2 border-white flex items-center 
                    justify-center bg-[#D9D9D970] absolute bottom-[10%] right-[2%] text-center text-[50px]
                     pb-2 text-white'
                     onClick={() => setIndice(indice + 1)}
                     >
                    {">"}
                </div>
            )}
        </>
    )
}

export default Right