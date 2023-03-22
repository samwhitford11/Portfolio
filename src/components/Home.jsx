import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Profile from '../assets/profile-pic.png'

const Home = () => {
    return (
        <div name='home'className='w-full h-screen bg-[#17232c]'>
            {/* Container  */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            
                <p className='text-green-200'> Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Samantha Whitford</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I’m a Software Engineer with experience in project management and web development looking to apply my creative mindset to build uniquely stunning applications.<img className='rounded-full w-96 h-96 w-48 h-48 pt-3 pb-3' src={Profile} alt="profile pic"></img></p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-300 hover:border-green-200'> View Work 
                    <span className=' group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home