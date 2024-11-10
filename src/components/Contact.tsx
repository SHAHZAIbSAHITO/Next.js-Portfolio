import React from 'react'
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-down">Get in Touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-down">
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-down">sahitoshahzaib888@gmail.com</div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-down">(021) 000-0000</div>
            </div>
            <div className='space-y-8'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input type='text'className='h-[40px] bg-transparent border-accent' id='name'/>
              </div>
              <div className='space-y-8'>
              <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                <label htmlFor='email'>Email</label>
                <input type='text'className='h-[40px] bg-transparent border-accent' id='email'/>
                </div>
                <div className='space-y-8'>
              <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                <label htmlFor='message'>Message</label>
                <textarea className= 'bg-transparent border-blue-500' id='message' rows={8}>
                </textarea>
              </div>
              <button className='bg-blue-500 p-2 px-6' data-aos="zoom-in-down">Send</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
