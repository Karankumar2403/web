import React from 'react'
import Styles from "./PastCard.module.css";
import Image from 'next/image';

const PastCard = ({title,content,date,imgSrc,lazyImgSrc,link}) => {
    const bg='/pastevent/event.jpg'
    link=link.split('.')[0];
    link=link+'.pdf';
    // To remove day from date
    const dateWithoutTime = new Date(date).toDateString().split(' ');
    dateWithoutTime.shift();
    const formattedDate=dateWithoutTime.join(' ');

  return (
    <div className={Styles.card}>
      <Image
            className={`transition ease-in-out delay-150 mx-auto object-cover object-top hover:scale-110 `}
            fill
            sizes='(max-width:768px) 100vw,700px'
            src={imgSrc}
            placeholder='blur'
            blurDataURL={lazyImgSrc}
            alt={title}
            />
    <div className={Styles.cardBody}>
      <h2 className={Styles.cardTitle}>{title}</h2>
      <p>
        <span className='text-blue-200 text-sm'>
        {formattedDate}
        </span>
        <br/>
        {content} 
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={Styles.button}>
        Know More
      </a>
    </div>
  </div>
  )
}

export default PastCard
