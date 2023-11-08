import Image from "next/image";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 HEXASHOP. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/images/icons/facebook.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="HEXASHOP facebook link"
        />
        <Image
          src="/images/icons/instagram.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="HEXASHOP instagram link"
        />
        <Image
          src="/images/icons/telegram.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="HEXASHOP telegram link"
        />
        <Image
          src="/images/icons/twitter.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="HEXASHOP twitter link"
        />
        <Image
          src="/images/icons/youtube.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="HEXASHOP youtube link"
        />
      </div>
    </div>
  );
}
