import React from 'react'
import FormSection from './../formSection/FormSection';

const Hero = () => {
    return (
        <div className=' relative top-0'>
            <div className="hero h-[900px] w-full sm:h-fit">

                <img className='image w-full object-cover h-[700px] sm:object-contain   sm:h-fit opacity-40' src="https://cdn.pixabay.com/photo/2016/08/06/12/34/taxi-1574278_960_720.jpg" alt="" />

            </div>
            <div className=' absolute top-[40%] sm:top-28 left-[50%] -translate-x-1/2 -translate-y-[100%] sm:-translate-y-[20%] flex flex-col items-center gap-3 w-[90%]'>
                <h1 className=' text-7xl font-bold sm:text-4xl'>MAXI TAXI</h1>
                <p className=' text-xl font-medium sm:text-sm text-center text-gray-100'>7/10/13 SEATERS FOR GROUP TRANSFERS , BIKES , WHEELCHAIRS.</p>
            </div>
            <FormSection />
        </div>
    )
}

export default Hero