import { Fito } from "@/api/types/Fito";
import styles from "./ApplyFitos.module.css";
import { Parcela } from "@/api/types/Parcela";
import * as fitoService from "../../api/services/FitoService";
import * as parcelaService from "../../api/services/ParcelasService";

import { ChangeEvent, FC, FormEvent, useState } from "react";

interface ApplyFitosProps {
  fitos: Fito[];
  parcelas: Parcela[];
}

export const ApplyFitos: FC<ApplyFitosProps> = ({ fitos, parcelas }) => {
  const [selectedFito, setSelectedFito] = useState<Fito>();
  const [selectedParcela, setSelectedParcela] = useState<Parcela>();

  const [newQuantity, setNewQuantity] = useState("");

  const handleSelectFitos = async (e: any) => {
    console.log(e.target.value);
    if (e.target.value) {
      const res = await fitoService.getFito(e.target.value);
      setSelectedFito(res);
    }
  };

  const handleSelectedParcela = async (e: any) => {
    if (e.target.value) {
      const res = await parcelaService.getParcela(e.target.value);
      setSelectedParcela(res);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewQuantity(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedParcela && selectedFito && selectedParcela?.fitosAplicados) {
      
      const updatedFito = {
        ...selectedFito,
        cantidad: selectedFito.cantidad - Number(newQuantity),
      };

      const appliedFito = {
        ...selectedFito,
        cantidad: Number(newQuantity),
      }

      if (selectedFito._id) {
        const res = await fitoService.updateFito(selectedFito._id, updatedFito);
        console.log("Fito actualizado", res);
      }

      const updatedParcela = {
        ...selectedParcela,
        fitosAplicados: [...selectedParcela?.fitosAplicados, appliedFito],
      };

      if (selectedParcela._id) {
        const res = await parcelaService.updateParcela(
          selectedParcela?._id,
          updatedParcela
        );
        alert(
          `Se han aplicado ${newQuantity}L de ${selectedFito.nombre} en ${selectedParcela.paraje}-${selectedParcela.parcela}`
        );
      }
    }
  };

  return (
    <div className={styles.applyFitosContent}>
      <form className={styles.formStyle} onSubmit={handleSubmit}>
        <select className={styles.selectFitos} onChange={handleSelectFitos}>
          <option value="" className={styles.selectPlaceHolder}>
            Selecciona un fitosanitario
          </option>
          {fitos.map((fito) => {
            return (
              <option key={fito._id} value={fito._id}>
                {fito.nombre}
              </option>
            );
          })}
        </select>

        <div>
          <label>
            <b>Cantidad que quieres aplicar:</b>{" "}
          </label>
          <input
            type="number"
            onChange={handleInputChange}
            min={0}
            max={selectedFito?.cantidad}
          />
          <i>Tienes {selectedFito?.cantidad} L</i>
        </div>

        <select
          className={styles.selectParcelas}
          onChange={handleSelectedParcela}
        >
          <option value="" className={styles.selectPlaceHolder}>
            Selecciona una parcela
          </option>
          {parcelas.map((parcela) => {
            return (
              <option key={parcela._id} value={parcela._id}>
                {parcela.paraje} - {parcela.parcela}
              </option>
            );
          })}
        </select>
        <button>Añadir</button>
      </form>
    </div>
  );
};
