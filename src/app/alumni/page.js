import TeamCard from "../components/teamcard/TeamCard";
import StyledText from "../components/text/StyledText";
import style from "../components/teamcard/TeamCard.module.css";
import { TeamData2K18, TeamData2k19 ,TeamData2k20,TeamData2k21} from "@/app/lib/data/AlumniData";
import Head from "next/head";

export const metadata = {
  title: "Our Alumni",
  description: "",
};

export default function Page() {
  return (
    <>
    <Head>
      <title>Our Alumni</title>
    </Head>
    <div className="min-h-screen w-full p-4 bg-[#0D1116] flex flex-col gap-28">
        
      <div>
        <StyledText
          primary="#007cf0"
          secondary="#00dfd8"
          className="text-[36px] font-bold flex flex-col items-center mb-4"
        >
          Batch 2K18
        </StyledText>
        <div className={style.cardContainer}>
          {TeamData2K18.map((item) => {
            return (
              <TeamCard
                name={item.name}
                pos={item.company}
                imgSrc={'/teams/2K18/'+item.imgSrc}
                lazyImgSrc={'/teams/2K18/lazy/'+item.imgSrc}
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
          Batch 2K19
        </StyledText>
        <div className={style.cardContainer}>
          {TeamData2k19.map((item) => {
            return (
              <TeamCard
                name={item.name}
                pos={item.company}
                imgSrc={'/teams/2K19/'+item.imgSrc}
                lazyImgSrc={'/teams/2K19/lazy/'+item.imgSrc}
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
          Batch 2K20
        </StyledText>
        <div className={style.cardContainer}>
          {TeamData2k20.map((item) => {
            return (
              <TeamCard
                name={item.name}
                pos={item.company}
                imgSrc={'/teams/2K20/'+item.imgSrc}
                lazyImgSrc={'/teams/2K20/lazy/'+item.imgSrc}
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
          Batch 2K21
        </StyledText>
        <div className={style.cardContainer}>
          {TeamData2k21.map((item) => {
            return (
              <TeamCard
                name={item.name}
                pos={item.company}
                imgSrc={'/teams/2K21/'+item.imgSrc}
                lazyImgSrc={'/teams/2K21/lazy/'+item.imgSrc}
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
