import Banner from "@/components/Banner";
import SectionCards from "@/components/Card/section-card";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getVideos } from "@/lib/video";



export async function getServerSideProps(context) {
  const disneyVideos = getVideos();

  return {
    props: { disneyVideos }, // will be passed to the page component as props
  };
}

export default function Home({disneyVideos}) {
  return (
    <div>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <Navbar username="aniket@gmail.com" />
      <Banner
        title="The Batman"
        subTitle="Gotham Series"
        imgUrl="/static/batman.jpg"
      />
      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Disney" videos={disneyVideos} size="medium" />
      </div>
    </div>
  );
}
