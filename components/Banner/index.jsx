import Image from "next/image";
import styles from "./banner.module.css";


const Banner = (props) => {
    
    const {title, subTitle, imgUrl}= props;

    const handleOnPlay = () => {
        console.log("handleOnPlay");
      };

    return ( 
        <>
        <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            {/* <p className={styles.firstLetter}>N</p> */}
            <Image src="/static/n.svg" width={50} height={50} alt="N" className="w-[40px] h-[40px]"/>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image src="/static/play_arrow.svg" width={30} height={30} alt="play arrow"/>
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{backgroundImage: `url(${imgUrl}`}}></div>
      </div>
      </>
      
     );
}
 
export default Banner;