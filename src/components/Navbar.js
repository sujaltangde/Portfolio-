import React, { useState } from 'react'
import "../assests/style.css"
import { FaBars, FaTimes} from 'react-icons/fa'
import {Link} from "react-scroll"



export const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "About"
    },
    {
      id: 3,
      link: "Portfolio"
    },
    {
      id: 4,
      link: "Experience"
    },
    {
      id: 5,
      link: "Contact"
    },
  ]

  return (
    <>

      <div className='flex px-4 bg-black justify-between w-full h-20 items-center text-white fixed'>
        <div>
          <h1 className='font-signature text-5xl ml-2 mr-2 text-white'  >Sujal</h1>
        </div>
        <ul className='hidden md:flex'>
          {
            links.map(({ id, link }) => (
              <Link to={link} spy={true} smooth={true} offset={50} duration={300} key={id} className='px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200' >{link}</Link>
            ))
          }
        </ul>

      
          <div className="cursor-pointer md:hidden pr-4 z-10 text-gray-500 " onClick={() => setNav(!nav)}>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        
        {nav && ( 
          <ul className='flex flex-col justify-center  items-center absolute text-gray-500 top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-center'>
            {links.map(({ id, link }) => (
              <Link onClick={()=>setNav(false)} to={link} spy={true} smooth={true} offset={50} duration={300} key={id} className='px-4 py-6 cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'>{link}</Link>
            ))}
          </ul>
        )}
        </div>





    </>
  )
}
