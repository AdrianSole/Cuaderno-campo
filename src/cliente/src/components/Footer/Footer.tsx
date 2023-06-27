import { FC } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import mainIcon from "../../../public/main-icon.png";

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.mainFooter}>
      <Image src={mainIcon} alt="main-icon" />
      <p>{`Copyright © FruitSolé ${year}`}</p>
    </footer>
  );
};
