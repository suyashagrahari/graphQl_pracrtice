import { ApolloServer , gql} from "apollo-server";
// schema m hm type define lrte h 
// sbse phele qury hota h jisme hm btate h ki client ko server se kaun sa data chiaye
// ! exclela matory mark lgane se ye field mendatory ho jata h 

import { defaultTypeResolver } from "graphql"

const typeDefs = gql`
type Query{
    greet: String
    users: [User]
    user(_id:ID):User
    quotes:[Quotes]
    iquote(by:ID!):[Quotes]
}
type User{
    _id:ID!  
    firstName:String
    lastName:String
    email:String
    password:String
    quotes:[Quotes]
}
type Quotes{
    name:String
    by:ID
}

type Mutation{
    signupUser(userNew:UserInput!):User
}
input UserInput{
    firstName:String!,
    lastName:String!,
    email:String!,
    password:String!,
}
`


export default typeDefs