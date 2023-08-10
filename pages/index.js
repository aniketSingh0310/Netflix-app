import Banner from "@/components/Banner";
import SectionCards from "@/components/Card/section-card";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getVideos,getPopularVideos } from "@/lib/video";



export async function getServerSideProps(context) {
  try {
  const disneyVideos = await getVideos("disney trailer");
  const marvelVideos = await getVideos("marvel trailer");
  const footballVideos = await getVideos("Champions league football");
  const popularVideos = await getPopularVideos();
  
    return {
      props: { disneyVideos,marvelVideos,footballVideos,popularVideos },
    };
  } catch (error) {
    console.error('Error fetching videos:', error);
    return {
      props: { disneyVideos: [] }, // Provide an empty array as a fallback
    };
  }
}
export default function Home({disneyVideos,marvelVideos,footballVideos,popularVideos}) {

  
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <div className={styles.main}>

      <Navbar username="aniketreuls@gmail.com" />
      <Banner
        title="The Batman"
        subTitle="Gotham Series"
        imgUrl="/static/batman.jpg"
        />
      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Marvel" videos={marvelVideos} size="medium" />
        <SectionCards title="Football" videos={footballVideos} size="small" />
        <SectionCards title="Popular" videos={popularVideos} size="medium" />
      </div>
        </div>
    </div>
  );
}
