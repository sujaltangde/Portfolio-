import React from 'react'
import PrSource from '../components/PrSource.json'



export const Projects = () => {




    return (
        <>

            <div id="Portfolio" className=' px-7  pb-10  md:px-40 md:h-min md:w-full w-full bg-gradient-to-b from-gray-900 to-gray-900 text-white'>

                <div className='pb-12' >
                    <h1 className='md:text-6xl text-5xl underline pt-28 md:pt-0 font-semibold pb-8' >Projects</h1>
                    <p className='font-medium'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8  sm:px-0' >

                    {
                        PrSource.map((e) => (
                            <div key={e.id} className='shadow-md shadow-gray-600 rounded-lg' >
                                <img src={e.image} alt="" className='rounded-md h-auto duration-200 hover:scale-105' />
                                <p className= 'font-medium text-center py-3' >{e.name}</p>
                                <div className='flex items-center justify-center' >
                                    <a href={e.demo} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gray-800 rounded-md text-purple-600 text-center font-bold ' >Demo</a>
                                    <a href={e.code} target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105bg-gray-800 bg-gray-800 text-purple-600 rounded-md text-center font-bold ' >Code</a>

                                </div>
                            </div>

                        ))



                    }


                </div>

            </div>

        </>
    )
}
