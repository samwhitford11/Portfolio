import React from 'react'

const About = () => {
  return (
    <div name='about' className=' h-full w-full bg-[#17232c] text-gray-300'>
        <div  className='max-w-[1000px] mx-autoflex flex-col justify-center items-center pb-32'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-200'>About</p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                 <div className='sm:text-right text-4xl font-bold'>
                     <p> Hi. I'm Samantha, nice to meet you! Please take a look around.</p>
                </div> 
                <div>
                    <p>I’m a passionate learner who is always searching to build on my knowledge to provide excellent work for both my employer and users. To keep things interesting I enjoy working on various puzzels and teaching my kids new skills.
                    </p>
                </div>       
            </div>    
            </div>
        </div>


  )
}

export default About