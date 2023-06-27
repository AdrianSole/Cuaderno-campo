import {Schema, model} from "mongoose";

const parcelasSchema = new Schema({
    tipoCultivo: {
        type:String,
        trim:true
    },
    variedad: {
        type:String,
        trim:true
    },
    certificado: {
        type:String,
        trim:true
    },
    codigoCertificado: {
        type:String,
        trim:true
    },
    paraje: {
        type:String,
        trim:true
    },
    parcela: {
        type:String,
        trim:true
    },
    hectareas: {
        type:Number,
        trim:true
    },
    totalArboles: {
        type:Number,
        trim:true
    },
    fechaRecoleccion: {
        type:String,
        trim:true
    },
    sistemaRiego: {
        type:String,
        trim:true
    },
    fechaPlantacion: {
        type:String,
        trim:true
    },
    fitosAplicados: {
        type: Array,
        trim:true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model("Parcelas", parcelasSchema);