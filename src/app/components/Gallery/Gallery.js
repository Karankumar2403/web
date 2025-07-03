"use client"
import { useEffect } from 'react';
import { GalleryData } from "@/app/lib/data/GalleryData";

import styles from './Gallery.module.css';
import Image from 'next/image';

function GridGallery() {
  useEffect(() => {
    const handleClipping = () => {
      if (document.documentElement.clientWidth > 200) {
        const allElements = [
          ...document.querySelectorAll(`.${styles.wrapper}`),
        ];
        allElements.forEach((element) => {
          const circle = element.firstChild.firstChild.firstChild.firstChild;
          const currentImageBox = element.childNodes[1];
          const clippedBoxHeight = element.getBoundingClientRect().height;
          const windowHeight = document.documentElement.clientHeight;
        
          const distanceFromTop =
            element.getBoundingClientRect().top + clippedBoxHeight / 2;
          let percentageOfElementVisible;
          if (distanceFromTop > windowHeight) {
            percentageOfElementVisible = 0;
          } else {
            percentageOfElementVisible =
              Math.min(
                windowHeight - Math.min(windowHeight, distanceFromTop),
                clippedBoxHeight
              ) / clippedBoxHeight;
          }
          if (percentageOfElementVisible > 0) currentImageBox.style.opacity = 1;
          else currentImageBox.style.opacity = 0;
          circle.setAttribute('r', percentageOfElementVisible * 2);
        });
      }
    };
    document.addEventListener('scroll', handleClipping);
    return () => document.removeEventListener('scroll', handleClipping);
  }, []);

  return (
    <section className={styles.section}>
      
      <div className={styles.container}>
        {GalleryData.map((item, index) => {
          return (
            <GridImage
              key={String(index)}
              src={item.imgSrc}
              title={item.title}
              event={item.event}
              id={item.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default GridGallery;

function GridImage({ src,event,  title, id }) {
  {console.log(event.toUpperCase());
  event=event.toUpperCase()}
  return (
    <div className={styles.wrapper}>
      <svg width="0" height="0">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            <circle
              cx="0.5"
              cy="1.2"
              r="0"
              transform="translate(0.5 1.2) scale(0.8806584362139918 1) translate(-0.5 -1.2)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.imgBoxWrapper} style={{ clipPath: `url(#${id})` }}>
        <div className={styles.image}>
          <Image
          src={"/gallery/"+src} 
          alt={title}
          width={400}
          height={400}
          placeholder='blur'
          blurDataURL={"/gallery/lazy/"+src}

          />
        </div>
        <div className={`${styles.text}  `}>
          <span className='w-full flex flex-col gap-1 rounded py-3 bg-slate-900/40'>
          <h2 className='font-bold text-[30px]'>{event}</h2>
          {title}
          </span>
          </div>
      </div>
    </div>
  );
}