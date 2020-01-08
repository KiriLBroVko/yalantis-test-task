/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../index.module.scss";

const NAVMENU_ITEMS = [
  {
    id: "1",
    title: "About"
  },
  {
    id: "2",
    title: "Features"
  },
  {
    id: "3",
    title: "FAQ"
  },
  {
    id: "4",
    title: "Contact"
  }
];

const NavItem = ({ title }) => (
  <li className={`${styles["footer-nav__itm"]}`}>
    <a href="/" className={`${styles["footer-nav__link"]}`}>{title}</a>
  </li>
);

const Copyright = () => (
  <ul className={`${styles["footer-nav"]}`}>
    {NAVMENU_ITEMS.map(dataItmText => (
      <NavItem key={dataItmText.id} title={dataItmText.title} />
    ))}
  </ul>
);

export default Copyright;
