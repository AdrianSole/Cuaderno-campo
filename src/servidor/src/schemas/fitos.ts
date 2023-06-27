import {Schema, model} from "mongoose";
import { type } from "os";

const fitosSchema = new Schema ({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    registro: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    titular: {
        type: String,
        trim: true
    },
    fabricante: {
        type: String,
        trim: true
    },
    fabrica: {
        type: String,
        trim: true
    },
    formulado: {
        type: String,
        trim: true
    },
    cantidad: {
        type: Number,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model("Fitos", fitosSchema);