const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const user = require("../models/user");
const jwt = require("jsonwebtoken");

function createToken(user,SECRET_KEY,expiresIn){
    const {id,tx_first_name,tx_email,tx_username} = user;
    const payload={
        id,
        tx_first_name,
        tx_email,
        tx_username
    }
    let token = jwt.sign(payload,SECRET_KEY,{expiresIn});
    return token;
}

async function registerUser(input){
    const newUser = input;
    newUser.tx_email = newUser.tx_email.toLowerCase();
    newUser.tx_username = newUser.tx_username.toLowerCase();

    const {tx_email,tx_username,tx_password} = newUser;

    //Validamos email sin usar
    const foundEmail = await User.findOne({tx_email});
    if(foundEmail) throw new Error("El email está en uso");

    //Validamos username sin usar
    const foundUserName = await User.findOne({tx_username});
    if(foundUserName) throw new Error("El nombre de usuario está en uso");

    //Encriptar
    const salt = await bcryptjs.genSaltSync(10);
    newUser.tx_password=await bcryptjs.hash(tx_password,salt);
    
    try{
        const user = new User(newUser);
        user.save();
        return user;
    }catch(err){
        console.log(err)
    }
};

async function loginUser(input){
    const {tx_email,tx_password}=input;

    const userFound = await user.findOne({tx_email : tx_email.toLowerCase()});
    if(!userFound) throw new Error ("Error en el email o contraseña");

    const passwordSuccess = await bcryptjs.compare(tx_password,userFound.tx_password);
    if(!passwordSuccess) throw new Error ("Error en el email o contraseña");

    let jwtToken = createToken(userFound,process.env.SECRET_KEY,"24h");

    return{
        token: jwtToken
    }
}

module.exports = {
    registerUser,
    loginUser
};