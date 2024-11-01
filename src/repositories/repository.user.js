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


async function Profile(id_user){
    let sql = `select id_user, name, email  from users  where id_user = ?`;

    const user = await query(sql, [id_user]);

    return user[0]
}  

async function InsertAdmin(name, email, password){
    let sql = `INSERT INTO admins (name, email, password) VALUES (?, ?, ?)
    returning id_admin`;

    const user = await query(sql, [name, email, password]);

    return user[0];
}

async function ListByEmailAdmin(email){
    let sql = `select * from admins where email = ?`;

    const user = await query(sql, [email]);

    if(user.length == 0)
        return [];
    else 
    return user[0];
}   

async function List(){
    let sql = `select id_user, name, email  from users order by name `;

    const users = await query(sql, []);

    return users
}  


export default { Insert, ListByEmail, Profile, InsertAdmin, ListByEmailAdmin, List }