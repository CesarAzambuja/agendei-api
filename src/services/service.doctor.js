import repoDoctor from "../repositories/repository.doctor.js";

async function List(name) {

    const doctors = await repoDoctor.List(name);

    return doctors;
}

async function Insert(name, specialty, icon) {

    const doctor = await repoDoctor.Insert(name, specialty, icon);

    return doctor;
}

async function Update(name, specialty, icon, id_doctor) {

    const doctor = await repoDoctor.Update(name, specialty, icon, id_doctor);

    return doctor;
}

async function Delete(id_doctor) {

    const doctor = await repoDoctor.Delete(id_doctor);

    return doctor;
}

async function ListServices(id_doctor) {

    const serv = await repoDoctor.ListServices(id_doctor);

    return serv;
}


export default { List, Insert, Update, Delete, ListServices }