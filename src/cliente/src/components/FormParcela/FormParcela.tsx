import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./FormParcela.module.css";
import { Parcela } from "@/api/types/Parcela";
import * as parcelasService from "../../api/services/ParcelasService";
import { useParcelas } from "../ParcelasContext";

export const FormParcela = () => {
  const context = useParcelas();

  const [parcela, setParcela] = useState<Parcela>({
    tipoCultivo: "",
    variedad: "",
    certificado: "",
    codigoCertificado: "",
    paraje: "",
    parcela: "",
    hectareas: 0,
    totalArboles: 0,
    fechaRecoleccion: "",
    sistemaRiego: "",
    fechaPlantacion: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setParcela({ ...parcela, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await parcelasService.createParcela(parcela);
    context.loadParcelas();
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formDivide}>
          <div className={styles.formControl}>
            <label htmlFor="tipoCultivo">
              <b>Tipo de cultivo:</b>
            </label>
            <input
              type="text"
              name="tipoCultivo"
              onChange={handleInputChange}
              className={styles.inputStyle}
              autoFocus
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="variedad">
              <b>Variedad:</b>
            </label>
            <input
              type="text"
              name="variedad"
              onChange={handleInputChange}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="certificado">
              <b>Certificado:</b>
            </label>
            <input
              type="text"
              name="certificado"
              onChange={handleInputChange}
              className={styles.inputStyle}
            />
          </div>
        </div>
        <div className={styles.formDivide}>
          <div className={styles.formControl}>
            <label htmlFor="codigoCertificado">
              <b>Código certificado:</b>
            </label>
            <input
              type="text"
              name="codigoCertificado"
              className={styles.inputStyle}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="paraje">
              <b>Paraje:</b>
            </label>
            <input
              type="text"
              name="paraje"
              onChange={handleInputChange}
              className={styles.inputStyle}
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="parcela">
              <b>Parcela:</b>
            </label>
            <input
              type="text"
              name="parcela"
              onChange={handleInputChange}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="hectareas">
              <b>Hectareas:</b>
            </label>
            <input
              type="number"
              name="hectareas"
              min={0}
              onChange={handleInputChange}
              className={styles.inputStyle}
            />
          </div>
        </div>
        <div className={styles.formDivide}>
          <div className={styles.formControl}>
            <label htmlFor="totalArboles">
              <b>Arboles totales:</b>
            </label>
            <input
              type="number"
              name="totalArboles"
              min={0}
              onChange={handleInputChange}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="fechaRecoleccion">
              <b>Fecha recolección:</b>
            </label>
            <input
              type="text"
              name="fechaRecoleccion"
              onChange={handleInputChange}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="sistemaRiego">
              <b>Sistema de riego:</b>
            </label>
            <input
              type="text"
              name="sistemaRiego"
              onChange={handleInputChange}
              className={styles.inputStyle}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="fechaPlantacion">
              <b>Fecha plantacion:</b>
            </label>
            <input
              type="text"
              name="fechaPlantacion"
              onChange={handleInputChange}
              className={styles.inputStyle}
            />
          </div>
        </div>

        <button className={styles.formButton}>Crear Parcela</button>
      </form>
    </div>
  );
};
