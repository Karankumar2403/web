import React from 'react'
import Image from 'next/image'
import style from './TeamCard.module.css'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai'

const ICON_SIZE = 28;


const TeamCard = ({name, pos,imgSrc,lazyImgSrc,socials}) => {
  if(!name){
    return (
      <></>
    )
  }
  return (
    <div className={`border-2 border-white flex flex-col justify-center items-center w-[270px] h-[350px] text-[#fff] p-4 relative overflow-hidden rounded-2xl ${style.card}`}>
      <div className={`${style.imgBg} h-[150px] w-[150px] `}>
        <div >
            <Image
            className={`h-[101.75px] w-[101.75px] mx-auto object-cover object-top ${style.img}`}
            fill
            sizes='(max-width:768px) 100vw,700px'
            src={imgSrc}
            placeholder='blur'
            blurDataURL={lazyImgSrc}
            alt={name}
            />
        </div>
      </div>
      <div className='text-center'>
        <h2 className='text-xl font-medium mt-4 mb-2 '>{name}</h2>
        <p>{pos}</p>
      </div>
      <div className={`${style.socials}`}>
        {
          socials.github||socials.linkedin||socials.email||socials.insta ? (
            <>
            {socials.github && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${socials.github}/`}
              >
                <FaGithub size={ICON_SIZE} width={ICON_SIZE} />
              </a>
            )}

            {socials.linkedin && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.linkedin.com/in/${socials.linkedin}/`}
              >
                <FaLinkedin size={ICON_SIZE} />
              </a>
            )}
            {socials.insta && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${socials.insta}/`}
              >
                <AiFillInstagram size={ICON_SIZE} />
              </a>
            )}
            {socials.email && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${socials.email}`}
              >
                <FaEnvelope size={ICON_SIZE} />
              </a>
            )}
          </>
          ) :(
            <span>
              Socially Invisible
            </span>
          )
        }
      </div>
    </div>
  )
}

export default TeamCard
