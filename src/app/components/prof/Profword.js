import React from 'react'
import style from './Profword.module.css'
import { ProfData } from "@/app/lib/data/ProfData";
import ProfDetail from '../profdetail/ProfDetail';
import StyledText from '../text/StyledText'
const Profword = () => {
  return (
    <div>
      <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
         Testimonials
        </StyledText>

        
        <div className='flex flex-col gap-8 '>
      {
       ProfData.map((items)=>{
        return(
            <ProfDetail
            key={items.name}
          imgsrc={'/prof/'+items.imgsrc}
          lazyImgSrc={'/prof/lazy/'+items.imgsrc}
          name={items.name}
          pos={items.pos}
          words={items.word}
          college={items.college}
          dept={items.dept}
          socials={items.socials}/>
        
        )
       })
    }
    </div>
    </div>
  )
}

export default Profword
