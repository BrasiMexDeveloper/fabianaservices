import React, { useState } from 'react';
import { UilClock, UilCalling, UilBars, UilTimes } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/logo.png';

const NavaBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800   md:px-4 md:py-3 md:items-center">
      <div className="flex flex-col ">
        <div className=" flex items-center justify-between px-4 py-3 sm:p-0 hover:opacity-90">
          <Link to='/' className="flex items-center">
            <img className="h-20 w-auto sm:h-24" src={Logo} alt="Fabiana Fabulous Cleaning Service LLC" />
            <div>
              <h1 className="text-[#057dcd] md:text-3xl text-xl ml-3">Fabiana Fabulous </h1>
              <h2 className="text-[#ffffff] md:text-2xl text-lg ml-3 ">Cleaning Service LLC</h2>
            </div>
          </Link>
          <button onClick={toggleMenu} className="sm:hidden lg:hidden">
            {isOpen ?
              <UilTimes className='text-4xl ml-2 mt-2' onClick={() => setIsOpen(!isOpen)} size='40' /> :
              <UilBars className='text-4xl ml-2 mt-2' onClick={() => setIsOpen(!isOpen)} size='40' />
            }
          </button>
          <div className='md:flex items-center gap-0 hidden'>
            <UilClock size="35" />
            <div className="flex flex-col">
              <div className="mt-1 block px-2 py-1 text-[#057dcd] font-semibold rounded text-sm sm:text-base sm:mt-0 sm:ml-1">OPEN HOURS</div>
              <div className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 text-sm sm:text-base sm:mt-0 sm:ml-1">Open from </div>
              <div className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 text-sm sm:text-base sm:mt-0 sm:ml-1">7:00am to 6:00pm</div>
            </div>
            <UilCalling size="35" />
            <div className="flex flex-col">
              <div className="mt-1 block px-2 py-1 text-[#057dcd] font-semibold rounded text-sm sm:text-base sm:mt-0 sm:ml-1">CALL US</div>
              <a href='tel: 425-829-6092' className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 text-sm sm:text-base sm:mt-0 sm:ml-1">(425) 829-6092</a>
            </div>
          </div>
        </div>
        <hr/>
        <div className='md:flex items-center gap-0 sm:hidden justify-center'>
          <nav className={`px-2 pt-2 pb-4 sm:flex sm:p-3 sm:ml-14 ${isOpen ? 'block' : 'hidden'} sm:block`}>
            <a href='/' className="block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-700 cursor-pointer">Home</a>
            <a href="/services" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2 cursor-pointer">Services</a>
            <a href="/about" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2 cursor-pointer">About</a>
            <a href="/contact" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2 cursor-pointer">Contact</a>
            <a href="/gallery" className="mt-1 block px-2 py-1 text-white text-xl font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2 cursor-pointer">Gallery</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavaBar;