import React from 'react'
import style from './Loader.module.css'

const Loader = () => {
  return (
   <div className={style.overlay}>
     <div className='w-full h-full flex justify-center items-center absolute'>
      <span className={style.loader}></span>
    </div>
   </div>
  )
}

export default Loader

// width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     opacity: 0.1;
//     align-items: center;