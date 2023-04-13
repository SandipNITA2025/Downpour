import React from 'react'

const Contact = () => {
    return (
        <div className=' w-[90%] mx-auto flex flex-col items-center '>
            <div className=' mt-20 flex flex-col items-center'>
                <h1>Contact with us</h1>
                <form >
                    <h2 className=' text-white text-xl text-center'>Write a note</h2>

                    <div className=' w-full flex flex-col gap-4'>
                        <div className=' w-full flex sm:flex-col sm:space-x-0 sm:gap-4 items-center space-x-4'>
                            <label className=''>
                                <input className=' w-full text-black' placeholder='Name' type="text" />
                            </label>
                            <label>
                                <input className=' w-full text-black' placeholder='Email' type="text" />
                            </label>
                        </div>
                        <div className=' w-full flex items-center space-x-4'>
                            <label>
                                <input className=' w-full text-black' placeholder='Mobile' type="text" />
                            </label>
                            
                        </div>
                        <label>
                                <textarea className=' w-full text-black' placeholder='Write message' rows={3} type="text" />
                            </label>

                        <button>Send Message</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact