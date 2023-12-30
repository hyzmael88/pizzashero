import Menu from '@/components/Menu'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

import extravaganza from '../assets/pizzas/extravaganza.png'
import italiana from '../assets/pizzas/italiana.png'
import mexicana from '../assets/pizzas/mexicana.png'
import veggie from '../assets/pizzas/veggie.png'
import pepperoni from '../assets/pizzas/pepperoni.png'
import deluxe from '../assets/pizzas/deluxe.png'
import especial from '../assets/pizzas/especial.png'
import Left from '@/components/Left'
import Right from '@/components/Right'

import ingrediente1 from '../assets/ingredientes/1.png'
import ingrediente2 from '../assets/ingredientes/2.png'
import ingrediente3 from '../assets/ingredientes/3.png'
import ingrediente4 from '../assets/ingredientes/4.png'
import ingrediente5 from '../assets/ingredientes/5.png'
import ingrediente6 from '../assets/ingredientes/6.png'
import ingrediente7 from '../assets/ingredientes/7.png'
import Ingredientes from '@/components/Ingredientes'
import { AnimatePresence } from 'framer-motion'



export default function Home() {
  const pizzas = useMemo(() => [
    {
      name: 'Extravaganza',
      description: "¡Nuestra Pizza Extravaganza es una delicia que tienes que probar! Hecha con jamón, champiñones, cebolla morada y queso de cabra.",
      image: extravaganza,
      ingredients: ingrediente1,
      gradient: "extravaganza"
    },
    {
      name: 'Italiana',
      description: "¿Te gusta la pizza levemente picante? Esta mezcla de sabor te encantará! Prueba nuestra Pizza Italiana con queso mozzarella, champiñones y cebolla morada. Ideal para una tarde de películas.",
      image: italiana,
      ingredients: ingrediente2,
      gradient: "italiana"
    },
    {
      name: 'Mexicana',
      description: "original y clásica masa fresca hecha al momento con orilla dorada y espolvoreada de especias que le dan nuestro toque único junto a ingredientes usados en la cocina mexicana.",
      image: mexicana,
      ingredients: ingrediente3,
      gradient: "mexicana"
    },
    {
      name: 'Veggie',
      description: "Deliciosa y saludable variante que celebra la frescura y la diversidad de los vegetales. Sobre una base de masa perfectamente horneada se despliega un festín de colores y sabores, desde tomates, champiñones frescos, pimientos vibrantes y aceitunas.",
      image: veggie,
      ingredients: ingrediente4,
      gradient: "veggie"
    },
    {
      name: 'Pepperoni',
      description: "El ingrediente favorito de muchos combinado en una masa fresca y hecha a mano para los fanáticos del pepperoni.",
      image: pepperoni,
      ingredients: ingrediente5,
      gradient: "pepperoni"
    },
    {
      name: 'Deluxe',
      description: "Disfrutar esta pizza es todo un lujo. Pepperoni, carne molida, champiñones, pimiento, cebolla. Ingredientes: Pepperoni, Carne Molida, Champiñones Frescos, Pimiento y Cebolla",
      image: deluxe,
      ingredients: ingrediente6,
      gradient: "deluxe"
    },
    {
      name: 'Especial',
      description: "La pizza para los amantes de la carne. Pepperoni, jamón, finas hierbas. Un deleite para todo tipo de reunión.",
      image: especial,
      ingredients: ingrediente7,
      gradient: "especial"
    },
  ], []);

  const [eleccion, setEleccion] = useState(pizzas[0])
  const [indice, setIndice] = useState(0)

  console.log(indice)

  const [sentido, setSentido] = useState("derecha")




  useEffect(() => {
    setEleccion(pizzas[indice])
  }, [indice])

  return (
    <div className={`w-full h-screen 
    flex flex-col items-center overflow-hidden ${eleccion.gradient} relative`}
    >
      <Ingredientes
      eleccion={eleccion}
      />

      <h2 className='text-white  text-6xl  mt-[100px] font-lalezar tracking-[2.38px] font-bold '>
        {eleccion.name}
      </h2>
      <p className='w-[805px] text-white text-center text-[20px] mt-10
       mb-[100px] z-10 font-lato '>
        {eleccion.description}
      </p>
      <div>
        <Menu
          pizzas={pizzas}
          setEleccion={setEleccion}
          eleccion={eleccion}
          indice={indice}
          sentido={sentido}
          />
      </div>
      <Left
        setIndice={setIndice}
        pizzas={pizzas}
        indice={indice}
        setSentido={setSentido}
      />
      <Right
        setIndice={setIndice}
        pizzas={pizzas}
        indice={indice}
        setSentido={setSentido}
      />
    </div>
  )
}
