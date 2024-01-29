import React, { useState } from 'react'
import Logo from '../assets/Images/logo.png';
import axios from 'axios';
import {motion} from 'framer-motion';
import { UilCommentAltDots,  UilTimesCircle } from '@iconscout/react-unicons'

// ...
const ChatNow = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        projectDescription: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/send-sms', formData);
            alert('Message sent');
        } catch (error) {
            console.error(error);
            alert('Failed to send message');
        }
    };

    return (
        <div className="chatnow__container">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
                title='Chat Now'
             className="fixed right-4 bottom-4 bg-gradient-color text-white p-4 rounded-full cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <UilTimesCircle className=" text-black w-7 h-7  rounded-full"/> : <UilCommentAltDots className='text-[#04030b]  rounded-full w-9 h-9'/>}
             </motion.button>
            {isOpen && (
                <div className="chatnow__form bg-gradient-color border border-gray-300 rounded p-4">
                    <div className="chatnow__logo flex items-center gap-1">
                        <img src={Logo} alt="Fabiana Fabulous Cleaning Services LLC" className='w-12 h-12 border rounded-full'/>
                        <p className='text-sm'>Have a question ? Enter the Information below and will be send you an SMS shorly.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                        <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Job Description" required className="overflow-auto p-2" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );

};

export default ChatNow;