const UserController = require ("../controllers/user");

const resolvers = {
    Query : {
       getUser : ()=>{
           console.log('Obteniendo usuario')
           return null;
       }
    },
    Mutation:{
        //User
        registerUser: (_,{input})=>UserController.registerUser(input),
        loginUser: (_,{input})=>UserController.loginUser(input),
    },
};

module.exports = resolvers;