import React from 'react'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'


export const Contact = () => {
    return (
        <>

            <div id="Contact" className='px-7 pt-32 pb-32  md:px-40 md:h-min md:w-full w-full bg-gradient-to-b from-gray-900 to-black text-white'>

                <div className=''>
                    <div className='pb-12' >
                        <h1 className='md:text-6xl text-5xl underline pt-28 md:pt-0 font-semibold pb-8' >Contact</h1>
                        <p className='font-medium'>Submit the form below to get in touch with me.</p>
                    </div>

                <div  >    
                    <form className='flex items-center w-full gap-6 flex-col' method="POST" action="https://getform.io/f/36163a7b-081e-4164-84c0-7c5bf1c44f00">
                        <input name='name' type="text" id="email" aria-describedby="helper-text-explanation" class=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-2/3 " placeholder="Enter your name"></input>
                        <input name='email'  id="email" aria-describedby="helper-text-explanation" class=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-2/3 " placeholder="Enter your email"></input>

                        <textarea name='message' id="message" rows="4"class=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-2/3 " placeholder="Leave a message"></textarea>
                        <button type='submit' className=' group bg-gradient-to-r from-cyan-500 to-blue-500  font-bold py-2 px-7 rounded-md flex-row flex' >
                            Let's Talk
                        </button>
                    </form>


                    <div>

                        <h3 className=' text-2xl font-semibold pt-24  text-center pb-3'>Find me on</h3>
                        <div className='social flex justify-center ' >
                            <div className="grid grid-cols-4 gap-4" >
                                <a href="https://twitter.com/SujalTangde" target="_blank" rel="noopener noreferrer">  <FiTwitter size={30} />  </a>
                                <a href="https://www.linkedin.com/in/sujal-tangde-6711a8204" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={32} /></a>
                                <a href="https://github.com/sujaltangde" target="_blank" rel="noopener noreferrer"><BsGithub size={30} /></a>
                                <a href="mailto:sujaltagade01@gmail.com" rel="noreferrer"><AiOutlineMail size={30} /></a>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>




            </div>


        </>
    )
}
