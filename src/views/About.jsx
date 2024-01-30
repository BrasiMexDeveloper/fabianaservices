import React, { useState, useEffect } from 'react';
import A_Clean from '../assets/Images/a-clean-house.jpg'
import Team from '../assets/Images/team.jpg'
import FooterPage from '../components/FooterPage';
import BackToTopButtom from '../components/BackToTopButtom';
import ChatNow from '../components/ChatNow';
import { ClipLoader } from "react-spinners";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className=" overflow-hidden">
      {loading ? <div className="flex justify-center items-center h-screen">
        <ClipLoader color={"#f84444"} loading={loading} size={60} /></div> :
        <>
          <img src={A_Clean} className='w-full h-96 absolute' alt='clean'/>
          <div className=" w-full h-96 bg-black opacity-50"></div>
          <div className="md:absolute md:top-1/3 md:left-2/4 text-4xl font-bold my-10 text-[#ffffff] 
        absolute top-1/3 ml-14">
            <div className='flex justify-center'>
              <h1 className="text-5xl font-bold text-center my-8 flex justify-center">About Us</h1>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center  bg-gradient-color'>
            <img src={Team} className='w-full h-96 p-5 mt-10' alt='team '/>
            <div className='flex-grow w-full'>
              <p className='text-start text-3xl font-semibold p-2 mt-10'>Who We Are!</p>
              <p className='text-xl p-3 leading-loose '>We treat every job as our #1 priority.
                <br></br> We are a professional cleaning service company since 1998, always offering the best quality
                or money back guaranteed. <strong>Fabiana Fabulous Cleaning Service</strong> provides incredible cleaning services to
                Lake Stevens, WA, and will strive to provide exceptional service. Our professionals use only the best tools and equipment to professionally clean your property at the best prices. Call us today to see what we can do for you!</p>
            </div>
          </div>
          <div>
            <p className="text-center text-4xl font-bold px-1 py-6 my-4">Proudly Serving</p>
            <p className='text-center text-xl font-bold px-1 py-6'>Bellevue | Redmond | Sammamish | Woodinville | Kirkland | Seattle | Lake Stevens | Edmonds</p>
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

export default About;