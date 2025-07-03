import Image from 'next/image'
import React from 'react'
import style from './Card.module.css'
import { AiFillMobile, AiOutlineArrowDown } from 'react-icons/ai'
import { BsFillArrowDownCircleFill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'
import StyledText from '../text/StyledText'

const ICON_SIZE=20

const Card = ({ name, desg, imgSrc,lazyImgSrc, pdfSrc, email, mobile }) => {
  return (
    <div className={`${style.infocardContainer} px-4 py-2 justify-evenly `}>
      <div className='flex items-center justify-center'>
        <div className={`${style.imgBg} h-[150px] w-[150px] `}>
          <div  >
            <Image
              className={`h-[101.75px] w-[101.75px] mx-auto object-cover object-top ${style.img}`}
              fill
              sizes='(max-width:768px) 100vw,700px'
              blurDataURL={lazyImgSrc}
              placeholder='blur'
              src={imgSrc}
              alt={name}
            />
          </div>
        </div>
      </div>
      <div className={style.text}>
        <span>
        <h2 className={`text-lg font-bold`}> 
          {name}
        </h2>
        <p className={`text-base`}>
          {desg}
        </p>
        </span>
        <a className={`${style.mail} flex gap-2`} href={`mailto:${email}`}> 
          <FaEnvelope className='hover:fill-[#00dfd8]' size={ICON_SIZE} />
         <p className='text-sm'> {email}</p>
        </a>
        <p className={`${style.mobile} flex gap-2 text-sm cursor-pointer`}> 
          <BsFillTelephoneFill className='hover:fill-[#00dfd8] ' size={ICON_SIZE} />
          +91-
          {mobile}
        </p>
        <div className={`${style.link} flex `}>
           <div className={` bg-[#000000] border-[#42c5cf] flex gap-2 items-center border px-3 py-2 cursor-pointer rounded-full`}>
           <a className='flex items-center justify-center gap-2 ' href={pdfSrc} target="_blank" rel="noopener noreferrer"  >
            BIODATA
            <BsFillArrowDownCircleFill className='hover:fill-[#42c5cf]' size={ICON_SIZE} />
            </a>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Card
