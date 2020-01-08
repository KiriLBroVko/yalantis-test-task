import React from "react";
import styles from "./index.module.scss";
import Copyright from "./subcomponents/copyright";
import FooterNav from "./subcomponents/footerNav";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footer__content}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__left}>
          <div className={styles.footer__title}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.
          </div>
        </div>
        <div className={styles.footer__right}>
          <FooterNav />
        </div>
        <div className={styles.footer__bottom}>
          <Copyright />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
