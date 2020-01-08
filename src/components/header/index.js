import React from "react";
import styles from "./index.module.scss";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__content}>
      <div className={styles.header__inner}>This is header component</div>
    </div>
  </header>
);

export default Header;
