import React, { useState, useEffect } from 'react';
import CleanHome from '../assets/Images/CleanHome.jpg';
import Clean from '../assets/Images/clean.jpg';
import Office from '../assets/Images/office.jpeg';
import Roof from '../assets/Images/Roof-half.jpg';
import Window from '../assets/Images/window.jpg';
import Gutter from '../assets/Images/gutter-cleaning.jpg';
import Driveway from '../assets/Images/driveway.jpg';
import CleanPlace from '../assets/Images/CleanPlace.jpg';
import Logo from '../assets/Images/logo.png';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import FooterPage from '../components/FooterPage';
import BackToTopButtom from '../components/BackToTopButtom';
import Request from '../components/Request';
import ChatNow from '../components/ChatNow';
import ClipLoader from "react-spinners/ClipLoader";





const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <div className="">
      {loading ? <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#f84444"} loading={loading} size={60} /></div> :
        <>
          <img src={CleanHome} className=' absolute w-full h-96' alt='clean home' />
          <div className=" w-full h-96 bg-black opacity-50"></div>
          <div className="md:absolute md:top-1/3 md:left-2/4 text-4xl font-bold my-10 text-[#ffffff] 
        absolute top-1/3 ">
            <div className='flex justify-center'>
              <h1 className="text-5xl font-bold text-center my-8 flex justify-center font-serif ">Our Services</h1>
            </div>
            <div className='flex justify-center '>
              <p className="text-center text-xl mb-10 font-serif   ">
                We provide a wide range of services.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center my-5'>
            <img src={Clean} className='w-full h-96 p-5' alt='clean house'/>
            <div className='flex-grow w-full'>
              <p className='text-start text-3xl font-semibold p-2 font-serif '>Home Cleaning</p>
              <p className='text-xl p-3 tracking-normal leading-loose '>If you are looking for a reliable team of cleaners to tidy up your home,
                then <strong>Fabiana Fabulous Cleaning Service</strong> is the choice for you!
                Our team of cleaners will arrive onsite and clean every room,
                living space, kitchen, and bathroom for a great price.
                We promise that we will have your place looking better than before!</p>
              <button
                className='flex items-center ml-2 bg-blue-500 hover:bg-gradient-colors text-white  font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline'
                type='submit'>
                <UilCalendarAlt className="mr-2" size="20" />
                <a href="tel:425-829-6092" >
                  Schedule Today
                </a>
              </button>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center my-12 bg-gradient-color'>
            <div className='flex-grow w-full'>
              <p className='text-end text-3xl font-semibold p-2 font-serif '>Office Cleaning</p>
              <p className='text-lg p-3 text-end leading-loose '><strong>Fabiana Fabulous Cleaning Services</strong> offers incredible office
                cleaning services for floor and office managers looking to clean their space for their employees and customers.
                We will not leave a single meeting room, waiting room, lobby, workspace, bathroom,
                or floor unattended to - call us today to speak with one of our crew!</p>
              <div className='flex justify-end m-1 p-1'>
                <button
                  className='flex items-center ml-2 bg-blue-500 hover:bg-gradient-colors text-white  font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline'
                  type='submit'>
                  <UilCalendarAlt className="mr-2" size="20" />
                  <a href="tel:425-829-6092" >
                    Schedule Today
                  </a>
                </button>
              </div>
            </div>
            <img src={Office} className='w-full h-96 p-5' alt='office'/>
          </div>
          <div className='flex flex-col md:flex-row justify-center my-12'>
            <img src={Driveway} className='w-full h-96 p-5' alt='driveway'/>
            <div className='flex-grow w-full'>
              <p className='text-start text-3xl font-semibold p-2 font-serif '>Pressure Washing</p>
              <p className='text-lg p-3 leading-loose '>At <strong>Fabiana Fabulous Cleaning Services LLC.</strong> Our pressure washing service is specifically designed to rid your property
                of any unwanted or stubborn build-up, dirt, stains, or splotches. We can remove such errors from walls,
                floors, and driveways for an incredible price - call us today to discuss your needs!</p>
              <button
                className='flex items-center ml-2 bg-blue-500 hover:bg-gradient-colors text-white  font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline'
                type='submit'>
                <UilCalendarAlt className="mr-2" size="20" />
                <a href="tel:425-829-6092" >
                  Schedule Today
                </a>
              </button>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center my-12 bg-gradient-color'>
            <div className='flex-grow w-full'>
              <p className='text-end text-3xl font-semibold p-2 font-serif '>Roof Cleaning</p>
              <p className='text-lg p-3 text-end leading-loose'>If you are looking for a reliable roof cleaners,
                then <strong>Fabiana Fabulous Cleaning Service</strong> is the choice for you!
                One of the primary reasons for cleaning a roof is to maintain its integrity and extend its lifespan.
                Algae and moss, in particular, can hold moisture against the roof surface,
                leading to rot in wooden roof components and corrosion in metal ones.
              </p>
              <div className='flex justify-end m-1 p-1'>
                <button
                  className='flex items-center ml-2 bg-blue-500 hover:bg-gradient-colors text-white  font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline'
                  type='submit'>
                  <UilCalendarAlt className="mr-2" size="20" />
                  <a href="tel:425-829-6092" >
                    Schedule Today
                  </a>
                </button>
              </div>
            </div>
            <img src={Roof} className='w-full h-96 p-5' alt='Roof' />
          </div>
          <div className='flex flex-col md:flex-rowjustify-center my-12'>
            <img src={Gutter} className='w-full h-96 p-5' alt='gutter'/>
            <div className='flex-grow w-full'>
              <p className='text-start text-3xl font-semibold p-2 font-serif '>Gutter Cleaning</p>
              <p className='text-lg p-3 leading-loose'>If you are looking for a reliable gutter cleaners,
                then <strong>Fabiana Fabulous Cleaning Service</strong> is the choice for you!
                Gutter cleaning is a vital maintenance task for any home, often underestimated in its importance.
                Gutters, which are designed to control the flow of rainwater to protect your roof, walls,
                foundation, and landscape, can become clogged with leaves, twigs, and other debris. When this happens,
                they fail to function correctly, leading to a host of potential problems.</p>
              <button
                className='flex items-center ml-2 bg-blue-500 hover:bg-gradient-colors text-white  font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline'
                type='submit'>
                <UilCalendarAlt className="mr-2" size="20" />
                <a href="tel:425-829-6092" >
                  Schedule Today
                </a>
              </button>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center mt-12 bg-gradient-color'>
            <div className='md:flex-grow md:w-full '>
              <p className='text-end text-3xl font-semibold p-2 font-serif '>Window Cleaning</p>
              <p className='text-lg p-3 text-end leading-loose '>When it comes to window cleaning,
                no one does it better than<strong> Fabiana Fabulous Cleaning Service!</strong>
                Our team uses the best cleaning materials available to clean the windows of your commercial or residential property!
                We will have your windows cleaned in no time - call us today to schedule your first appointment!</p>
              <div className='flex justify-end m-1 p-1'>
                <button
                  className='flex items-center ml-2 bg-blue-500 hover:bg-gradient-colors text-white  font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline'
                  type='submit'>
                  <UilCalendarAlt className="mr-2" size="20" />
                  <a href="tel:425-829-6092" >
                    Schedule Today
                  </a>
                </button>
              </div>
            </div>
            <img src={Window} className='w-full h-96 p-5' alt='window'/>
          </div>
          <div className="relative">
            <img src={CleanPlace} className='md:w-full md:h-96 w-full h-96' alt='clean place'/>
            <div className="absolute inset-0 bg-black opacity-60 "></div>
            <img src={Logo} className='absolute md:top-1/2 -top-2 md:left-1/3 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-68 h-64 m-5 ml-7 md:ml-0' alt='company logo' />
            <p className='md:text-center text-[#ffffff]  text-2xl md:absolute md:top-1/2 md:left-2/3 md:transform md:-translate-x-3/4 md:-translate-y-1/2 
                absolute top-1/2 mt-12 md:mt-0 ml-5 rigth-1/2  '>WE MAKE A CLEAN SWEEP OF EVERYTHING</p>
            <button type="button" className="md:flex justify-center items-center 
                    md:absolute md:top-2/3 md:left-2/3 md:transform md:-translate-x-3/4 md:-translate-y-1/2 text-lg md:mb-8 h-10 md:px-10 md:py-5 border rounded-md bg-[#43b0f1] hover:bg-gradient-colors
                    absolute top-1/2 mt-32 md:mt-0 ml-5 md:-ml-5 px-2 py-1 ">
              <a href="tel:425-829-6092" className=" md:text-center text-[#ffff] flex items-center">
                <UilCalendarAlt className="mr-2" size="20" />Schedule Today
              </a>
            </button>
          </div>
          <Request />
          <FooterPage />
          <div className='p-2'>
            <BackToTopButtom />
          </div>
          <div className='p-2'>
            <ChatNow />
          </div>
        </>
      }
    </div>
  );
};

export default Services;