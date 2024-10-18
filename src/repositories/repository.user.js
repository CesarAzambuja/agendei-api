import { query } from "../database/sqlite.js";


async function Insert(name, email, password){
    let sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)
    returning id_user`;

    const user = await query(sql, [name, email, password]);

    return user[0];
}

async function ListByEmail(email){
    let sql = `select * from users where email = ?`;

    const user = await query(sql, [email]);

    if(user.length == 0)
        return [];
    else 
    return user[0];
}   

export default { Insert, ListByEmail }