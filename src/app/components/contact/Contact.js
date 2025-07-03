
import React from "react";
import styles from "./Form.module.css";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import StyledText from "../text/StyledText";
import Form from "./Form";

const ICON_SIZE = 23;
const Contact = () => {
  
  return (
    <section id="contact" className={`${styles.contactform}`}>
      <div className={`${styles.contactLeft}`}>
        <div className={`${styles.contactLeftHead}`}>
          <h1 className={`${styles.contactHeading}  `}>
            <StyledText
              primary="#007cf0"
              secondary="#00dfd8"
              className=" font-bold w-fit mb-0 border-b-2 border-white  "
            >
              Contact Us
            </StyledText>
          </h1>
          <h1 className={`${styles.contactpara}`}>
            Room No.: S-13<br/> E.C.E Dept <br /> E.C.E Building B.I.T Sindri
          </h1>
        </div>
        <div className={`${styles.contactLeftMail}`}>
          <StyledText
            primary="#007cf0"
            secondary="#00dfd8"
            className="emailhead font-bold  mb-1 mt-0"
          >
            Email
          </StyledText>
          <a
            className={`${styles.link}  flex gap-2 justify-center sm:justify-start items-center `}
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:ecesociety@bitsindri.ac.in`}
          >
            <CgMail
              size={ICON_SIZE}
              width={ICON_SIZE}
              className={`${styles.items} hover:scale-110 `}
            />
            <p className={"text-lg"}> ecesociety@bitsindri.ac.in</p>
          </a>
        </div>

        <div className={`${styles.contactLeftSocial}`}>
          <div className={``}>
            {" "}
            <StyledText
              primary="#007cf0"
              secondary="#00dfd8"
              className=" font-bold mb-3 border-white "
            >
              Social Media
            </StyledText>
          </div>

          <div className={`${styles.socialicons} sm:justify-start flex justify-evenly `}>
            <Link
              href="https://instagram.com/ecesocietybits?igshid=MzRlODBiNWFlZA== "
              className={`${styles.link} px-[5px]`}
            >
              <AiFillInstagram
                size={ICON_SIZE}
                width={ICON_SIZE}
                className={`${styles.items} hover:scale-110`}
              />
            </Link>

            <Link
              href="https://www.linkedin.com/company/ece-society-bit-sindri/"
              className={`${styles.link} px-[5px]`}
            >
              <BsLinkedin
                size={ICON_SIZE}
                width={ICON_SIZE}
                className={`${styles.items} hover:scale-110`}
              />
            </Link>

            <Link
              href="https://github.com/ecesocietybit"
              className={`${styles.link} px-[5px]`}
            >
              <FaGithub
                size={ICON_SIZE}
                width={ICON_SIZE}
                className={`${styles.items}  hover:scale-110`}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.contactRight}`}>
       <Form/>
      </div>
    </section>
  );
};

export default Contact;
