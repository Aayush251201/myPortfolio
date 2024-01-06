import React from 'react'

const Section2 = () => {
  return (
      <div className='bg-slate-900  flex justify-center items-center p-[5vw]'>
          <div className='w-full'>
              <div className='w-full'>
                  <p className='text-[2.2vmax] text-white border-b-2 border-red-500'>About Me</p>
              </div>
              <div className='flex w-full gap-2 max-sm:justify-center '>
                  <div className='w-1/2  grid grid-cols-3 py-8 max-sm:hidden'>
                        <img className='w-[10vmax] h-[10vmax]' src="c-sharp.png" alt=""/>
                        <img className='w-[10vmax] h-[10vmax]' src="dotnet.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax] rounded-full'  src="efcore.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="sql.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="azure.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="react.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="tailwind.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="mui.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="chat-gpt.png" alt="" />
                  </div>
                  <div className='w-1/2 h-full flex flex-col items-end py-8 text-blue-100 gap-[3vh] text-[1.5vmax] max-sm:w-3/4'>
                      <p>As a Full Stack Developer with over a year of comprehensive experience, my focus lies in full-stack development. I possess proficiency in a range of technologies, including C#, .NET Core, SQL, React JS, Azure Functions, Azure Language Service, Semantic Kernel, and Open AI.</p>
                      <p>As a Full Stack Software Engineer, I actively contributed to projects involving C#, .NET, Azure, ReactJS, Semantic Kernel, Bot Framework, AI Integration, Azure API Management, and SQL Server. My primary goal was delivering scalable and secure applications, catering to esteemed clients like Tata Motors, vearanalytics, and Petronas.</p>
                      <p>Beyond professional endeavors, I've undertaken projects such as Personal Portfolio Websites and React-based admin dashboards. Additionally, I've earned certifications including Azure AZ 900, PL900.</p>
                      <p>I'm really passionate about using my skills in coding, Azure integration, and AI. I love taking on new projects to show what I can do and learn more along the way.</p>
                  </div>
              </div>
              <div className='w-full hidden max-sm:flex gap-[2vmax] overflow-x-auto'>
                        <img className='w-[10vmax] h-[10vmax]' src="c-sharp.png" alt=""/>
                        <img className='w-[10vmax] h-[10vmax]' src="dotnet.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax] rounded-full'  src="efcore.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="sql.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="azure.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="react.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="tailwind.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="mui.png" alt="" />
                        <img className='w-[10vmax] h-[10vmax]' src="chat-gpt.png" alt="" />
                  </div>
          </div>
      </div>
  )
}

export default Section2