import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { UilAngleUp } from '@iconscout/react-unicons'

const BackToTopButtom = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {backToTop && (
        <motion.button
          title='Back to top'
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          onClick={ToTop}
          className="fixed bottom-4  transform-translate-x-1/2 z-50   text-[#ffffff] border rounded-full bg-black opacity-50">
          <UilAngleUp />
        </motion.button>
      )}
    </div>
  )
}

export default BackToTopButtom