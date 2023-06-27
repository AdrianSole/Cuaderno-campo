import React from "react";
import { Parcela } from "../../api/types/Parcela";
import styles from "./ParcelaItem.module.css";
import { deleteParcela } from "@/api/services/ParcelasService";
import deleteImg from "../../../public/delete.png";
import Image from "next/image";
import { useParcelas } from "../ParcelasContext";

interface ParcelaItemProps {
  parcela: Parcela;
}

export const ParcelaItem = ({ parcela }: ParcelaItemProps) => {
  const context = useParcelas();
  
  const delThisParcela: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    if (parcela._id) {
      const res = await deleteParcela(parcela._id);
      context.loadParcelas();
      console.log(res);
    }
  };

  return (
    <>
      <div className={styles.parcelaContent}>
        <p>
          <b>Tipo de cultivo:</b> {parcela.tipoCultivo}
        </p>
        <p>
          <b>Variedad:</b> {parcela.variedad}
        </p>
        <p>
          <b>Certificado:</b> {parcela.certificado}
        </p>
        <p>
          <b>Código certificado:</b> {parcela.codigoCertificado}
        </p>
        <p>
          <b>Paraje:</b> {parcela.paraje}
        </p>
        <p>
          <b>Parcela:</b> {parcela.parcela}
        </p>
        <p>
          <b>Hectareas:</b> {parcela.hectareas}
        </p>
        <p>
          <b>Cantidad de arboles:</b> {parcela.totalArboles}
        </p>
        <p>
          <b>Fecha de recolección:</b> {parcela.fechaRecoleccion}
        </p>
        <p>
          <b>Sistema de riego:</b> {parcela.sistemaRiego}
        </p>
        <p>
          <b>Fecha de Plantacion</b> {parcela.fechaPlantacion}
        </p>
        <p>
          <b>Fecha creacion:</b> {parcela.createdAt}
        </p>
        <p>
          <b>Fecha ultima actualizacion:</b> {parcela.updatedAt}
        </p>
      </div>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={delThisParcela}
      >
        <Image src={deleteImg} width={32} height={32} alt="icono_borrado" />
      </button>
    </>
  );
};
