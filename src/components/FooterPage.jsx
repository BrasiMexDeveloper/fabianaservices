import React from 'react'
import { motion } from 'framer-motion'
import Yelp from '../assets/Icons/yelp-logo.png'
import { UilFacebookF, UilInstagram } from '@iconscout/react-unicons'

const FooterPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center mt-5">
                <hr className="w-1/4 border-1 border-[#50e0fa]" />
                <span className="px-2 text-[#050505] font-semibold">CONNECT WITH US</span>
                <hr className="w-1/4 border-1 border-[#50e0fa]" />
            </div>
            <div className='flex items-center justify-center mt-3   gap-8'>
                <a href='https://www.facebook.com/Fabulouscleaner/' target='_blank' rel='noopener noreferrer'>
                    <motion.p
                        whileHover={{ scale: 2.1 }}
                        whileTap={{ scale: 0.9 }}
                        title='Social-Media Facebook'
                        className=''> <UilFacebookF color="#00000" /></motion.p>
                </a>
                <a href='https://www.yelp.com/biz/fabiana-fabulous-cleaning-services-redmond-4' target='_blank' rel='noopener noreferrer'>
                    <motion.p
                        whileHover={{ scale: 1.6 }}
                        whileTap={{ scale: 0.8 }}
                        title='Socila-Media Yelp'
                        className=''> <img src={Yelp} color="#00000" className='w-10 h-10' /></motion.p>
                </a>
                <a href=' https://www.instagram.com/fabianallc/' target='_blank' rel='noopener noreferrer'>
                    <motion.p
                        whileHover={{ scale: 2.1 }}
                        whileTap={{ scale: 0.9 }}
                        title='Social-Media Instagram'
                        className=' '> <UilInstagram color="#00000" /></motion.p>
                </a>
            </div>
            <p className="text-sm text-center text-[#080808] mt-6 ">ⓒ Copyright 2024 </p>
            <p className="text-sm text-center text-[#080808] mb-4">Fabiana Fabulous Cleaning LLC</p>
        </div>
    )
}

export default FooterPage