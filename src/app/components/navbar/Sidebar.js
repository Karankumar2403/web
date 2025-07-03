import React from 'react'
import style from './Sidebar.module.css'
import { AiFillInstagram } from 'react-icons/ai'
import { FaEnvelope, FaFacebook, FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
const ICON_SIZE=32

const links=[
   {
      href:"https://instagram.com/ecesocietybits?igshid=MzRlODBiNWFlZA==",
      icon: AiFillInstagram,
   },
   {
      href:"https://github.com/ecesocietybit",
      icon: FaGithub,
   },
   {
      href:"mailto:ecesociety@bitsindri.ac.in",
      icon: FaEnvelope,
   },
   {
      href:"https://www.linkedin.com/company/ece-society-bit-sindri/",
      icon: BsLinkedin,
   },
]

const Sidebar = () => {
  return (
    <div className={`${style.icons} flex flex-col fixed right-0 min-h-screen items-end gap-7 bottom-0 justify-center m-4 w-100%` }>
      {
         links.map((Item)=>{
            return(
               <a 
                  href={Item.href} 
                  className={ `${style.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={Item.href}
               >
                 {
                  Item.icon && 
                  <Item.icon 
                     size={ICON_SIZE} 
                     className={`hover:fill-[#00dfd8]`} 
                  />
                 }
               </a>
            )
         })
      }
      </div>
  )
}

export default Sidebar
