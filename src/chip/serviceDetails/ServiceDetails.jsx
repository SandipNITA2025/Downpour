import React from "react";


export const detailsData = [
    {
        id: 1,
        img: "https://callmaxicab.com.au/wheelchair.webp",
        title: "Wheelchair Taxi Perth",
        desc: "We offer transportation services that are truly for everyone. This includes same-day wheelchair accessible taxi, on-demand wheelchair transport, and any other special needs. Whether it’s helping a customer in a wheelchair, assisting a visually impaired customer, or making sure that a customer with special needs feels comfortable and safe Maxi Taxi is here to assist."
    },
    {
        id: 2,
        img: "https://callmaxicab.com.au/airport-transfer.webp",
        title: "Airport Taxi Perth",
        desc: "A better way for your airport transfer is to travel by maxi taxi since you don’t need to worry about taking the car to Perth airport. Your airport transfer will be hassle-free if you choose a good service for your transport, We also provide airport taxi services in Perth Just book a ride with Call Maxi Cab to ensure a maxi taxi is waiting for you when your flight arrives."
    },
    {
        id: 3,
        img: "https://callmaxicab.com.au/MaxiTaxiPerth.webp",
        title: "Maxi Taxi Perth",
        desc: "Travelling with a large group is a hassle, especially when you choose a normal taxi for your ride, When you are travelling with a large group, maxi taxis are the right choice for your ride since the maxis taxis are spacious and it has plenty of room for everyone to fit comfortably and there is space for your luggage. CallMaxiCab is among the leading maxi taxi service providers in Perth so whenever travelling with a large group always consider maxi taxis as your first choice."
    },
    {
        id: 4,
        img: "https://callmaxicab.com.au/fremantle.webp",
        title: "Perth Airport to Fremantle",
        desc: "Fremantle is a very famous port city that's part of the Perth metropolitan area, Thousands of visitors go there every year. It is well-known for its maritime history and the largest convict-built prison in Australia, Perth's port city of Fremantle is also well-known for supporting the arts, from local to national (and some international) artists. We offer our pick-up and drop-off taxi service from Perth airport to Fremantle and vice versa, No Need To Walk Miles Carrying Heavy Bags! Just cab it with Call Maxi Cab! And enjoy your ride with us."
    },
]

const ServiceDetails = () => {
    return (
        <div className=" w-[85%] sm:w-full mx-auto flex items-center flex-col justify-center gap-6 space-y-3 p-6 sm:px-3 mt-5 ">
            {detailsData.map((item)=>(
                 <div className=" w-full flex sm:flex-col gap-6">
                 <div className=" flex-1 w-full min-h-[350px] rounded-lg overflow-hidden">
                     <img className=" w-full h-[350px] rounded-lg object-cover" src={item.img} alt="" />
                 </div>
                 <div className=" flex-1 flex flex-col space-y-3">
                     <h2 className=" text-white text-4xl font-bold sm:text-2xl"> {item.title}</h2>
                     <p className=" text-gray-100 text-xl text-justify sm:text-lg">
                        {item.desc}
                     </p>
                 </div>
             </div>
            ))}
           

        </div>
    );
};

export default ServiceDetails;
