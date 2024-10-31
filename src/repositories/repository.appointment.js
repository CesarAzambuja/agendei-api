import { query } from "../database/sqlite.js";

async function ListByUser(id_user) {


let sql = `select a.id_appointment, s.description as service, d.name as doctor, d.specialty, a.booking_date, a.booking_hour, u.name as paciente, ds.price

from appointments a

join doctors d on d.id_doctor = a.id_doctor
join services s on s.id_service = a.id_service
join users u on u.id_user = a.id_user
join doctors_services ds on ds.id_doctor = a.id_doctor and ds.id_service = a.id_service


where a.id_user = ? order by a.booking_date, a.booking_hour` ; 
    

    const appointments = await query(sql,[id_user]);

    return appointments;
} 

async function Insert(id_user, id_doctor, id_service, booking_date, booking_hour){
    let sql = `INSERT INTO appointments (id_user, id_doctor, id_service, booking_date, booking_hour)
VALUES (?, ?, ?, ?, ?) returning id_appointment;`;

    const appointment = await query(sql, [id_user, id_doctor, id_service, booking_date, booking_hour]);

    return appointment;
}

async function Delete(id_user, id_appointment){
    let sql = `delete from appointments where id_appointment = ? and id_user = ?`;

    await query(sql, [id_appointment, id_user]);

    return {id_appointment};
}

async function List(dt_start, dt_end, id_doctor) {

    let myFilter = []

    let sql = `select a.id_appointment, s.description as service, d.name as doctor, d.specialty, a.booking_date, a.booking_hour, u.name as paciente, ds.price
    
    from appointments a
    
    join doctors d on d.id_doctor = a.id_doctor
    join services s on s.id_service = a.id_service
    join users u on u.id_user = a.id_user
    join doctors_services ds on ds.id_doctor = a.id_doctor and ds.id_service = a.id_service
    
    where a.id_appointment > 0 ` ; 
        
    if(dt_start){
        myFilter.push(dt_start)
        sql = sql + "and a.booking_date >= ? "
    }

    if(dt_end){
        myFilter.push(dt_end)
        sql = sql + "and a.booking_date <= ? "
    }

    if(id_doctor){
        myFilter.push(id_doctor)
        sql = sql + "and a.id_doctor = ?"
    }

    sql = sql + " order by a.booking_date, a.booking_hour"
    
        const appointments = await query(sql, myFilter);
    
        return appointments;
    } 


export default { ListByUser, Insert, Delete, List}