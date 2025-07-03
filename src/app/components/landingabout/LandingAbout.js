import React from 'react'
import style from './LandingAbout.module.css'
import StyledText from '../text/StyledText'
const LandingAbout = () => {
  return (
    <div>
        <section className={`p-4 ${style.head} max-[900px]:py-0 w-full bg-[#0D1116] text-white flex flex-col justify-start `}>
      <div className={`${style.about} ml-24 mt-20 max-[900px]:mt-0 sm:mt-8 sm:mb-4 w-2/3`}>
        <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex  mb-4"
         >
        <h1 className={`text-5xl mt-20 max-[900px]:mt-0 font-semibold text-left`}>About ECE Society</h1>
        </StyledText>

        <p className={`text-lg mt-5 font-normal pt-2  ${style.text}`}>
        The ECE Society is the official society of the Department of Electronics and Communication Engineering, BIT Sindri. This society aims to promote Scientific thinking among the students and provide a holistic environment for students where they can freely explore the latest cutting edge technologies in the field of electronics and Software solutions to real-life problems.
          </p>
      </div>
      </section>
    </div>
  )
}

export default LandingAbout
