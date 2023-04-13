import React from 'react'
import { BsFillBusFrontFill } from 'react-icons/bs'
import { FaWheelchair } from 'react-icons/fa'
import { MdFlight } from 'react-icons/md'
import './serviceCard.css'

export const cardData = [
    {
        id: 1,
        icon: <BsFillBusFrontFill size={30} />,
        title: "Maxi Taxi Perth"
    },
    {
        id: 2,
        icon: <MdFlight size={30} />,
        title: "Airport Taxi Perth"
    },
    {
        id: 3,
        icon: <FaWheelchair size={30} />,
        title: "Wheelchair Taxi Perth"
    },
    {
        id: 4,
        icon: <BsFillBusFrontFill size={30} />,
        title: "Baby Capsule Taxi"
    },
]



const ServiceCard = () => {
    return (
        <div className=' w-full flex items-center flex-wrap justify-center gap-6 p-6 sm:px-3 '>

            {cardData.map((item) => {
                return (
                    <div className='card-con w-[350px] h-[200px] flex flex-col gap-2 items-center justify-center bg-white text-black hover:bg-[#ff9800] rounded-lg' key={item.id}  >
                        <p className='service-title w-[80px] h-[80px] rounded-full hover:rounded-lg bg-red-100 flex items-center justify-center'>{item.icon}</p>
                        <p className=' text-lg font-semibold'>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}


export default ServiceCard