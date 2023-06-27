import { myApi } from "../client/client";
import { Fito } from "../types/Fito";


/** Recoge todos los fitosanitarios */
export const getFitos = async () => {
    return await myApi.get("/fitos/");
}

/** Recoge un unico fitosanitario dado el id que le paso por parametro */
export const getFito = async (fitoId: string) => {
    try {
        const res = await myApi.get(`/fitos/${fitoId}`);
        return res.data;
    } catch (error) {
        console.error('Error al obtener el fito:', error);
        throw error;
    }
};

/** Crea un nuevo fitosanitario */
export const createFito = async (fito: Fito) => {
    return await myApi.post("/fitos/", fito);
}

export const updateFito = async (fitoId: string, updatedFito: Fito) => {
    try {
        const res = await myApi.put(`/fitos/${fitoId}`, updatedFito);
        return res.data;
    } catch (error) {
        console.error('Error al actualizar la parcela:', error);
        throw error;
    }
}

/** Borra el fitosanitario cuyo id se pasa por parametro */
export const deleteFito = async (fitoId: string) => {
    try {
        const res = await myApi.delete(`/fitos/${fitoId}`);
        return res.data;
    } catch (error) {
        console.error('Error al eliminar el fito:', error);
        throw error;
    }
};
