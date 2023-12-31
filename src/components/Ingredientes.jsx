import Image from 'next/image'
import React from 'react'

function Ingredientes({eleccion}) {
  return (
    <div className='w-full h-full relative '>
        <Image src={eleccion.ingredients} alt={eleccion.name} className='absolute -left-[100px] -top-[200px] rotate-[10deg] sombraIngredientes'/>
        <Image src={eleccion.ingredients} alt={eleccion.name} className='absolute -right-[100px] -top-[200px] rotate-[-90deg] sombraIngredientes'/>
    </div>
  )
}

export default Ingredientes