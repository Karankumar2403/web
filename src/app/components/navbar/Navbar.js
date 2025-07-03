"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const links=[
  {
    href:"/",
    label:"Home",
  },
  {
    href:"/about",
    label:"About",
  },
  {
    href:"/events",
    label:"Events",
  },
  {
    href:"/faculty",
    label:"Department",
  },
  {
    href:"/teams",
    label:"Team",
  },
  {
    href:"/alumni",
    label:"Alumni",
  },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(()=>{

  },[isMenuOpen])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let prevScroll = window.scrollY;
    const handleScroll = () => {
      const navList = document.getElementById('navList');
      const navbar = document.getElementById('navbar');
      const title = document.getElementById('title');
      const height = navbar.offsetHeight;

      const currentScrollPos = window.scrollY;
      if (currentScrollPos > height + 60) {
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
      } else {
        navbar.style.border = 'none';
      }

      if (prevScroll < currentScrollPos) {
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
      } else {
        navList.classList.remove('fade-up');
        title.classList.remove('fade-up');
      }

      prevScroll = currentScrollPos;
    };
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className="flex sticky z-30 top-0 justify-between items-center px-4 bg-[#0D1116]">
      <div className="flex items-center justify-between w-full">
        <Link href='/'>
        <div className="text-white font-regular text-base mr-4 flex items-center cursor-pointer">
          <div className="relative min-w-[65px] min-h-[65px] mr-2">
            <Image 
            fill 
            src={`/assets/logo.png`} 
            sizes='(max-width:768px) 10vw,70px'
            alt="Logo"
            />
          </div>
          <h1 id="title">
            <span 
              className="transition ease-in-out delay-100 font-semibold hover:text-[#007cf0]"
            >
              ECE SOCIETY
            </span>
          </h1>
        </div>
        </Link>
        <div className="flex items-center">
          <div id="navList" className="hidden md:flex space-x-4">
            {
              links.map((item)=>{
                return(
                  <Link href={item.href} key={`${item.href}${item.label}`} className="transition ease-in-out delay-150 font-bold text-white px-4 hover:text-[#007cf0]  ">
                    {item.label}
                  </Link>
                )
              })
            }

          </div>
          <Link href='/#contact' className={`hidden md:flex space-x-4`}>
            <span className={`${styles.contactButton} transition ease-in-out delay-150`}>
              Contact Us
            </span>
          </Link>
        </div>
      </div>

      {/* Hamburger menu for smaller devices */}
      <div className="transition ease-in-out delay-150 md:hidden flex  items-center">
        <button className="text-white pr-4" onClick={toggleMenu}>
          <RiMenu3Line size={25} />
        </button>
        {
          isMenuOpen && (
            <button className="transition ease-in-out delay-150 text-white pr-4 z-50" onClick={toggleMenu}>
          <AiOutlineClose size={25} />
        </button>
          )
        }
      </div>
      {/* Drawer for smaller devices */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="transition ease-in-out delay-150 md:hidden z-10  mx-auto pt-8 absolute top-0 right-0 left-0 p-8 bg-gray-900 "
        >
          <div id="navList" className="flex flex-col space-y-2 text-lg w-[90%] items-end">
            <div className="flex flex-col space-y-2">

              {
              links.map((item)=>{
                return(
                  <Link href={item.href} onClick={toggleMenu} key={`${item.href}${item.label}`} className="transition ease-in-out delay-150 font-bold text-white hover:text-[#007cf0]">
                    {item.label}
                  </Link>
                  )
                })
              }

            </div>
            <Link href='/#contact' onClick={toggleMenu} className="transition ease-in-out delay-150 text-white">

            <span className={`${styles.contactButton} mt-4`}>
            Contact Us
          </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
