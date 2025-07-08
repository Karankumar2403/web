import React from 'react'
import style from './PostHead.module.css'
import TeamCard from '../teamcard/TeamCard'
import { TeamData2k22 } from '@/app/lib/data/TeamData'
import StyledText from '../text/StyledText'

const PostHead = () => {
  return (
    <div className='w-4/5 my-8 mx-auto'>
        <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          Post Bearers
        </StyledText>
        <div className={`${style.container}`}>
        <div className={`flex gap-8 p-8 ${style.box}`}>
            {TeamData2k22.map((item) => {
                    {item.imgSrc=item.imgSrc.replace('.jpg','.png')}
                    
                    return (
                    <div className='w-full' key={item.name}>
                        <TeamCard
                        name={item.name}
                        pos={item.pos}
                        imgSrc={'/teams/2K22/'+item.imgSrc}
                        lazyImgSrc=   
                         {'/teams/2K22/lazy/'+item.imgSrc}
                        socials={item.socials}
                    />
                    </div>
                    );
                })}
        </div>
    </div>
    </div>
  )
}

export default PostHead
