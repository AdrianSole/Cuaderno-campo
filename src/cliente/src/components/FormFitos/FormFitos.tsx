import styles from "./FormFitos.module.css";
import { ChangeEvent, FC, FormEvent, useState, useContext } from "react";
import { Fito } from "@/api/types/Fito";
import * as fitosService from "../../api/services/FitoService";
import { FitoSearched, SearchFitos } from "../SearchFitos";
import { useFitos } from "../FitosContext";

type InputChange = ChangeEvent<HTMLInputElement>;

interface FormFitosProps {}

export const FormFitos: FC<FormFitosProps> = () => {
  const context = useFitos();

  const [fito, setFito] = useState<Fito>({
    fabrica: "",
    fabricante: "",
    formulado: "",
    nombre: "",
    registro: "",
    titular: "",
    cantidad: 0,
    precio: 0,
  });

  const handleInputChange = (e: InputChange) => {
    setFito({ ...fito, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fitosService.createFito(fito);
    context.loadFitos();
  };

  const onSelect = (fito: FitoSearched) => {
    console.log("onSelect", fito);
    setFito({
      ...fito,
      cantidad: 0,
      precio: 0,
    });
  };

  return (
    <>
      <SearchFitos onSelect={onSelect} />
      <div className={styles.formContainer}>
        <form className={styles.formStyle} onSubmit={handleSubmit}>
          <div className={styles.formControl}>
            <input
              type="number"
              name="cantidad"
              placeholder="Cantidad que quieres comprar"
              className={styles.inputStyle}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.formControl}>
            <input
              type="number"
              name="precio"
              placeholder="Precio del fitosanitario"
              className={styles.inputStyle}
              onChange={handleInputChange}
            />
          </div>
          <button>Añadir fitosanitario</button>
        </form>
      </div>
    </>
  );
};
