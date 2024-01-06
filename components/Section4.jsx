import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Section4 = () => {
  return (
    <div className='bg-slate-900 h-[80vh] flex justify-between items-center p-[2vmax] my-[5vmax]'>
        <div className='w-1/2 px-[2vmax] flex flex-col gap-[1.5vmax] h-full justify-center text-justify'>
            <p className='text-blue-200 text-[5vmax] font-bold'>Let's Connect</p>
            <p className='text-white text-[2vmax] font-bold'>You've made this far</p>
            <p className='text-blue-100 text-[1.4vmax]'>My inbox is always open. Whether you'd like to chat about a project, have a question or just want to say hi, don't feel shy to message me.</p>
            <p className='text-blue-100 text-[1.4vmax] mt-3'>I am always ready to work on something challenging and fun!</p>
            <p className='text-blue-100 text-[1.4vmax] mt-3'>Feel free to use the links below. I'll try my best to get back to you!</p>
            <div className='text-white flex gap-2 justify-between max-sm:hidden'>
                <button className='p-[0.5vmax] border-white border-2 w-1/4 max-sm:w-3/4 flex items-center gap-2 text-[1.2vmax] hover:bg-slate-900'><EmailIcon/>Email</button>
                <button onClick={()=>{open('https://www.linkedin.com/in/aayush-parekh-bb7859167/','_blank')}} className='p-[0.5vmax] border-white border-2 w-1/4 max-sm:w-3/4 flex items-center gap-2 text-[1.2vmax] hover:bg-slate-900'><LinkedInIcon/>LinkedIn</button>
                <button onClick={()=>{open('https://github.com/Aayush251201','_blank')}} className='p-[0.5vmax] border-white border-2 w-1/4 max-sm:w-3/4 flex items-center gap-2 text-[1.2vmax] hover:bg-slate-900'><GitHubIcon/>Github</button>
            </div>
        </div>
        <div className='w-1/2 flex items-center flex-col justify-between'> 
            <img src="letstalk.svg" alt="" />
            <div className='hidden text-white max-sm:flex gap-[1vmax] justify-between flex-col items-center mt-[3vmax]'>
                <button className='p-[0.5vmax] border-white border-2 w-1/4 max-sm:w-full flex items-center gap-2 text-[1.2vmax] hover:bg-slate-900'><EmailIcon/>Email</button>
                <button onClick={()=>{open('https://www.linkedin.com/in/aayush-parekh-bb7859167/','_blank')}} className='p-[0.5vmax] border-white border-2 w-1/4 max-sm:w-full flex items-center gap-2 text-[1.2vmax] hover:bg-slate-900'><LinkedInIcon/>LinkedIn</button>
                <button onClick={()=>{open('https://github.com/Aayush251201','_blank')}} className='p-[0.5vmax] border-white border-2 w-1/4 max-sm:w-full flex items-center gap-2 text-[1.2vmax] hover:bg-slate-900'><GitHubIcon/>Github</button>
            </div>
        </div>
    </div>
  )
}

export default Section4