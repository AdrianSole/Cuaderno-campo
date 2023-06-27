import React, { MouseEventHandler } from "react";
import { Fito } from "../../api/types/Fito";
import styles from "./FitoItem.module.css";
import { deleteFito } from "@/api/services/FitoService";

import Image from "next/image";
import deleteImg from "../../../public/delete.png";
import { useFitos } from "../FitosContext";

interface FitoItemProps {
  fito: Fito;
}

export const FitoItem = ({ fito }: FitoItemProps) => {
  const context = useFitos();
  
  const delThisFito: React.MouseEventHandler<HTMLButtonElement> = async () => {
    if (fito._id) {
      const res = await deleteFito(fito._id);
      context.loadFitos();
      console.log(res);
    }
  };

  return (
    <>
      <div className={styles.fitoContent}>
        <p>
          <b>Nombre:</b> {fito.nombre}
        </p>
        <p>
          <b>Registro:</b> {fito.registro}
        </p>
        <p>
          <b>Fabricante:</b> {fito.fabricante}
        </p>
        <p>
          <b>Fabrica:</b> {fito.fabrica}
        </p>
        <p>
          <b>Formulado:</b> {fito.formulado}
        </p>
        <p>
          <b>Titular:</b> {fito.titular}
        </p>
        <p>
          <b>Cantidad en almacen:</b> {fito.cantidad}
        </p>
        <p>
          <b>Precio:</b> {fito.precio}€
        </p>
        <p>
          <b>Fecha creacion:</b> {fito.createdAt}
        </p>
        <p>
          <b>Fecha ultima actualizacion:</b> {fito.updatedAt}
        </p>
      </div>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={delThisFito}
      >
        <Image src={deleteImg} width={32} height={32} alt="icono_borrado" />
      </button>
    </>
  );
};
