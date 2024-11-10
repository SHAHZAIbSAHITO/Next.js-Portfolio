import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-down">
          <h2 className='text-4xl md:text-5xl'>Technplogies I work with</h2>
          <p className='text-gray-500 pt-2'>I have solid foundation in web development, specializing in HTLM, CSS, and javaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updateed on the latest technology to enhance my skill set and contribute effectively to projects.
          </p>
      </div>
      <div>
        <div className='grid grid-cols-2 text-blue-500 text-3xl sm:text-4xl'>
          <div className='space-y-2'>
            <h2 data-aos="zoom-in-down">Typescript</h2>
            <h2 data-aos="zoom-in-down">React.js</h2>
            <h2 data-aos="zoom-in-down">Next.js</h2>
          </div>
          <div className='grid grid-cols-2 text-blue-500 text-3xl sm:text-4xl'>
        <div className='space-y-2'>
            <h2 data-aos="zoom-in-down">Tailwind</h2>
            <h2 data-aos="zoom-in-down">CSS</h2>
            <h2 data-aos="zoom-in-down">Node.js</h2>
          </div>
          </div>
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default Skills
