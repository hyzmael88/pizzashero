import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

function Pizza({eleccion, sentido}) {

    

    const variants = {
        in: {
            rotate: sentido == "derecha" ? "20deg" : "-20deg",
          transition: { duration: 1 },
        },
        
        initial: {
            rotate: 0,
             transition: { duration: 1 }  }
      };
  return (
    <motion.div
    variants={variants}
    initial="initial"
    animate="in"
    className="w-full h-full "
  >
  <Image
  src={eleccion.image}
  alt={eleccion.name}
  className='w-[949px] h-[949px] object-cover'
/>
  </motion.div>
  )
}

export default Pizza