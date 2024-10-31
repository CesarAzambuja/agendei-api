import serviceUser from "../services/service.user.js";



async function Insert(req, res) {

        const {name, email, password} = req.body;

        const user = await serviceUser.Insert(name, email, password);

    res.status(201).json(user)
}

async function Login(req, res) {

    const {email, password} = req.body;

    const user = await serviceUser.Login(email, password);

    if(user.length == 0) {
        res.status(401).json({error: "Email ou senha inválida!"});
    } else {
        res.status(200).json(user);
    }


}

async function Profile(req, res) {

    const id_user = req.id_user;
    const profile = await serviceUser.Profile(id_user);

    res.status(200).json(profile);
}


async function InsertAdmin(req, res) {

    const {name, email, password} = req.body;

    const user = await serviceUser.InsertAdmin(name, email, password);

res.status(201).json(user)
}

async function LoginAdmin(req, res) {

const {email, password} = req.body;

const user = await serviceUser.LoginAdmin(email, password);

if(user.length == 0) {
    res.status(401).json({error: "Email ou senha inválida!"});
} else {
    res.status(200).json(user);
}


}




export default { Insert, Login, Profile, InsertAdmin, LoginAdmin}