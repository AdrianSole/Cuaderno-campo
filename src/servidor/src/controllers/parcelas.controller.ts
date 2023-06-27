import { RequestHandler } from "express";
import Parcela from "../schemas/parcelas";

export const createParcela: RequestHandler = async (req, res) => {
    const parcelaFound = await Parcela.findOne({ parcela: req.body.parcela })
    if (parcelaFound) {
        return res.status(301).json({ message: 'Esta parcela ya existe' });
    }

    const parcela = new Parcela(req.body);
    const savedParcela = await parcela.save()
    res.json(savedParcela);
};

export const getParcelas: RequestHandler = async (req, res) => {
    try {
        const parcelas = await Parcela.find();
        return res.json(parcelas);
    } catch (error) {
        res.json(error);
    }
};

export const getParcela: RequestHandler = async (req, res) => {
    const parcelaFound = await Parcela.findById(req.params.id);
    if (!parcelaFound) return res.status(204).json();
    return res.json(parcelaFound);
};

export const deleteParcela: RequestHandler = async (req, res) => {
    const parcelaFound = await Parcela.findByIdAndDelete(req.params.id);
    if (!parcelaFound) return res.status(204).json();
    return res.json(parcelaFound);
};

export const updateParcela: RequestHandler = async (req, res) => {
    const parcelaUpdated = await Parcela.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!parcelaUpdated) return res.status(204).json();
    return res.json(parcelaUpdated);
};

