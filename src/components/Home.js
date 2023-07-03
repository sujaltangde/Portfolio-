import React from 'react'
import heroImage from "../assests/heroImage.jpg"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from "react-scroll"


export const Home = () => {
  return (
    <>
    
      <div id="Home" name="home" className='md:h-screen pb-10 pt-28 w-full px-5 bg-gradient-to-b from-black to-gray-800 text-white'>
     
        <div className='max-w-screen-lg mx-auto
       flex flex-col md:flex-row md:justify-around items-center md:gap-9 justify-center h-full'>
          <div className='pb-6'>
            <h2 className='text-4xl sm:text-7xl font-bold' >I'm a Front-end Developer</h2>
            <p className='mt-4 font-semibold pr-4' >
              I have done interships and gain my knowledge in developing robust web application,
              ability to work with team and individualy makes me fits with any environment,
              I love to work on technologies like React,Tailwind and many more.
            </p>

            <div className='my-5 flex items-center md:justify-start justify-center'>
              <Link to="Portfolio" smooth={true} offset={50} duration={300} className=' group bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-bold py-2 px-3 rounded-md flex-row flex' >
                Portfolio <span className='py-1 group-hover:rotate-90 duration-300 pl-2' ><AiOutlineArrowRight /></span>
              </Link>
            </div>
          </div>
          <div >
            <img src={heroImage} className='rounded-2xl mx-auto md:w-full w-3/4' alt="My Profile" />
          </div>
        </div>
      </div>
    </>
  )
}




