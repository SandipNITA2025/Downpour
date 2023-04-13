import { Accordion } from 'flowbite-react'
import React from 'react'
import FormSection from '../../components/formSection/FormSection'
import Hero from '../../components/hero/Hero'
import Service from '../service/Service'
import './home.css'

const Home = () => {
  return (
    <div className=' w-full m-auto relative'>
      <Hero />
      <div className=' w-[90%] m-auto mt-12 flex flex-col items-center overflow-hidden'>
        <p className=' text-2xl font-medium uppercase sm:text-lg text-white text-center'>
          Book Maxi Taxi Perth hassle free at fixed price
        </p>
        <div className=' w-[70%] h-fit overflow-hidden'>
          <img className=' object-cover w-full' src="https://i.postimg.cc/ZK32pjKZ/pngwing-com-1.png" alt="" />
        </div>
      </div>
      <Service/>
      

      <div className="two alt-two mt-5">
                <h1>Questions & Answers</h1>
            </div>
      <Accordion className=' w-[60%] mx-auto mt-4 sm:w-[90%] border-0 bg-gray-100 '>
      
  <Accordion.Panel className=' border-0 text-black'>
    <Accordion.Title>
    When I will get booking confirmation?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      As soon as we will receive your request within 5 to 10 min, we will send you the booking confirmation.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    Can I make advance payment to book taxi?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Yes, You have got the options to pay upfront before the start of journey or pay at the end.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    Is it safe to travel with Call Maxi cab in the pandemic?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      We’re actively monitoring the coronavirus (COVID-19) situation and are continually working to help keep those who rely on our platform healthy and safe.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>

    </div>

  )
}

export default Home