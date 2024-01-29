import React, { useState, useEffect } from 'react';
import CleanPlace from '../assets/Images/CleanPlace.jpg';
import Logo from '../assets/Images/logo.png';
import FooterPage from '../components/FooterPage';
import BackToTopButtom from '../components/BackToTopButtom';
import Request from '../components/Request';
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
    <div className=" mx-auto overflow-hidden">
      {loading ? <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#f84444"} loading={loading} size={60} /></div> :
        <>
          <img src={CleanPlace} className='absolute w-full h-96' alt='clean place image' />
          <div className=" w-full h-96 bg-black opacity-50"></div>
          <div className="absolute top-1/3 left-2/4 text-4xl font-bold my-10 text-[#ffffff] ">
            <div className='flex justify-center'>
              <h1 className="text-5xl font-bold text-center my-8 flex justify-center">Contact Us</h1>
            </div>
          </div>
          <div className="flex  justify-center my-14">
            <p className="text-center text-xl font-serif font-bold mb-8">
              We are here to help you with all your cleaning needs. Please contact us
              through any of the methods below.
            </p>
          </div>
          <div className='flex flex-col md:flex-row justify-center mt-5 bg-gradient-color'>
            <img src={Logo} className='w-full h-96 p-5' alt='company logo'/>
            <div className='flex-grow w-full'>
              <p className='text-start text-3xl font-semibold p-2'>Fabiana Fabulous Clining Services LLC.</p>
              <ul className='text-xl p-3 tracking-normal  '>
                <li className='p-2'>Phone:
                  <a href='tel: 425-829-6092' className='text-[#057dcd] ml-2'>
                    (425) 829-6092
                  </a>
                </li>
                <li className='p-2 '>Email:
                  <a href='mailto:fsandes73@gmail.com' className='text-[#057dcd] ml-2'>
                    fsandes73@gmail.com
                  </a>
                </li>
                <li className='p-2'>Social Media:
                  <a href='https://www.facebook.com/Fabulouscleaner' className='text-[#057dcd] ml-2'>
                    Facebook
                  </a>
                </li>
              </ul>
              <p className='text-start text-xl font-semibold ml-2'>Hours of Operation</p>
              <ul className='text-xl p-3 tracking-normal'>
                <li className='p-2'>Monday - Friday: 7:00am - 6:00pm</li>
                <li className='p-2'>Saturday: 7:00am - 1:00pm</li>
                <li className='p-2'>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <h1 className="text-4xl bg-gradient-colors text-[#ffffff] font-serif font-bold text-center  px-16 py-12 ">Refer us and get 15% off your next cleaning!</h1>
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

export default Contact;