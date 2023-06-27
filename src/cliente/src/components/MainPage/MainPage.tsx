import { FC, useEffect } from "react";
import styles from "./MainPage.module.css";
import Image from "next/image";
import logoCentro from "../../../public/logoCentro.jpg";

export const MainPage: FC = () => {
  return (
    <div className={styles.mainPageContent}>
      <h1 className={styles.mainPageTitle}>FruitSole</h1>
      <div className={styles.autorLogo}>
        <h3>Adrián Solé Albiac</h3>
        <h3>Desarrollo de aplicaciones web 2º</h3>
        <Image src={logoCentro} width={150} height={150} alt="logo_centro" />
      </div>
    </div>
  );
};
