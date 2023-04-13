import React from 'react'
import { AiFillGooglePlusCircle, AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { MdEmail,MdPhone } from 'react-icons/md'

const Footer = () => {
    return (
        <div className=' w-full mx-auto mt-16'>
            <div className=' w-[90%] m-auto flex p-3 py-10 sm:flex-col gap-4 text-white'>
                {/* left */}
                <div className='flex-1 flex  justify-center sm:justify-start gap-4'>
                    <AiFillGooglePlusCircle size={20} />
                    <BsFacebook size={20} />
                    <AiFillInstagram size={20} />

                </div>
                {/* center */}
                <div className=' flex-1 flex flex-col gap-3'>
                    <h2 className=' text-yellow-400 text-xl font-semibold'>Quick Links</h2>
                    <ul>
                        <li>
                            Airport Taxi Perth
                        </li>
                        <li>
                            Wheelchair Taxi Perth
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            About Us
                        </li>
                    </ul>
                </div>
                {/* right */}
                <div className=' flex-1 flex flex-col gap-3'>
                    <h2  className=' text-yellow-400 text-xl font-semibold'>Contact</h2>
                    <ul>
                        <li className=' flex items-center gap-2'>
                            <MdPhone/>
                            <span>0000000000</span>
                        </li>
                        <li className=' flex items-center gap-2'>
                            <MdEmail/>
                            <span>xyz@xyzgamil.com</span>
                        </li>
                    </ul>
                </div>
                {/* rightmost */}
                <div className=' flex-1'>
                    <img className=' w-[200px] rounded-md' src="https://callmaxicab.com.au/verified-customer-Google-reviews.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer