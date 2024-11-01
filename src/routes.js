import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import controllerAppointment from "./controllers/controller.Appointment.js";
import jwt from "./token.js"

const router = Router();

//Doctors
router.get("/doctors", jwt.ValidateToken, controllerDoctor.List);
router.post("/doctors", jwt.ValidateToken, controllerDoctor.Insert);
router.put("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Update);
router.delete("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Delete);
router.get("/doctors/:id_doctor/services", jwt.ValidateToken, controllerDoctor.ListServices);

//Users
router.post("/users/register", controllerUser.Insert);
router.post("/users/login", controllerUser.Login);
router.get("/users/profile", jwt.ValidateToken, controllerUser.Profile);


//Reservar
router.get("/appointments", jwt.ValidateToken, controllerAppointment.ListByUser)
router.post("/appointments", jwt.ValidateToken, controllerAppointment.Insert)
router.delete("/appointments/:id_appointment", jwt.ValidateToken, controllerAppointment.Delete)

//admin
router.post("/admin/register", controllerUser.InsertAdmin);
router.post("/admin/login", controllerUser.LoginAdmin);
router.get("/admin/appointments", jwt.ValidateToken, controllerAppointment.List)
router.get("/admin/appointments/:id_appointment", jwt.ValidateToken, controllerAppointment.ListById)
router.post("/admin/appointments", jwt.ValidateToken, controllerAppointment.InsertByAdmin)
router.put("/admin/appointments/:id_appointment", jwt.ValidateToken, controllerAppointment.EditByAdmin)
router.get("/admin/users", jwt.ValidateToken, controllerUser.List)





export default router;