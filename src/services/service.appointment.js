import repoAppointment from "../repositories/repository.appointment.js";

async function ListByUser(id_user) {

    const appointments = await repoAppointment.ListByUser(id_user);

    return appointments;
}

async function Insert(id_user, id_doctor, id_service, booking_date, booking_hour) {

    const appointment = await repoAppointment.Insert(id_user, id_doctor, id_service, booking_date, booking_hour);

    return appointment;
}

async function Delete(id_user, id_appointment) {

    const appointment = await repoAppointment.Delete(id_user, id_appointment );

    return appointment;
}

export default { ListByUser, Insert, Delete }