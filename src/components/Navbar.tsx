import React from 'react'
const Navbar  = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-betweent items-center'>
            <div className='text-xl font-medium'>Shahzaib Sahito</div>
            <ul className='gap-10 lg:gap-5 hidden md:flex ml-10'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#project'>Project</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default  Navbar
