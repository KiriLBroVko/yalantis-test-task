import React from "react";
import styles from "./index.module.scss";

const MainWrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default MainWrapper;
