import Image from "next/image";
import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1>
        <span className={styles["header-title__first-part"]}>Lohealthy</span>
        <span className={styles["header-title__second-part"]}>Games</span>
      </h1>
      <button className={styles["header-button"]}>
        <Image
          alt="Menu icon"
          height="32"
          width="32"
          src="/images/Menu.svg"
        ></Image>
      </button>
    </header>
  );
};

export default Header;
