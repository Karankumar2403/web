import React from "react";
import style from "./Footer.module.css";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const ICON_SIZE = 24;

const Footer = () => {
  return (
    <div className={`${style.footer} py-4 flex  flex-col gap-2 w-full h-10vh`}>
      <div className={`${style.icons} justify-center w-100% `}>
        <Link
          href="https://instagram.com/ecesocietybits?igshid=MzRlODBiNWFlZA== "
          className={`${style.link}`}
        >
          <AiFillInstagram
            size={ICON_SIZE}
            className={`hover:fill-[#00dfd8]`}
          />
        </Link>

        <Link
          href="https://github.com/ecesocietybit"
          className={`${style.link}`}
        >
          <FaGithub size={ICON_SIZE} className={`hover:fill-[#00dfd8]`} />
        </Link>

        <Link href="ecesociety@bitsindri.ac.in" className={`${style.link}`}>
          <FaEnvelope size={ICON_SIZE} className={`hover:fill-[#00dfd8]`} />
        </Link>

        <Link
          href="https://www.linkedin.com/company/ece-society-bit-sindri/"
          className={`${style.link}`}
        >
          <BsLinkedin size={ICON_SIZE} className={` hover:fill-[#00dfd8]`} />
        </Link>
      </div>
      <div className={`${style.copyright}`}>
        <h6 className="font-light text-sm">
          © {new Date().getFullYear()} ECE Society BIT Sindri. All rights
          reserved.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
