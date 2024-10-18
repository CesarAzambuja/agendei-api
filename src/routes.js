import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import jwt from "./token.js"

const router = Router();

//Doctors
router.get("/doctors", jwt.ValidateToken, controllerDoctor.List);
router.post("/doctors", jwt.ValidateToken, controllerDoctor.Insert);
router.put("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Update);
router.delete("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Delete);

//Users
router.post("/users/register", controllerUser.Insert);
router.post("/users/login", controllerUser.Login);

//Reservar

//Services


export default router;