"use client"
import {React,useState} from 'react'
import { AboutTextPara } from '@/app/lib/data/GalleryData'
import StyledText from '../text/StyledText'
import GridGallery from '../Gallery/Gallery'
import AnimatedScrollButton from '../scrollButton/AnimatedScrollButton'
import style from "./About.module.css"
import Link from 'next/link'

const About = () => {
  const [showFullText, setShowFullText] = useState(false);
  const numWordsToShow = 52;
  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };
  const croppedText = (text) => {
    const words = text.split(' ');
    const croppedWords = showFullText ? words : words.slice(0, numWordsToShow);
    return croppedWords.join(' ');
  };
  return (
    <section className={`p-4 w-full bg-[#0D1116] text-white flex flex-col justify-center `}>
    
      <div className={` mx-auto mt-12 py-10 h-[100vh] sm:mt-8 sm:mb-4 w-2/3 
      max-[400px]:w-[80%] `}>
      <StyledText
      primary="#007cf0"
      secondary="#00dfd8"
      className="text-[40px] font-bold flex w-2/3 flex-col text-left mb-4"
     >
   About ECE Society
    </StyledText>
          {
            AboutTextPara.map((item)=>(
              <p className={`text-lg mt-5 w-9/10 max-[400px]:w-[100%] font-normal`} key={item.text}>
              {croppedText(item.text)}
              <button onClick={toggleShowFullText} className="text-blue-500 text-[16px] rounded ">
          {showFullText ? 'See Less' : 'See More'}

        </button>
        </p>
            ))
          }
          <span className={style.scroll}>
          <AnimatedScrollButton 
           onClick={() =>
            document.getElementById('glimpses').scrollIntoView({behavior: "smooth"})
          }
           /> 
          </span>
      </div>
      
      <StyledText
      primary="#007cf0"
      secondary="#00dfd8"
      className="text-[40px] mx-auto font-bold flex w-2/3 flex-col text-left mb-4"
      
     >
     <div id="glimpses">
   Glimpses
   </div>
    </StyledText>
      <GridGallery />
     
    </section>
    
  )
}

export default About;