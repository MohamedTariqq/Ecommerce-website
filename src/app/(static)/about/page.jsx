import Image from "next/image";
import styles from "./about.module.css";
import Abouts from "../../../../public/images/icons/about.png";
export const metadata = {
  title: "HEXASHOP/About",
  description: "",
};
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <div className={styles.title}>
          <h1 className={styles.a}>About Us</h1>

          <h1>HEXASHOP</h1>
          <p className={styles.discription}>
            HEXASHOP is an dvertising Company which has been worked on
            introducing integrated advertising services that participated in the
            development of advertising industry, where we adopt working
            methodology based on advance planning, good preparation, hard work
            to provide, implement innovative ideas and advanced solutions to
            build a constructive strategic relationship with our clients to
            ensure continuity.
          </p>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.image}>
          <Image className={styles.imgAbout} src={Abouts} alt="Aboutimage" />
        </div>
      </div>
    </div>
  );
}
