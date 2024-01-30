import React, { useState, useEffect } from 'react';
import BackToTopButtom from '../components/BackToTopButtom';
import CleanPlace from '../assets/Images/CleanPlace.jpg';
import CleanHome from '../assets/Images/CleanHome.jpg';
import Logo from '../assets/Images/logo.png';
import Bathroom from '../assets/Images/bathroom.jpg';
import Clean from '../assets/Images/clean.jpg';
import Gutter_cleaning from '../assets/Images/gutter-cleaning.jpg';
import Gutter from '../assets/Images/gutter.jpg';
import Window from '../assets/Images/window.jpg';
import Move_In from '../assets/Images/Move-In.jpg';
import Office from '../assets/Images/office.jpeg';
import Move_Out from '../assets/Images/Moving-Out.jpg';
import Driveway from '../assets/Images/driveway.jpg'
import FooterPage from '../components/FooterPage';
import { motion } from 'framer-motion'
import { UilCalling, UilCalendarAlt } from '@iconscout/react-unicons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ChatNow from '../components/ChatNow';
import Request from '../components/Request';
import ClipLoader from "react-spinners/ClipLoader";
import StarRatings from 'react-star-ratings';




const Home = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        const getReviews = async () => {
            try {
                const response = await fetch('http://localhost:3005/reviews');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const reviews = await response.json();
                if (Array.isArray(reviews)) {
                    setReviews(reviews);
                } else {
                    console.error('Unexpected response:', reviews);
                    setReviews([]);
                }
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
                // You can set reviews to an empty array if the fetch fails
                setReviews([]);
            }
        };

        getReviews();
    }, []);

    return (
        <div className="container mx-auto  bg-[#ffffff] overflow-hidden">
            {loading ? <div className="flex justify-center items-center h-screen">
                <ClipLoader color={"#f84444"} loading={loading} size={60} /></div> :
                <>
                    <img src={CleanPlace} className='w-full h-full ' alt='clean place ' />
                    <h1 className="text-5xl font-bold text-center my-8 flex justify-center">Welcome</h1>
                    <h2 className="text-center text-4xl text-[#057dcd] font-bold mb-8 ">Fabiana Fabulous Cleaning Service LLC</h2>
                    <p className="text-center text-xl mb-8 m-6 p-5 ">We keep your home or office sparkling, in and out. We have over 25 years of experience in the Eastside and Seattle, Wa areas with a loyal client base that stays with us for years! We can work around your schedule and work with you in the house or out of the house. We treat every job as our #1 priority. We never cut corners and always check all the nooks and crannies for those pesky crumbs and dust bunnies.</p>
                    <div className="flex justify-center">
                        <div >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}>
                                <a href="tel:425-829-6092" className=" text-center text-[#000000] hover:text-[#ffc876] flex items-centertext-lg mb-8 h-12 px-4 py-3 border rounded-md bg-[#43b0f1] hover:bg-gradient-colors  ">
                                    <UilCalling className="mr-2" size="20" />  Call us today for a free estimate!
                                </a>
                            </motion.button>
                        </div>
                    </div>
                    <div className="md:flex flex-col sm:flex-row justify-center mt-12 bg-gradient-color">
                        <div className="flex justify-center items-center">
                            <div className="w-1/2 ">
                                <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight emulateTouch showStatus={false} showThumbs={false} transitionTime={1000} swipeable stopOnHover interval={5000} swipeScrollTolerance={5}>
                                    <div className="relative">
                                        <img src={Bathroom} className=' w-full h-96 sm:w-64 sm:h-96' alt='bathroom ' />
                                        <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Bathroom Cleaning</p>
                                    </div>
                                    <div className="relative">
                                        <img src={Clean} className=' w-full h-96 sm:w-64 sm:h-96' alt='clean ' />
                                        <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Home Cleaning</p>
                                    </div>
                                    <div className="relative">
                                        <img src={Gutter} className=' w-full h-96 sm:w-64 sm:h-96' alt='gutter ' />
                                        <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Gutter Cleaning</p>
                                    </div>
                                    <div className="relative">
                                        <img src={Window} className=' w-full h-96 sm:w-64 sm:h-96' alt='window ' />
                                        <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Window Clining</p>
                                    </div>
                                    <div className="relative">
                                        <img src={Move_In} className=' w-full h-96 sm:w-64 sm:h-96' alt='move in ' />
                                        <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Move In Cleaning </p>
                                    </div>
                                    <div className="relative">
                                        <img src={Move_Out} className=' w-full h-96 sm:w-64 sm:h-96' alt='move out ' />
                                        <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2" >Move Out Cleaning</p>

                                    </div>
                                    <div className="relative">
                                        <img src={Office} className=' w-full h-96 sm:w-64 sm:h-96' alt='office ' />
                                        <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Office Clining</p>
                                    </div>
                                    <div className="relative">
                                        <img src={Gutter_cleaning} className=' w-full h-96 sm:w-96 sm:h-96' alt='gutter ' />
                                        <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Gutter Cleaning</p>
                                    </div>
                                    <div className="relative">
                                        <img src={Driveway} className=' w-full h-96 sm:w-64 sm:h-96' alt='driveway ' />
                                        <p className="absolute bottom-0 bg-opacity-30 bg-black text-white font-light p-2">Pressure Washing</p>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        <div className="md:w-3/4 md:mr-36 px-5 py-3  w-full mt-4 ">
                            <ul className="text-lg text-[#000000]">
                                <li className="mb-2 text-2xl font-bold">What We Do</li>
                                <li className="mb-2 text-xl font-semibold custom-li">Home Cleaning</li>
                                <li className="mb-2 text-xl font-semibold custom-li">Deep Cleaning</li>
                                <li className="mb-2 text-xl font-semibold custom-li">Office Cleaning</li>
                                <li className="mb-2 text-xl font-semibold custom-li">Move In/Out Cleaning</li>
                                <li className="mb-2 text-xl font-semibold custom-li">Gutter Cleaning</li>
                                <li className="mb-2 text-xl font-semibold custom-li">Window Cleaning</li>
                                <li className="mb-2 text-xl font-semibold custom-li">Roof Cleaning</li>
                                <li className="mb-2 text-xl font-semibold custom-li">Pressure Washing</li>
                                <li className="mb-2 text-xl font-semibold custom-li">And More!</li>
                            </ul>
                        </div>
                    </div>
                    <h1 className="text-4xl bg-gradient-colors text-[#ffffff] font-serif font-bold text-center  px-16 py-12 ">Refer us and get 15% off your next cleaning!</h1>
                    <div className="relative">
                        <img src={CleanHome} className='md:w-full md:h-96 w-full h-96' alt='clean home ' />
                        <div className="absolute inset-0 bg-black opacity-75 "></div>
                        <img src={Logo} className='absolute md:top-1/2 -top-2 md:left-1/3 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-68 h-64 m-5 ml-7 md:ml-0' alt='Fabiana Fabulous Cleaning Services LLC' />
                        <p className='md:text-center text-white  text-2xl md:absolute md:top-1/2 md:left-2/3 md:transform md:-translate-x-3/4 md:-translate-y-1/2 
                absolute top-1/2 mt-12 md:mt-0 ml-5 rigth-1/2  '>WE MAKE YOUR HOME LOOK LIKE NEW AGAIN</p>
                        <button type="button" className="md:flex justify-center items-center 
                    md:absolute md:top-2/3 md:left-2/3 md:transform md:-translate-x-3/4 md:-translate-y-1/2 text-lg md:mb-8 h-10 md:px-10 md:py-5 border rounded-md bg-[#43b0f1] hover:bg-gradient-colors 
                    absolute top-1/2 mt-32 md:mt-0 ml-5 md:-ml-5 px-2 py-1 ">
                            <a href="tel:425-829-6092" className=" md:text-center text-[#ffff] flex items-center">
                                <UilCalendarAlt className="mr-2" size="20" />  Schedule Today!
                            </a>
                        </button>
                    </div>
                    <div className="bg-[#edf2fa] w-full h-auto ">
                        <h2 className="flex justify-center text-3xl font-bold p-12 text-center">What Our Clients Are Saying</h2>
                        <p className="flex justify-center text-xl font-sans font-semibold tracking-wide ">Don’t take our word for it</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 my-10 md:ml-60 p-2 sm:ml-24 md:mr-24 ">
                            <iframe title="Facebook Post 1" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrianne.sheehy%2Fposts%2Fpfbid0o75v7YzjJeLan6PFkSzfKih9XJQCjHiQea6BNcsUVRSrqMnNzexRgboYrqrDKUhdl&show_text=true&width=500" width="410" height="257" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 1, 0.7)', border: '1px solid #ccc', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            <iframe title="Facebook Post 2" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftanya.herman.10%2Fposts%2Fpfbid0i8fMZYP3Kb2Mz4Js5jgPCyeFi76AcyBqaXFjyA4TS8oRpU9CYD37WnQ4c1Jcj39Al&show_text=true&width=500" width="410" height="257" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 1, 0.7)', border: '1px solid #ccc', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            <iframe title="Facebook Post 3" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmarilee.cipra%2Fposts%2Fpfbid02gbmGVM8LCSyoUegCEkTkjmkgVMuoyGKqWohjTeNMnJVCYV5KSoFD1BDVJtq49D5Kl&show_text=true&width=500" width="410" height="257" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 1, 0.7)', border: '1px solid #ccc', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            <iframe title="Facebook Post 4" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftanya.herman.10%2Fposts%2Fpfbid0i8fMZYP3Kb2Mz4Js5jgPCyeFi76AcyBqaXFjyA4TS8oRpU9CYD37WnQ4c1Jcj39Al&show_text=true&width=500" width="410" height="257" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 1, 0.7)', border: '1px solid #ccc', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                        <div className='flex justify-center'>
                        <a href="https://www.facebook.com/Fabulouscleaner" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-lg h-10 px-10 py-5 border rounded-md bg-[#43b0f1] hover:bg-gradient-colors ">
    <p className="text-[#ffff]">See More Reviews</p>
</a>
                        </div>
                        <div className='flex justify-center'>
                            <h2 className='text-3xl font-bold my-6'>Google Reviews</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 my-10 gap-2 p-2 md:mr-24 sm:ml-24 bg-gradient-color rounded shadow-xl">
                            {loading ? (
                                <ClipLoader color="#f86c6b" size={150} loading={loading} />
                            ) : (
                                <>
                                    {reviews.sort((a, b) => b.time - a.time).map((review, index) => (
                                        <div key={index} className="review-card p-4 border rounded-lg shadow-2xl shadow-black mb-4">
                                            <div className="flex items-center mb-2">
                                                <img src={review.profile_photo_url || 'default-image-url'} alt={review.author_name} className="review-author-image w-10 h-10 rounded-full mr-2" />
                                                <div>
                                                    <h2 className="review-author text-lg font-bold">{review.author_name}</h2>
                                                    <StarRatings
                                                        rating={review.rating}
                                                        starRatedColor="gold"
                                                        numberOfStars={5}
                                                        name='rating'
                                                        starDimension="20px"
                                                        starSpacing="2px"
                                                    />
                                                    <p className="review-text-time text-gray-600 ">{review.relative_time_description}</p>
                                                </div>
                                            </div>
                                            <p className="review-text text-gray-600">{review.text}</p>
                                            <span className="google my-5 p-2">
                                                <span className="blue">G</span>
                                                <span className="red">o</span>
                                                <span className="yellow">o</span>
                                                <span className="blue">g</span>
                                                <span className="green">l</span>
                                                <span className="red">e</span>
                                            </span>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <h2 className='text-3xl font-bold my-6'>Write Us A Review</h2>
                        </div>
                        <div className="flex justify-center ">
                            <p className='text-xl font-sans text-center'>Help us improve our services by leaving feedback</p>
                        </div>
                        <div className='md:flex justify-evenly'>
                            <div className="flex justify-center my-10">
                                <a href="https://www.yelp.com/biz/fabiana-fabulous-cleaning-services-redmond-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title='Yelp Review'
                                    className="flex justify-center items-center text-lg h-10 px-10 py-5 border rounded-md bg-[#43b0f1] hover:bg-gradient-colors ">
                                    <p className="text-[#ffff]">Write a Yelp Review</p>
                                </a>
                            </div>
                            <div className="flex justify-center my-10">
                                <a href="https://search.google.com/local/writereview?placeid=ChIJPQvSjqGtmlQRz6fzjvrwzwk" target="_blank" rel="noopener noreferrer" title='Google-Review' className="flex justify-center items-center text-lg h-10 px-10 py-5 border rounded-md bg-[#43b0f1] hover:bg-gradient-colors ">
                                    <p className="text-[#ffff]">Write a Google Review</p>
                                </a>
                            </div>
                        </div>
                        <br></br>
                    </div>
                    <Request />
                    <FooterPage className="my-4" />
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

export default Home;