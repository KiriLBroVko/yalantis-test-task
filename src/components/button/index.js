import React from "react";
import styles from "./index.module.scss";

const Button = ({ size, children, ...args }) => {
  return (
    <button {...args} className={`${styles.btn} ${size ? `btn-${size}` : ""}`}>
      {children}
    </button>
  );
};

export default Button;
