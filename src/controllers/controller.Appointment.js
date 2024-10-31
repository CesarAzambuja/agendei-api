import serviceAppointment from "../services/service.appointment.js";


async function ListByUser(req, res) {

    const id_user = req.id_user;
    const appointments = await serviceAppointment.ListByUser(id_user);

    res.status(200).json(appointments);
}



async function Insert(req, res) {

    const id_user = req.id_user;
    const {id_doctor, id_service, booking_date, booking_hour} = req.body;

        const appointment = await serviceAppointment.Insert(id_user, id_doctor, id_service, booking_date, booking_hour);

    res.status(201).json(appointment)

}

async function Delete(req, res) {

    const id_user = req.id_user
    const id_appointment = req.params.id_appointment;

    const appointment = await serviceAppointment.Delete(id_user, id_appointment);

res.status(200).json(appointment)

}


async function List(req, res) {

    const dt_start = req.query.dt_Start
    const dt_end = req.query.dt_End
    const id_doctor = req.query.id_doctor

    const appointments = await serviceAppointment.List(dt_start, dt_end, id_doctor);

    res.status(200).json(appointments);
}

export default { ListByUser, Insert, Delete, List }