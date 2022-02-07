const mongoose = require("mongoose");
require("dotenv").config({ path : ".env" });
const typeDefs = require('./gql/schema')
const resolvers = require('./gql/resolvers')
const { ApolloServer, ApolloError } = require("apollo-server")

mongoose.connect(
    process.env.BBDD,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
    (err, _)=>{
        if(err){
            console.log(err);
        }else{
            //console.log(res);
            server();
        }
    }
);

function server(){
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers,
    });

    serverApollo.listen().then(({url}) =>{
        console.log(`###############################`);
        console.log(`Servidor listo en la url ${url}`);
        console.log(`###############################`);
    });
}