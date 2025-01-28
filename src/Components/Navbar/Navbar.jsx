import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsNavMenuOpen(true)
  }
  
  const handleCloseMenu = () => {
    setIsNavMenuOpen(false)
  }
  

  return (
    <div className='w-full relative'>
      <div className='w-11/12 mx-auto flex items-center justify-between py-5'>
      <div className='text-2xl cursor-pointer'>
       <Link to={'/'}> Arham <span className='logo-text-color font-medium'>Abdullah</span></Link>
      </div>
      <div className='lg:flex items-center justify-around w-1/4 hidden'>
       <Link to={'/about'}><button className='px-9 rounded-md py-2 duration-300 ease-out border border-black hover:border-0 cursor-pointer'>About</button></Link> 
       <Link to={"/contact"}><button className='px-9 rounded-md py-2 duration-300 ease-out border border-black hover:border-0 cursor-pointer'>Contact</button></Link> 
      </div>
      <div className='lg:hidden' onClick={handleOpenMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
      </div>
      {
        isNavMenuOpen && 
        <div className='absolute top-0 w-full h-screen bg-gray-700 text-white left-0 z-10'>
          <div onClick={handleCloseMenu} className='flex justify-end p-3'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></div>
          <div className='w-full h-full flex justify-center'>
          <div className='text-center'>
            <Link to={'/about'}><p className='py-7'>About</p></Link>
            <Link to={"/contact"}><p>Contact</p></Link>
          </div>
          </div>
        </div>
      }
      </div>
    </div>
  )
}

export default Navbar
