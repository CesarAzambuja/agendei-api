import repoUser from "../repositories/repository.user.js";
import bcrypt from "bcrypt"



async function Insert(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 6);
    const user = await repoUser.Insert(name, email, hashPassword);

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
            return user;
        } else
        return []
    }
    return user
}


export default { Insert, Login  }