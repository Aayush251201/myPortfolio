import React from 'react'
import { Timeline } from '@mui/lab';
import { TimelineItem } from '@mui/lab';
import { TimelineSeparator } from '@mui/lab';
import { TimelineConnector } from '@mui/lab';
import { TimelineContent } from '@mui/lab'
import { TimelineOppositeContent } from '@mui/lab';
import { TimelineDot } from '@mui/lab';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Section3 = () => {
    return (
        <div className='bg-slate-950'>
            <p className='text-white text-[2vmax] my-2 text-center'>Education</p>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <div className='flex items-center'>
                            <div className='p-[1.5vmax] rounded bg-purple-800 flex flex-col justify-between text-left'>
                                <p className='text-white text-[1.5vmax] font-bold'>Devang Patel Institute of Advance Technology and Research (DEPSTAR)</p>
                                <p className='text-white text-[1.5vmax]'>CHARUSAT University: 2019-2023</p>
                                <p className='text-white font-semibold mt-5 text-[1.3vmax]'>Bachelor of Technology (Computer Science)</p>
                            </div>
                            <div className=' w-0 h-0 border-t-transparent border-b-transparent border-l-purple-800 border-t-[10px] border-b-[10px] border-l-[10px] '></div>
                        </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>

                        <TimelineConnector />
                        <TimelineDot sx={{ bgcolor: 'rgb(107, 33, 168)', border: 'white 4px solid', padding: '0.7vw' }}>
                            <SchoolIcon sx={{ color: 'white', fontSize: '3vw' }} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <p className='text-white text-center text-[2vmax]'>Certificates</p>
            <Timeline position='alternate'>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{ bgcolor: '#03dac6', border: 'white 4px solid', padding: '0.7vw' }}>
                            <WorkspacePremiumIcon sx={{ color: 'black', fontSize: '3vw' }} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                        <div className='flex items-center'>
                            <div className=' w-0 h-0 border-t-transparent border-b-transparent border-r-[#03dac6] border-t-[10px] border-b-[10px] border-r-[10px] '></div>
                            <div className='p-[1.5vmax] rounded bg-[#03dac6] flex flex-col justify-between text-left text-slate-900'>
                                <p className=' text-[2vmax] font-bold mb-5'>Microsoft Certified</p>
                                <p className=' text-[1.5vmax]'>Azure Fundamentals - <a target='_blank' href='https://www.credly.com/badges/d383e278-a388-4f31-be73-725652295092/linked_in?t=rwgd87'><span className='font-bold underline'>AZ900</span></a></p>
                                <p className=' text-[1.5vmax] '>Power Platform Fundamentals - <a target='_blank' href='https://www.credly.com/badges/58948168-bdd4-4a00-879b-dff0cff645ae/linked_in?t=rwn99r'><span className='font-bold underline'>PL900</span></a></p>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{ bgcolor: 'rgb(74, 222, 128)', border: 'white 4px solid', padding: '0.7vw' }}>
                            <WorkspacePremiumIcon sx={{ color: 'black', fontSize: '3vw' }} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent position='left' >
                        <div className='flex items-center justify-end'>
                            <div className='p-[1.5vmax] rounded bg-green-400 flex flex-col justify-between text-left text-slate-950'>
                                <p className=' text-[2vmax] font-bold mb-5'>Hackerrank Certified</p>
                                <a target='_blank' href="https://www.hackerrank.com/profile/aayushparekh83"><p className=' text-[1.5vmax] mt-3 underline'>Gold badge in problem solving<OpenInNewIcon sx={{height:'2vmax', width:'2vmax'}}/></p></a>
                            </div>
                            <div className='w-0 h-0 border-t-transparent border-b-transparent border-l-green-400 border-t-[10px] border-b-[10px] border-l-[10px] '></div>

                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <p className='text-white text-center text-[2vmax]'>Other Information</p>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                    </TimelineOppositeContent>
                    <TimelineSeparator>

                        <TimelineConnector />
                        <TimelineDot sx={{ bgcolor: 'rgb(46,16,101)', border: 'white 4px solid', padding: '0.7vw' }}>
                            <LightbulbIcon sx={{ color: 'white', fontSize: '3vw' }} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                        <div className='flex items-center'>
                            <div className=' w-0 h-0 border-t-transparent border-b-transparent border-r-violet-950 border-t-[10px] border-b-[10px] border-r-[10px] '></div>
                            <div className='p-[1.5vmax] rounded bg-violet-950 flex flex-col justify-between text-left gap-2'>
                                <p className='text-white text-[1.5vmax]'>Gate-CS 2022 Qualified (AIR 5168)</p>
                                <p className='text-white text-[1.5vmax]'> BTech CSE - 9.04 CGPA</p>
                                <p className='text-white text-[1.3vmax] font-semibold'>Intrested in stock markets and investing</p>
                            </div>
                        </div>
                    </TimelineContent>

                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator >

                        <TimelineConnector sx={{height:'8vh'}}/>
                        <TimelineDot sx={{ bgcolor: 'black', border: 'white 4px solid', padding: '0.7vw' }}>
                            <StarIcon sx={{ color: 'white', fontSize: '3vw' }} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default Section3