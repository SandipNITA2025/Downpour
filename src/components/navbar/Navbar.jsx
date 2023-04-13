import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <nav className=' fixed z-10 bg-white w-full m-auto p-2 flex items-center justify-between'>
            {/* left */}
            <div className=' flex items-center'>
                <FiMenu className=' hidden sm:flex' onClick={() => setIsActive(true)} size={20} />
                <Link to='/' className=' w-[260px] sm:w-[150px]'>
                    <img className=' object-cover' src="https://www.maxitaxiperth.com.au/assets/image/maxitaxi-logo.png" alt="logo" />
                </Link>

            </div>
            {/* center */}
            <div className={`${isActive ? "center" : 'sm:hidden'}  px-2 flex items-center sm:items-start sm:p-3 sm:py-4 gap-4`}>
                <RxCross2 className=' hidden sm:flex' onClick={() => setIsActive(false)} size={20} />
                <div className='c-items flex'>
                    <ul className=' flex items-center space-x-6 sm:space-x-0'>
                        <Link to='/' onClick={() => setIsActive(false)} className=' text-lg font-medium text-black hover:text-yellow-400'>Book</Link>
                        <Link to='/about' onClick={() => setIsActive(false)} className=' text-lg font-medium text-black hover:text-yellow-400'>About</Link>
                        <Link to='/services' onClick={() => setIsActive(false)} className=' text-lg font-medium text-black hover:text-yellow-400'>Services</Link>
                        {/* <Link onClick={() => setIsActive(false)} className=' text-lg font-medium text-black hover:text-yellow-400'>Blog</Link> */}
                        <Link to='/contact' onClick={() => setIsActive(false)} className=' text-lg font-medium text-black hover:text-yellow-400'>Contact</Link>
                    </ul>
                </div>
            </div>
            {/* right */}
            <div className=' px-2 flex items-center gap-4'>

                <Link to='/' ><button className=' sm:py-2'>Book Now</button></Link>
            </div>
        </nav>
    )
}

export default Navbar