import React from 'react'
import skillsData from './SkillSource'

export const Skills = () => {
  
  return (
    <>

        <div id="Experience" className='px-7 pt-32 pb-10  md:px-40 md:h-min md:w-full w-full bg-gradient-to-b from-gray-900 to-gray-900 text-white'>

            <div>
            <div className='pb-12' >
                    <h1 className='md:text-6xl text-5xl underline pt-28 md:pt-0 font-semibold pb-8' >Skills</h1>
                    <p className='font-medium'>These are technologies I use to work with.</p>
                </div>
                  <div className='grid md:grid-cols-3 grid-cols-2 md:gap-12 gap-9'>

                    {
                     
                     skillsData.map((skill)=>(
                      <div className={ `shadow-md ${skill.shadowC} duration-200 hover:scale-105 flex justify-center items-center flex-col rounded-lg`} >
                      <img src={skill.image} className='w-24 py-5' alt="" />
                      <p className='text-center font-semibold py-1' >{skill.name}</p>
                    </div>
                     ))                     
                     
                    }

                  </div>
            </div>
        </div>
    
    </>
  )
}
