import React from 'react'
import '../app/styles/skills.css'
const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        <div data-aos="zoom-in-down" className='skills-left'>
          <h2 className='skill-heading'>Technplogies I work with</h2>
          <p className='skill-text'>I have solid foundation in web development, specializing in HTLM, CSS, and javaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updateed on the latest technology to enhance my skill set and contribute effectively to projects.
          </p>
      </div>
      <div>
        <div className='skill-right'>
          <div className='skill-icons-grid'>
            <div className='skills-space'>
            <h2 data-aos="zoom-in-down">Typescript</h2>
            <h2 data-aos="zoom-in-down">React.js</h2>
            <h2 data-aos="zoom-in-down">Next.js</h2>
          </div>
          <div className='skill-space'>
        
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

export default Skills;
