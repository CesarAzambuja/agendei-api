import serviceDoctor from "../services/service.doctor.js";

async function List(req, res) {

    const name = req.query.name;
    const doctors = await serviceDoctor.List(name);

    res.status(200).json(doctors);
}

async function Insert(req, res) {

        const {name, specialty, icon} = req.body;

        const doctor = await serviceDoctor.Insert(name, specialty, icon);

    res.status(201).json(doctor)
    
}

async function Update(req, res) {

    const id_doctor = req.params.id_doctor;
    const {name, specialty, icon} = req.body;

    const doctor = await serviceDoctor.Update(name, specialty, icon, id_doctor);

res.status(200).json(doctor)

}

async function Delete(req, res) {

    const id_doctor = req.params.id_doctor;

    const doctor = await serviceDoctor.Delete(id_doctor);

res.status(200).json(doctor)

}

async function ListServices(req, res) {

    const id_doctor = req.query.id_doctor;
    const serv = await serviceDoctor.ListServices(id_doctor);

    res.status(200).json(serv);
}



export default { List, Insert, Update, Delete, ListServices }