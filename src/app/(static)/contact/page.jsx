import Image from "next/image";
import ContactForm from "../../../components/form/form";
import styles from "./page.module.css";
import contact from "../../../../public/images/icons/contact.png";
import form from "../../../../public/images/icons/form.png";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.hTitle}>Contact Us</h1>
        <Image className={styles.contactImg} src={contact} alt="contactImg" />
      </div>
      <div className={styles.form}>
        <ContactForm />
        <Image className={styles.contactImg} src={form} alt="formImg" />
      </div>
    </div>
  );
}
