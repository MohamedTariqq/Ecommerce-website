import styles from "./Button.module.css";
("use cline");
export default function Button() {
  return (
    <button
      className={styles.logout}
      onClick={() => {
        console.log("logout");
      }}
    >
      Logout
    </button>
  );
}
