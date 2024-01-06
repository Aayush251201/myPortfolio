"use client"
import React from 'react'
import Tooltip from '@mui/material/Tooltip';

const Header = ({scrollToSection}) => {
  return (
    <div className='h-[10vh] w-screen flex justify-between items-center sticky top-0 z-50 py-[1vh] px-[3vw] backdrop-blur-lg bg-white/30 text-white' >
        <div className='text-[3.5vmax] max-sm:hidden'>Parekh.</div>
        <div className='flex gap-[5vw]  '>
            <p className='cursor-pointer text-[1.5vmax]' onClick={()=>{scrollToSection('section1')}}>Home</p>
            <p className='cursor-pointer text-[1.5vmax]' onClick={()=>{scrollToSection('section2')}}>About Me</p>
            <p className='cursor-pointer text-[1.5vmax]' onClick={()=>{scrollToSection('section3')}}>Portfolio</p>
            <p className='cursor-pointer text-[1.5vmax]' onClick={()=>{scrollToSection('section4')}}>Contact</p>
        </div>
        <div className='flex gap-[3vw]  ' >
            <Tooltip title='Email' arrow><a href="" target="_blank"><img className='cursor-pointer w-[2.5vmax] h-[2.5vmax]' src="email.png" alt=""  /></a></Tooltip>
            <Tooltip title='Linkedin' arrow><a href="https://www.linkedin.com/in/aayush-parekh-bb7859167/" target="_blank"><img className='cursor-pointer w-[2.5vmax] h-[2.5vmax]' src="linkedin.png" alt="" /></a></Tooltip>
            <Tooltip title='Github' arrow><a href="https://github.com/Aayush251201" target="_blank"><img className='cursor-pointer w-[2.5vmax] h-[2.5vmax]' src="github.png" alt="" /></a></Tooltip>
        </div>
    </div>
  )
}

export default Header