import React from 'react'
import ServiceCard from '../../chip/serviceCard/ServiceCard'
import ServiceDetails from '../../chip/serviceDetails/ServiceDetails'
import './service.css'

const Service = () => {
    return (
        <div className=' w-[90%] mx-auto flex flex-col items-center '>
           <div className=' mt-20 flex flex-col items-center'>
           <div class="two alt-two">
                <h1>Our Services</h1>
            </div>
            <div className='w-[100%] mx-auto'>
                <ServiceCard />
            </div>
            <div className='w-[100%] mx-auto'>
                <ServiceDetails />
            </div>
           </div>
        </div>
    )
}

export default Service