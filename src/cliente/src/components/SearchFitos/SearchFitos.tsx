import { FC, useState } from "react";
//import { useForm } from "react-hook-form";
import styles from "./SearchFitos.module.css";
import data from "../../../../servidor/ProductosAutorizados-13_04_2023.json";
import { Fito } from "@/api/types/Fito";

export type FitoSearched = Omit<Fito, "cantidad" | "precio">;

interface SearchFitosProps {
  onSelect: (fito: FitoSearched) => void;
}

export const SearchFitos: FC<SearchFitosProps> = ({onSelect}) => {
  const [selectedFito, setSelectedFito] = useState<FitoSearched>();
  const [showContentState, setShowContentState] = useState<boolean>(true);

  const fitosanitarios: FitoSearched[] = data.map((item: any) => ({
    nombre: (item.Nombre as string).trim(),
    registro: (item.NumRegistro as string).trim(),
    titular: (item.Titular as string).trim(),
    fabricante: (item.Fabricante as string).trim(),
    fabrica: (item.Fabrica as string).trim(),
    formulado: (item.Formulado as string).trim(),
  }));

  const handleSelect = (e: any) => {
    // 1. Buscar
    const fitoFound = fitosanitarios.find((item) => item.nombre === e.target.value);
    // 2. hacer el setSelectedFito
    if (fitoFound) {
      setSelectedFito(fitoFound);
      onSelect(fitoFound);
    }
  };

  return (
    <form className={styles.formStyle}>
      <div className={styles.selectContainer}>
        <label>
          <b>Buscar por nombre:</b>
          <select
            className={styles.selectStyle}
            value={selectedFito?.nombre}
            onChange={handleSelect}
          >
            <option value="">Seleccione un nombre</option>
            {fitosanitarios.map((registro: FitoSearched) => (
              <option key={registro.nombre} value={registro.nombre}>
                {registro.nombre}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.selectContainer}>
        <label>
          <b>Buscar por registro:</b>
          <select
            className={styles.selectStyle}
            value={selectedFito?.registro}
            onChange={handleSelect}
          >
            <option value="">Seleccione un registro</option>
            {fitosanitarios.map((registro: FitoSearched) => (
              <option key={registro.nombre} value={registro.nombre}>
                {registro.registro}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedFito && (
        <>
          {showContentState && (
            <div className={styles.selectedValuesContainer}>
              <div className={styles.selectedValues}>
                <label>Titular </label>
                <span>{selectedFito.titular}</span>
              </div>
              <div className={styles.selectedValues}>
                <label>Fabricante </label>
                <span>{selectedFito.fabricante}</span>
              </div>
              <div className={styles.selectedValues}>
                <label>Fabrica </label>
                <span>{selectedFito.fabrica}</span>
              </div>
              <div className={styles.selectedValues}>
                <label>Formulado </label>
                <span>{selectedFito.formulado}</span>
              </div>
            </div>
          )}
          <button
            type="button"
            className={`${styles.hideAndShowBtn}`}
            onClick={() => setShowContentState((oldState) => !oldState)}
          >
            {showContentState ? "Ocultar contenido" : "Mostrar contenido"}
          </button>
        </>
      )}
    </form>
  );
};
