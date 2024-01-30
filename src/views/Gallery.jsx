import React, {useState, useEffect} from 'react';
import CleanPlace from '../assets/Images/CleanPlace.jpg';
import Logo from '../assets/Images/logo.png';
import SuperDurty from '../assets/Images/SuperDurty.jpg';
import SuperCleanR from '../assets/Images/SuperCleanR.jpg';
import SuperClean from '../assets/Images/SuperClean.jpg';
import Patio from '../assets/Images/patio.jpg';
import Oven from '../assets/Images/oven.jpeg';
import Grill from '../assets/Images/Grill.jpg';
import DurtyWindow from '../assets/Images/DurtyWindow.jpg';
import WindowClean from '../assets/Images/WindowClean.jpg';
import DurtyToiler from '../assets/Images/DurtyToiler.jpg';
import DurtyShawer from '../assets/Images/DurtyShawer.jpg';
import DurtyRoof from '../assets/Images/DurtyRoof.jpg';
import DurtyMetal from '../assets/Images/DurtyMetal.jpg';
import DurtyMetalR from '../assets/Images/DurtyMetalR.jpg';
import DurtyKitchen from '../assets/Images/DurtyKitchen.jpg';
import DurtyFloor from '../assets/Images/DurtyFloor.jpg';
import DurtyBath from '../assets/Images/DurtyBath.jpg';
import ConcreteClean from '../assets/Images/Concrete-cleaning.jpg';
import CleanWay from '../assets/Images/CleanWay.jpg';
import CleanR from '../assets/Images/CleantR.jpg';
import CleanStuff from '../assets/Images/CleanStuff.jpg';
import CleanShawer from '../assets/Images/CleanShawer.jpg';
import CleanRoof from '../assets/Images/CleanRoof.jpg';
import CleanMetal from '../assets/Images/CleanMetal.jpg';
import CleanMetalR from '../assets/Images/CleanMetalR.jpg';
import CleanKitchen from '../assets/Images/CleanKitchen.jpg';
import CleanFloor from '../assets/Images/CleanFloor.jpg';
import CleanBath from '../assets/Images/CleanBath.jpg';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import FooterPage from '../components/FooterPage';
import BackToTopButtom from '../components/BackToTopButtom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ChatNow from '../components/ChatNow';
import { ClipLoader } from "react-spinners";


