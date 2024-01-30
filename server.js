import { ApolloServer , gql} from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground
 } from "apollo-server-core";

import typeDefs from "./schemaGql.js";
import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";

const connection = async () =>{
   try {
       await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
       console.log("DB connected");
       
   } catch (error) {
       console.log(error)
       
   }
}

connection();


// import models here

import "./models/User.js"
import "./models/Quotes.js"



import resolvers from "./resolvers.js";

 const server = new ApolloServer({
    typeDefs ,

    // fir iske baad hme resolver paas krna hota h jiska name resolver hi rkha h hmne 
    
    resolvers,

    // ab hme playgorund chaiye jiske liye hm plugins use krengye 

    plugins :[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
 })

 server.listen().then(({url})=>{
    console.log(`server is ready at ${url}`);
 })