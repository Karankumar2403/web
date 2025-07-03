import React from 'react'
import style from'./Loading.module.css'

const Loading = () => {
  return (
    <div className='relative h-screen w-screen top-0 bg-[#090a0a] '>
    <div className='flex items-start mt-20 justify-center min-h-full w-full absolute'>
    <span className={style.loader}></span>
    </div>
    </div>
  
  )
}

export default Loading
