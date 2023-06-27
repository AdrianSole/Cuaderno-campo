import { Fito } from "./Fito";

export interface Parcela {
    tipoCultivo: string;
    variedad: string;
    certificado: string;
    codigoCertificado: string;
    paraje: string;
    parcela: string;
    hectareas: number;
    totalArboles: number;
    fechaRecoleccion: string;
    sistemaRiego: string;
    fechaPlantacion: string;

    // En este campo voy a añadir los fitosanitarios que aplique a esta parcela
    fitosAplicados?: Fito[];

    //Campos opcionales
    createdAt?: string;
    updatedAt?: string;
    _id?: string;
}