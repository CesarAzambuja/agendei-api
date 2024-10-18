import repoAppointment from "../repositories/repository.appointment.js";

async function ListByUser(id_user) {

    const appointments = await repoAppointment.ListByUser(id_user);

    return appointments;
}

async function Insert(id_user, id_doctor, id_service, booking_date, booking_hour) {

    const appointment = await repoAppointment.Insert(id_user, id_doctor, id_service, booking_date, booking_hour);

    return appointment;
}

export default { ListByUser, Insert }