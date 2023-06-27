import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import mainIcon from "../../../public/main-icon.png";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";

export const Navbar: FC = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? styles.activeLink : "";
  };

  const getPageTitle = () => {
    const pages = [
      { path: "/", title: "Inicio" },
      { path: "/Fitos", title: "Añadir Fitosanitarios" },
      { path: "/Parcelas", title: "Añadir Parcelas" },
      { path: "/AplicarFitos", title: "Aplicar Fitosanitarios a Parcelas" },
    ];

    const currentPage = pages.find((page) => page.path === router.pathname);

    return currentPage ? currentPage.title : "";
  };

  return (
    <nav className={styles.mainNav}>
      <Image src={mainIcon} alt="main-icon" />
      <h1>{getPageTitle()}</h1>
      <ul>
        <li className={isActive("/")}>
          <Link href="/">Inicio</Link>
        </li>
        <li className={isActive("/Fitos")}>
          <Link href="/Fitos">Fitosanitarios</Link>
        </li>
        <li className={isActive("/Parcelas")}>
          <Link href="/Parcelas">Parcelas</Link>
        </li>
        <li className={isActive("/AplicarFitos")}>
          <Link href="/AplicarFitos">Aplicar Fitosanitarios</Link>
        </li>
      </ul>
    </nav>
  );
};
