const { gql } = require("apollo-server");

const typeDefs = gql `
    
    type User {
        id:ID
        tx_first_name:String
        tx_p_last_name:String
        tx_m_last_name:String
        tx_username:String
        tx_email:String
        tx_avatar:String
        tx_site_web:String
        tx_password:String
        dt_created:String
    }

    input UserInput {
        tx_first_name: String!
        tx_username: String!
        tx_email:String!
        tx_password:String!
    }
    type Token {
        token:String
    }
    input LoginInput {
        tx_email:String!
        tx_password:String!
    }

    type Query 

    type Query {
        # User
        getUser: User
    }

    type Mutation{
        #User
        registerUser(input: UserInput): User
        loginUser(input:LoginInput): Token
    }
`;

module.exports = typeDefs;