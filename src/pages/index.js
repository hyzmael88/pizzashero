import Menu from '@/components/Menu'
import Image from 'next/image'
import { useState } from 'react'


export default function Home() {
const pizzas = [
  {
    name: 'Extravaganza',
    description: "¡Nuestra Pizza Extravaganza es una delicia que tienes que probar! Hecha con jamón, champiñones, cebolla morada y queso de cabra.",
    image: "",
    ingredients: "",
    gradient: ""
  },
  {
    name: 'Italiana',
    description: "¿Te gusta la pizza levemente picante? Esta mezcla de sabor te encantará! Prueba nuestra Pizza Italiana con queso mozzarella, champiñones y cebolla morada. Ideal para una tarde de películas.",
    image: "",
    ingredients: "",
    gradient: ""
  },
  {
    name: 'Mexicana',
    description: "original y clásica masa fresca hecha al momento con orilla dorada y espolvoreada de especias que le dan nuestro toque único junto a ingredientes usados en la cocina mexicana.",
    image: "",
    ingredients: "",
    gradient: ""
  },
  {
    name: 'Veggie',
    description: "Deliciosa y saludable variante que celebra la frescura y la diversidad de los vegetales. Sobre una base de masa perfectamente horneada se despliega un festín de colores y sabores, desde tomates, champiñones frescos, pimientos vibrantes y aceitunas.",
    image: "",
    ingredients: "",
    gradient: ""
  },
  {
    name: 'Pepperoni',
    description: "El ingrediente favorito de muchos combinado en una masa fresca y hecha a mano para los fanáticos del pepperoni.",
    image: "",
    ingredients: "",
    gradient: ""
  },
  {
    name: 'Deluxe',
    description: "Disfrutar esta pizza es todo un lujo. Pepperoni, carne molida, champiñones, pimiento, cebolla. Ingredientes: Pepperoni, Carne Molida, Champiñones Frescos, Pimiento y Cebolla",
    image: "",
    ingredients: "",
    gradient: ""
  },
  {
    name: 'Especial',
    description: "La pizza para los amantes de la carne. Pepperoni, jamón, finas hierbas. Un deleite para todo tipo de reunión.",
    image: "",
    ingredients: "",
    gradient: ""
  },
]

const [eleccion, setEleccion] = useState(pizzas[0])

  return (
    <div className='w-full h-screen bg-red-500
    flex flex-col items-center overflow-hidden '>
      
        
    <h2 className='text-white font-lalezar text-6xl font-normal tracking-widest mt-[150px]'>
      {eleccion.name}
    </h2>
    <p className='w-[805px] text-white text-center font-lato text-20 font-normal tracking-wider leading-normal mt-10 mb-[100px]'>
      {eleccion.description}
    </p>
    <div>
      <Menu
        pizzas={pizzas}
        setEleccion={setEleccion}
        eleccion={eleccion}
      />
    </div>

    </div>
  )
}
