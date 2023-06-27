import { RequestHandler } from "express";
import Fito from "../schemas/fitos"

export const createFito: RequestHandler = async (req, res) => {
    const fitoFound = await Fito.findOne({ nombre: req.body.name })
    if (fitoFound) {
        return res.status(301).json({ message: 'Este nombre ya existe' });
    }

    const fito = new Fito(req.body);
    const savedFito = await fito.save()
    res.json(savedFito);
};

export const getFitos: RequestHandler = async (req, res) => {
    try {
        const fitos = await Fito.find();
        return res.json(fitos);
    } catch (error) {
        res.json(error);
    }
};

export const getFito: RequestHandler = async (req, res) => {
    const fitoFound = await Fito.findById(req.params.id);
    if (!fitoFound) return res.status(204).json();
    return res.json(fitoFound);
};

export const deleteFito: RequestHandler = async (req, res) => {
    const fitoFound = await Fito.findByIdAndDelete(req.params.id);
    if (!fitoFound) return res.status(204).json();
    return res.json(fitoFound);
};

export const updateFito: RequestHandler = async (req, res) => {
    const fitoUpdated = await Fito.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!fitoUpdated) return res.status(204).json();
    return res.json(fitoUpdated);
};

