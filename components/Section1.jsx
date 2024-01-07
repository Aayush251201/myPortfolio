import React from 'react'
import './section1.css'

const Section1 = () => {
  return (
    <div className='bg-slate-950 flex flex-col items-center justify-between max-sm:justify-start max-sm:gap-[4vmax] h-[101vh]'>
        <p className='text-[4.1vmax] text-white mt-[8vmax]'>Hello, I am <span className='text-blue-200'>Aayush Parekh.</span></p>
        <div className='hidden max-sm:w-2/5 max-sm:flex max-sm:border-2 max-sm:border-cyan max-sm:rounded-full max-sm:justify-center max-sm:items-center'><img className="rounded-full" style={{filter: 'drop-shadow(0 -10mm 30mm cyan)'}} src="aayush.png" alt="" /></div>
        <div className='flex items-center justify-between w-screen place-self-end'>
            <div className='flex justify-center p-5 flex-col w-1/3 max-sm:w-3/4 pl-[2.5vmax]'>
                <p className='text-blue-200 text-[3.5vmax]'>Full-Stack Web</p>
                <p className='text-white text-[3.5vmax]'>Developer.</p>
                <p className='text-white mt-5 text-[1.5vmax]'>I'm really passionate about using my skills in coding, Azure integration, and AI. I love taking on new projects to show what I can do and learn more along the way.</p>
            </div>
            <div className='w-1/3 max-sm:hidden'><img className="w-[96%] h-[96%]" style={{filter: 'drop-shadow(0 -10mm 30mm cyan)'}} src="aayush.png" alt="" /></div>
            <div className='flex p-5 flex-col items-center justify-center w-1/3 gap-3 max-sm:w-3/4'>
                <p className='text-blue-200 text-[2.5vmax]'>Know more about my work</p>
                <img src="arrow-down.png" alt=""  className='rotate-45 w-[12vmax] h-[12vmax]'/>
                <div className='border-white border-[0.2vmax] p-[2px] border-dashed rounded'>
                    <a href="aayushResumeUpdated.pdf" download="aayush-resume"><button className='text-white  bg-cyan-700 w-[10vmax] h-[4vmax] rounded text-[1.3vmax] max-sm:w-[50px] max-sm:h-[20px]'>Resume</button></a>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Section1