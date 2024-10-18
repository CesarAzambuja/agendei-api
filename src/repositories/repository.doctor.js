import { query } from "../database/sqlite.js";

async function List(name) {

    let filter = []

    let sql = "select * from doctors ";
    if(name){
        sql = sql + "where name like ? ";
        filter.push("%" + name + "%")
    }
    sql = sql + "order by name"

    const doctors = await query(sql, filter);

    return doctors;
}

async function Insert(name, specialty, icon){
    let sql = `INSERT INTO doctors (name, specialty, icon) VALUES (?, ?, ?)
    returning id_doctor`;

    const doctor = await query(sql, [name, specialty, icon]);

    return doctor[0];
}

async function Update(name, specialty, icon, id_doctor){
    let sql = `update doctors set name = ?, specialty = ?, icon = ? where id_doctor = ?`;

    await query(sql, [name, specialty, icon, id_doctor]);

    return {id_doctor};
}

async function Delete(id_doctor){
    let sql = `delete from doctors where id_doctor = ?`;

    await query(sql, [id_doctor]);

    return {id_doctor};
}

async function ListServices(id_doctor) {

    

    let sql = `select d.id_service, s.description, d.price 
    from doctors_services d
    join services s on s.id_service = d.id_service
    where d.id_doctor = 7 order by s.description` ;
    
    

    const serv = await query(sql, [id_doctor]);

    return serv;
}


export default { List, Insert, Update, Delete, ListServices }