import React from 'react'

const Contact = () => {
  return (
    <div name='contact'className='w-full h-screen flex bg-[#17232c] justify-center items-center p-4 text-gray-600'>
        <form method='POST'action='https://getform.io/f/335c4ebe-9913-4682-95a0-3a97876d6200' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-200 text-gray-300'>Contact</p>
                <p className='text-gray-300 pt-6'> || Submit the form below or shoot me an email - samantha.fichte98@gmail.com</p>
            </div>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name'></input>
            <input className='my-4 p-4 bg-[#ccd6f6]' type='text' placeholder='Email' name='email'></input>
            <textarea className='my-4 bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white group border-2 px-6 py-3 my-2 flex justify-center items-center hover:bg-green-300 hover:border-green-200'>Get in Touch</button>
        </form>
    </div>
  )
}

export default Contact