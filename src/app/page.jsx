import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/images/icons/hero.svg";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shop destination!</h1>
        <p className={styles.discription}>
          Discover a world od endless shopping possibilities at our online
          store. Browse, choose, and order your favorite products from the
          comfort of your home.
        </p>
        <Link href="/products">
          <button className={styles.button}>Shop Now</button>
        </Link>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={Hero} alt="HEROImg" />
      </div>
    </div>
  );
}
