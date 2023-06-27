import { Router } from "express";
import * as parcelaCtrl from "../controllers/parcelas.controller";

const router = Router();

router.get("/parcelas", parcelaCtrl.getParcelas);

router.get("/parcelas/:id", parcelaCtrl.getParcela);

router.post("/parcelas", parcelaCtrl.createParcela);

router.delete("/parcelas/:id", parcelaCtrl.deleteParcela);

router.put("/parcelas/:id", parcelaCtrl.updateParcela);

export default router;