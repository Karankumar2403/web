import React from "react";
import Card from "../components/facultyCard/Card";
import Head from "next/head";
import { FacultyData, Views } from "@/app/lib/data/FacultyData";
import style from "../components/facultyCard/Card.module.css";
import StyledText from "../components/text/StyledText";

export const metadata = {
  title: "Our Faculty",
  description: "",
};

const page = () => {
  return (
    <>
      <Head>
        <title>Our Faculty</title>
      </Head>
      <div className="p-10  flex flex-col gap-4 items-center justify-center">
        <div className="p-2 w-4/5 flex  justify-center flex-col gap-2 font-normal">
       <div className="">
            <h1 className="text-[40px] font-semibold">About ECE Department</h1>
          </div>

          <p>
            The Electronics and Communication Engineering department commenced
            its journey in 1957, eight years after the establishment of BIT
            Sindri. Since then, BIT Sindri became an institution that led the
            way in India’s rapid expansion of the telecom industry.
          </p>
          <p>
            The department offers a four-year B. Tech course for undergraduates
            ingraining challenges and innovation across many fields. It was
            established as a platform to showcase and enhance technical
            excellence in all the Areas of electronics and communication
            engineering. It provides industrial exposure to Engaging topics like
            5G research and technology to initiate overall development.
          </p>
          <p>
            To enhance the enthusiasm of innovative minds, the ELECTRONICS AND
            COMMUNICATION ENGINEERING SOCIETY has been Established this year to
            host numerous seminars, cultural fests, quizzes, competitions,
            workshops, and various technical activities. This action was
            Intended to draw in curious minds and offer a road map for their
            future.
          </p>
        </div>

        <div className="vision p-2 w-4/5 flex flex-col">
          <div className="">
            <h1 className="text-[40px] font-semibold">Vision</h1>
          </div>
          <p>
            To be recognized as a center of academic excellence for globally
            competent, professionally, and socially responsible electronics &
            Communication engineers and entrepreneurs.
          </p>
        </div>
        <div className="vision p-2 w-4/5 flex flex-col gap-2">
          <div className=""> 
            <h1 className="text-[40px] font-semibold">Mission</h1>
          </div>
          <div className="">
          <ul className="list-none flex flex-col gap-4">
          <li className="flex ">
          <span className="text-lg pr-2 font-bold">&#9672;</span>
          To prepare students for a successful career by blending theoretical knowledge and practical skills with employability and entrepreneurial traits by offering UG, PG, and Doctoral programs in the Electronics & Communication Engineering domains.</li>
          <li className="flex ">
          <span className="text-lg pr-2">&#9672;</span>
          To establish a state-of-the-art laboratory and research facilities for academic excellence and promotion of quality teaching as well as a learning process.</li>
          <li className="flex ">
          <span className="text-lg pr-2">&#9672;</span>
          To inculcate team spirit and leadership qualities and produce socially acceptable engineers with ethical and human values.</li>
          <li className="flex ">
          <span className="text-lg pr-2">&#9672;</span>
          To contribute to the country and society at large by enhancing the interaction between academia and industries for addressing the need of mankind.</li>
          </ul>
          </div>
          
        </div>
      </div>

      <div className="min-h-screen w-4/5 flex flex-col mx-auto mb-4">
        <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          Our Faculty
        </StyledText>
        <div className={style.page}>
          {FacultyData.map((items) => {
            return (
              <div className={style.card} key={items.imgSrc}>
                <Card
                  name={items.name}
                  desg={items.desg}
                  imgSrc={"/prof/" + items.imgSrc}
               lazyImgSrc={"/prof/lazy/"+items.imgSrc}
                  pdfSrc={
                    "/prof/biodata/" + items.imgSrc.replace(".png", ".pdf")
                  }
                  key={items.name}
                  email={items.email}
                  mobile={items.mobile}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
