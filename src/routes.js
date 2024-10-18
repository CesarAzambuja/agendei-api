import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";

const router = Router();

//Doctors
router.get("/doctors", controllerDoctor.List);
router.post("/doctors", controllerDoctor.Insert);
router.put("/doctors/:id_doctor", controllerDoctor.Update);
router.delete("/doctors/:id_doctor", controllerDoctor.Delete);

//Users
router.post("/users/register", controllerUser.Insert);
router.post("/users/login", controllerUser.Login);

//Reservar

//Services


export default router;