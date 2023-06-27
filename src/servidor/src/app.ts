import express from 'express';
import config from "./config";
import morgan from "morgan";
import cors from "cors";
import fitosRoutes from "./routes/fitos.routes";
import parcelasRoutes from "./routes/parcelas.routes";

const app = express();

app.set("port", config.PORT);

app.use(morgan('dev'));
app.use(cors()); // Cualquiera puede hacer peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(fitosRoutes);
app.use(parcelasRoutes);


export default app;