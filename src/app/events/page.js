import React from 'react'
import EventCard from '../components/EventCard/EventCard'
import { EventData } from '@/app/lib/data/EventData'
import PastCard from '../components/EventCard/PastCard';
import { PastEvent } from '@/app/lib/data/PastEvent';
import style from "../components/EventCard/PastCard.module.css"
import StyledText from '../components/text/StyledText';
export const metadata = {
  title: "Our Events",
  description: "",
};

const page = () => {
  const currentDate= new Date().getTime();
  return (
    <div className='min-h-screen w-full p-4 bg-[#0D1116] flex flex-col gap-4'>
    <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          Our Events
        </StyledText>

   <div className= {`flex flex-wrap justify-center gap-12 px-8 mx-auto ${style.pastCard}`}>
   {
       EventData.map((item)=>{
        const eventDate = new Date(item.date).getTime();
        if (eventDate<currentDate){
          return (
            <PastCard
            title={item.title}
            content={item.content}
            date={item.date}
            imgSrc={'/events/'+item.imgSrc}
            lazyImgSrc={'/events/lazy/'+item.imgSrc}
            link={'/events/pdf/'+item.imgSrc}
            key={item.date}
            />
          )
        }
        else {
          const cur = new Date().getTime();
          const past = cur < new Date(item.date).getTime() ? false : true;
          const isUpcoming=past?false:true;
          return(
            <EventCard
            title={item.title}
            content={item.fullContent}
            imgSrc={'/events/'+item.imgSrc}
            lazyImgSrc={'/events/lazy/'+item.imgSrc}
            date={item.date}
            isUpcoming={isUpcoming}
               key={item.date}
            />
  
          )
        }
    })}
   </div>
    </div>
  )
}

export default page
