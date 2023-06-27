import { Router } from "express";
import * as fitoCtrl from "../controllers/fitos.controller";

const router = Router();

router.get("/fitos", fitoCtrl.getFitos);

router.get("/fitos/:id", fitoCtrl.getFito);

router.post('/fitos', fitoCtrl.createFito);

router.delete("/fitos/:id", fitoCtrl.deleteFito);

router.put("/fitos/:id", fitoCtrl.updateFito);

export default router;