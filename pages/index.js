import Banner from "@/components/Banner";
import SectionCards from "@/components/Card/section-card";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const disneyVideos = [
    {
      imgUrl: "/static/barbie.webp",
    },
    {
      imgUrl: "/static/batman.jpg",
    },
    {
      imgUrl: "/static/Barbie2.webp",
    },
  ];
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
