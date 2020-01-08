/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../index.module.scss";

const Copyright = () => (
  <div className={styles.copyright}>
    <div className={styles.copyright__content}>
      <div className={styles.copyright__left}>
        <div className={styles.copyright__text}>
          ©2019, Yalantis React.js School
        </div>
      </div>
      <div className={styles.copyright__right}></div>
    </div>
  </div>
);

export default Copyright;
