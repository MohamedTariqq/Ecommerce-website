import Link from "next/link";
import styles from "./Logo.module.css";
import { Montserrat } from "next/font/google";
const logofont = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});
export default function logo() {
  return (
    <Link href="/" className={`${styles.logo} ${logofont.className}`}>
      HEXASHOP
    </Link>
  );
}
