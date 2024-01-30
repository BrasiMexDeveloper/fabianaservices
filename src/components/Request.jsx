import React, {useState} from 'react'

import ReCAPTCHA from 'react-google-recaptcha';
const axios = require('axios');
const Request = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        projectDescription: ''
    });
    const initialFormData = {
        name: '',
        phone: '',
        email: '',
        projectDescription: ''
    };
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const validateForm = () => {
        let formErrors = {};

        // Add your validation logic here
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.phone) formErrors.phone = "Phone is required";
        if (!formData.email) formErrors.email = "Email is required";
        if (!formData.projectDescription) formErrors.projectDescription = "Project description is required";

        setErrors(formErrors);

        // If the errors object is empty, the form is valid
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:3005/send-sms', formData);
            if (response.data === 'Message sent') {
                setIsSubmitted(true);
                setFormData(initialFormData)
            } else {
                throw new Error(response.data);
            }
        } catch (error) {
            console.error('Error details:', error.message);
        }
    };
  return (
    <><div className="md:flex justify-center text-center text-4xl font-bold m-10 ">Request A <span className='text-[#ffa600] whitespace-pre'> Free </span> Estimate</div><div className='flex flex-col items-center justify-center mt-10'>
          <form onSubmit={handleSubmit} className='w-full max-w-2xl rounded-md shadow-xl p-3'>
              <div className='mb-4 shadow-md'>
                  <input value={formData.name} onChange={handleChange} className='shadow appearance-none border border-[#92d9f7] rounded-bg-[] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='name' type='text' placeholder='name' required />
                  {errors.name && <p className='text-red-500 text-xs italic'>{errors.name}</p>}
              </div>
              <div className='mb-4 shadow-md'>
                  <input value={formData.phone} onChange={handleChange} className='shadow appearance-none border border-[#92d9f7] rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='phone' type='text' placeholder='phone' required />
                  {errors.phone && <p className='text-red-500 text-xs italic'>{errors.phone}</p>}
              </div>
              <div className='mb-4 shadow-md'>
                  <input value={formData.email} onChange={handleChange} className='shadow appearance-none border border-[#92d9f7] rounded-bg-[] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='email' type='email' placeholder='email' required />
                  {errors.email && <p className='text-red-500 text-xs italic'>{errors.email}</p>}
              </div>
              <div className='mb-6 shadow-md'>
                  <textarea value={formData.projectDescription} onChange={handleChange} className='shadow appearance-none border border-[#92d9f7] rounded-bg-[] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='projectDescription' placeholder='Job description' required />
              </div>
              <ReCAPTCHA sitekey="Your client site key" className='my-8 flex justify-center' />
              <div className='flex items-center justify-between'>
                  <button className='bg-blue-500 hover:bg-gradient-colors text-white w-full font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline' type='submit'>
                      Request Estimate
                  </button>
              </div>
              <div className='text-[#2baaff] text-center my-3'>
                  {isSubmitted && <p>Message sent successfully!</p>}
              </div>
          </form>
      </div></>
          
  )
}

export default Request