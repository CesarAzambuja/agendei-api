import repoUser from "../repositories/repository.user.js";
import bcrypt from "bcrypt"
import jwt from "../token.js"



async function Insert(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 6);
    const user = await repoUser.Insert(name, email, hashPassword);
    user.token =jwt.CreateToken(user.id_user);

    return user;
}

async function Login(email, password) {


    // const hashPassword = await bcrypt.hash(password, 6);
    const user = await repoUser.ListByEmail(email);

    if(user.length == 0)
        return []
    else {
        if(await bcrypt.compare(password, user.password)){
            delete user.password
            user.token =jwt.CreateToken(user.id_user);
            return user;
        } else
        return []
    }
    return user
}

async function Profile(id_user) {

    const profile = await repoUser.Profile(id_user);

    return profile;
}

async function InsertAdmin(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 6);
    const user = await repoUser.InsertAdmin(name, email, hashPassword);
    user.token =jwt.CreateToken(user.id_user);

    return user;
}

async function LoginAdmin(email, password) {


    // const hashPassword = await bcrypt.hash(password, 6);
    const user = await repoUser.ListByEmailAdmin(email);

    if(user.length == 0)
        return []
    else {
        if(await bcrypt.compare(password, user.password)){
            delete user.password
            user.token =jwt.CreateToken(user.id_user);
            return user;
        } else
        return []
    }
    return user
}

async function List() {

    const user = await repoUser.List();

    return user;
}


export default { Insert, Login, Profile, InsertAdmin, LoginAdmin, List}