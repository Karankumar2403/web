import Head from "next/head";
import TeamCard from "../components/teamcard/TeamCard";
import StyledText from "../components/text/StyledText";
import style from "../components/teamcard/TeamCard.module.css";
import { TeamData2k21,TeamData2k22, TeamData2k23 } from "@/app/lib/data/TeamData";

export const metadata = {
  title: "Our Team",
  description: "",
};

export default function Page() {
  return (
    <>
    <Head>
      <title>Our Team</title>
    </Head>
    <div className="min-h-screen w-full p-4 bg-[#0D1116] flex flex-col gap-28">
      {/* <div>
        <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          Batch 2K20
        </StyledText>
        <div className={style.cardContainer}>
          {TeamData2k20.map((item) => {
            {item.imgSrc=item.imgSrc.replace('.jpg','.png')}
            
            return (
              <TeamCard
                name={item.name}
                pos={item.pos}
                imgSrc={'/teams/2K20/'+item.imgSrc}
                lazyImgSrc={'/teams/2K20/lazy/'+item.imgSrc}
                socials={item.socials}
                key={item.name}
              />
            );
          })}
        </div>
      </div> */}
      <div>
        <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          Batch 2K21
        </StyledText>
        <div className={style.cardContainer}>
          {TeamData2k21.map((item) => {
            return (
              <TeamCard
                name={item.name}
                pos={item.pos}
                imgSrc={'/teams/2K21/'+item.imgSrc}
                lazyImgSrc={'/teams/2K21/lazy/'+item.imgSrc}
                socials={item.socials}
                key={item.name}
              />
            );
          })}
        </div>
      </div>
      <div>
        <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          Batch 2K22
        </StyledText>
        <div className={style.cardContainer}>
          {TeamData2k22.map((item) => {
            return (
              <TeamCard
                name={item.name}
                pos={item.pos}
                imgSrc={'/teams/2K22/'+item.imgSrc}
                lazyImgSrc={'/teams/2K22/lazy/'+item.imgSrc}
                socials={item.socials}
                key={item.name}
              />
            );
          })}
        </div>
      </div>


       <div>
        <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          Batch 2K23
        </StyledText>
        <div className={style.cardContainer}>
          {TeamData2k23.map((item) => {
            return (
              <TeamCard
                name={item.name}
                pos={item.pos}
                imgSrc={'/teams/2K23/'+item.imgSrc}
                lazyImgSrc={'/teams/2K23/lazy/'+item.imgSrc}
                socials={item.socials}
                key={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
