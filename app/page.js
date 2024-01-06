"use client"
import Section1 from "@/components/Section1"
import Header from "@/components/header"
import Section2 from "@/components/Section2"
import Section3 from "@/components/Section3"
import Section4 from "@/components/Section4"
import Section5 from "@/components/Section5"
import { useRef } from "react"

export default function Home() {

  const section1Ref=useRef(null)
  const section2Ref=useRef(null)
  const section3Ref=useRef(null)
  const section4Ref=useRef(null)



  const scrollToSection=(section)=>{
    console.log(section)
    if(section==='section1'){
      section1Ref.current.scrollIntoView({ behavior: 'smooth'});
    }else if(section==='section2'){
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }else if(section==='section3'){
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }else if(section==='section4'){
      section4Ref.current.scrollIntoView({ behavior: 'smooth' });
    }else{
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
   <div>
      <Header scrollToSection={scrollToSection}/>
      <div ref={section1Ref} className="scroll-m-[0vh]"><Section1/></div>
      <div ref={section2Ref} className="scroll-m-[10vh]"><Section2/></div>
      <div ref={section3Ref} className="scroll-m-[10vh]"><Section3/></div>
      <div ref={section4Ref} className="scroll-m-[10vh]"><Section4/></div>
      <div><Section5/></div>

   </div>
  )
}