const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false);
      }, 2000);
  }, []);
  return (
    <div className=" mx-auto">
      {loading ? <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#f84444"} loading={loading} size={60} /></div> :
        <>
      <img src={CleanPlace} className='absolute w-full h-96' alt='clean place'/>
      <div className=" w-full h-96 bg-black opacity-50"></div>
      <div className="absolute top-1/3 left-2/4 text-4xl font-bold my-10 text-[#ffffff] ">
        <div className='flex justify-center'>
          <h1 className="text-5xl font-bold text-center my-8 flex justify-center">Gallery</h1>
        </div>
      </div>
      <div className='flex justify-center'>
      </div>
      <div className="flex flex-col sm:flex-row justify-center bg-gradient-color mb-5">
        <div className="flex justify-center items-center">
          <div className="w-1/2 ">
            <p className="text-center text-4xl font-bold px-1 py-6 my-4">Our Work</p>
            <Carousel autoPlay infiniteLoop useKeyboardArrows showStatus={false} showThumbs={false} transitionTime={1000} swipeable stopOnHover interval={5000} swipeScrollTolerance={5}>
              <div className="relative">
                <img src={SuperClean} className=' w-full h-96 sm:w-64 sm:h-96' alt='super clean ' />
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={SuperDurty} className=' w-full h-96 sm:w-64 sm:h-96' alt='super durty ' />
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={SuperCleanR} className=' w-full h-96 sm:w-64 sm:h-96' alt='super clean '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={DurtyKitchen} className=' w-full h-96 sm:w-64 sm:h-96' alt='durty kitchen '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={CleanKitchen} className=' w-full h-96 sm:w-64 sm:h-96' alt='clean kitchen iamge'/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC </p>
              </div>
              <div className="relative">
                <img src={Oven} className=' w-full h-96 sm:w-64 sm:h-96' alt='oven '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC </p>
              </div>
              <div className="relative">
                <img src={CleanStuff} className=' w-full h-96 sm:w-64 sm:h-96' alt='clean stuff '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC </p>
              </div>
              <div className="relative">
                <img src={Grill} className=' w-full h-96 sm:w-64 sm:h-96' alt='grill '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC </p>
              </div>
              <div className="relative">
                <img src={DurtyBath} className=' w-full h-96 sm:w-64 sm:h-96' alt='durty bath '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2" >Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={CleanBath} className=' w-full h-96 sm:w-64 sm:h-96' alt='ckean bath '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={DurtyToiler} className=' w-full h-96 sm:w-96 sm:h-96' alt='durty toiler '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={CleanShawer} className=' w-full h-96 sm:w-64 sm:h-96' alt='clean shawer ' />
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={DurtyShawer} className=' w-full h-96 sm:w-64 sm:h-96' alt='durty shawer '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={CleanRoof} className=' w-full h-96 sm:w-64 sm:h-96' alt='clean roof '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={DurtyRoof} className=' w-full h-96 sm:w-64 sm:h-96' alt='durty roof ' />
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={CleanMetal} className=' w-full h-96 sm:w-64 sm:h-96' alt='clean metal '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={DurtyMetal} className=' w-full h-96 sm:w-64 sm:h-96' alt='durty metal '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={DurtyMetalR} className=' w-full h-96 sm:w-64 sm:h-96' alt='durty metal r '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={CleanMetalR} className=' w-full h-96 sm:w-64 sm:h-96' alt='clean metal r '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={Patio} className=' w-full h-96 sm:w-64 sm:h-96' alt='patio '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={DurtyWindow} className=' w-full h-96 sm:w-64 sm:h-96' alt='durty window '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={WindowClean} className=' w-full h-96 sm:w-64 sm:h-96' alt='window clean '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={DurtyFloor} className=' w-full h-96 sm:w-64 sm:h-96' alt='durty floor '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={CleanFloor} className=' w-full h-96 sm:w-64 sm:h-96' alt='clean floor '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={CleanR} className=' w-full h-96 sm:w-64 sm:h-96' alt='clean '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={ConcreteClean} className=' w-full h-96 sm:w-64 sm:h-96' alt='concrete clean '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
              <div className="relative">
                <img src={CleanWay} className=' w-full h-96 sm:w-64 sm:h-96' alt='clean way  '/>
                <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Fabiana Fabulous Cleaning Services LLC</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <h1 className="text-4xl bg-gradient-colors text-[#ffffff] font-serif font-bold text-center  px-16 py-12 ">Refer us and get 15% off your next cleaning!</h1>
      <div className="relative">
        <img src={CleanPlace} className='md:w-full md:h-96 w-full h-96' alt='clean place ' />
        <div className="absolute inset-0 bg-black opacity-60 "></div>
        <img src={Logo} className='absolute md:top-1/2 -top-2 md:left-1/3 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-68 h-64 m-5 ml-7 md:ml-0' alt='Fabiana Fabulous Cleanig Services LLC '/>
        <p className='md:text-center text-[#ffffff]  text-2xl md:absolute md:top-1/2 md:left-2/3 md:transform md:-translate-x-3/4 md:-translate-y-1/2 
                absolute top-1/2 mt-12 md:mt-0 ml-5 rigth-1/2  '>WE MAKE A CLEAN SWEEP OF EVERYTHING</p>
        <button type="button" className="md:flex justify-center items-center 
                    md:absolute md:top-2/3 md:left-2/3 md:transform md:-translate-x-3/4 md:-translate-y-1/2 text-lg md:mb-8 h-10 md:px-10 md:py-5 border rounded-md bg-[#43b0f1] hover:bg-gradient-colors
                    absolute top-1/2 mt-32 md:mt-0 ml-5 md:-ml-5 px-2 py-1 ">
          <a href="tel:425-829-6092" className=" md:text-center text-[#ffff] flex items-center">
            <UilCalendarAlt className="mr-2" size="20" />  Schedule Today!
          </a>
        </button>
      </div>
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

export default Contact;