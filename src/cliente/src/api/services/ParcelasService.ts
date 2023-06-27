import { myApi } from "../client/client";
import { Parcela } from "../types/Parcela";


/** Recoge todas las parcelas */
export const getParcelas = async () => {
    return await myApi.get("/parcelas/");
}

/** Recoge una unica parcela dado el id que le paso por parametro */
export const getParcela = async (parcelaId: string) => {
    try {
        const res = await myApi.get(`/parcelas/${parcelaId}`);
        return res.data;
    } catch (error) {
        console.error('Error al obtener la parcela:', error);
        throw error;
    }
};

/** Crea una nueva parcela */
export const createParcela = async (parcela: Parcela) => {
    return await myApi.post("/parcelas/", parcela);
}

/** Actualiza los datos de la parcela cuyo id se pasa como parámetro */
export const updateParcela = async (parcelaId: string, updatedParcela: Parcela) => {
    try {
        const res = await myApi.put(`/parcelas/${parcelaId}`, updatedParcela);
        return res.data;
    } catch (error) {
        console.error('Error al actualizar la parcela:', error);
        throw error;
    }
};

/** Borrar parcela cuyo id recibe por parametro */
export const deleteParcela = async (parcelaId: string) => {
    try {
        const res = await myApi.delete(`/parcelas/${parcelaId}`);
        return res.data;
    } catch (error) {
        console.error('Error al eliminar la parcela', error);
        throw error;
    }
}