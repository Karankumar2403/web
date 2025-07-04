import Head from "next/head";
import TeamCard from "../components/teamcard/TeamCard";
import StyledText from "../components/text/StyledText";
import style from "../components/teamcard/TeamCard.module.css";
import { TeamData2k22, TeamData2k23 } from "@/app/lib/data/TeamData";

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
        
        {/* Current Post Bearers Section */}
        <div>
          <StyledText
            primary="#007cf0"
            secondary="#00dfd8"
            className="text-[36px] font-bold flex flex-col items-center mb-4"
          >
            Current Post Bearers – Batch 2K22
          </StyledText>
          <div className={style.cardContainer}>
            {Array.isArray(TeamData2k22) &&
              TeamData2k22.map((item) => (
                <TeamCard
                  name={item.name}
                  pos={item.pos}
                  imgSrc={"/teams/2K22/" + item.imgSrc}
                  lazyImgSrc={"/teams/2K22/lazy/" + item.imgSrc}
                  socials={item.socials}
                  key={item.name}
                />
              ))}
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
            {Array.isArray(TeamData2k23) &&
              TeamData2k23.map((item) => (
                <TeamCard
                  name={item.name}
                  pos={item.pos}
                  imgSrc={"/teams/2K23/" + item.imgSrc}
                  lazyImgSrc={"/teams/2K23/lazy/" + item.imgSrc}
                  socials={item.socials}
                  key={item.name}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
