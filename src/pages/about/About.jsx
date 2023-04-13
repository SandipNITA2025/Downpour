import React from "react";

const About = () => {
  return (
    <div className=" relative  w-[85%] sm:w-full mx-auto flex items-center flex-col justify-center gap-6 space-y-3 p-6 sm:px-3 ">
      <div className="mt-20 w-full flex sm:flex-col gap-6">
        <div className=" flex-1 w-full min-h-[450px] rounded-lg overflow-hidden">
          <img
            className=" w-full h-[450px] rounded-lg object-cover"
            src="https://callmaxicab.com.au/van.jpeg
"
            alt=""
          />
        </div>
        <div className=" flex-1 flex flex-col space-y-3">
          <h2 className=" text-4xl font-bold sm:text-2xl text-white">
            Learn about our taxi company{" "}
          </h2>
          <p className=" text-lg text-justify sm:text-lg text-gray-100">
            Call Maxi Cab dedicatedly providing a great maxi taxi service for
            more than 10 years in Perth. Dedication and experience with the
            right size maxi taxi equipped as per passengers' needs is the key to
            our success. Call Maxi Cab Taxi Service is available 24/7 throughout
            all the days and specialized in maxi taxi service from Perth
            airport’s all terminals and Fremantle cruise ports. Call Maxi Cab
            has specially equipped maxi taxis for wheelchair passengers
            transportation in Perth. We offer service for group transfers,
            corporate events, day trips, and sightseeing in Perth suburbs,
            Fremantle Taxi, Hillarys, Scarborough, Cottesloe beaches, and other
            famous places in and around Perth as well. We also offer on-demand
            pre-booked maxi taxis and also provide transportation services to
            people traveling in groups and help them to travel safely. Thus, we
            avail each of our clients of reliable maxi taxi services within the
            town. At Call Maxi Cab, our priority is to provide you a
            comfortable, affordable and a safe travel experience. With our
            convenient online booking form, you'll book a taxi with ease,
            knowing our reliable service goes to be there for you, You can plan
            your journey with us without any hesitation. With a range of
            vehicles and services, we’ve got all of your travel needs covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
