import Image from "next/image";
import styles from "./page.module.css";
import Services from "../../../../public/images/icons/services.png";
export default function Category() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <div className={styles.title}>
          <h1 className={styles.a}>Our Services</h1>
          <p className={styles.discription}>
            We Build Brands & Digital Partnerships that Help to Connect Your
            Customers for Grow Your Business.
          </p>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.image}>
          <Image className={styles.imgAbout} src={Services} alt="Aboutimage" />
        </div>
      </div>
    </div>
  );
}
