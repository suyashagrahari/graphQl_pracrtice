import { quotes, users } from "./fakedb.js"; 
// resolver ek brain hota h jo ki user ke dwara kiye gye query ko solve krta h mtlb ye ek brain hota h 
import { randomBytes} from "crypto"
import mongoose from "mongoose";
const User = mongoose.model("User") 
const resolvers = {
    // hme kisko resolve krna h query ko 
        Query :{
            greet : ()=>{
                return "hello dosto kaise h aap sb"
            },
            users:()=>users,
            quotes:()=>quotes,
            // chuki user khood root level h to iska koi parent nhi hoga 
            // ynha parent undefined milega 
            // aur dusre argument m _id milega jo hmne diya h 
            // user:(parent,args)=>users.find(user => user._id == args._id),
            // aur isko hme dusre tarike bhi likh skte h agrgument ko phele hi distructre krke 
            user:(parent,{_id})=>users.find(user => user._id == _id),
            iquote:(parent,arg)=>quotes.filter(quote=>quote.by==arg.by)
        },
        // graphql itna bhi smjhdar nhi h ki wo apne aap us user ne kitne quotes ikhe h use dikha dega uske liye hm User ko resolve krengye 
    
        User:{
            // ynha pr hme quotes ke function m parent recieve hota h 
            // is quotes ka parent kaun h user h islliye hme user recieve hoga 
            // fir hm filter method  lga kr sare quote ke _id ko user ke _id se match kra rhe h jo match hogya wo return kr dega 
    
            quotes:(user)=>quotes.filter(quote => quote.by == user._id)
        },

        Mutation:{
            // signupUserDummy:(_,{firstName,lastName,email,password})=>{
            //      const _id = randomBytes(5).toString("hex")
            //      users.push({
            //         _id,
            //         firstName:firstName,
            //         email:email,
            //         lastName:lastName,
            //         password:password 
            //      })
            //      return users.find(user=>user._id == _id)
            // }  


        //     signupUserDummy:(_,{userNew})=>{
        //         const _id = randomBytes(5).toString("hex")
        //         users.push({
        //            _id,
        //            ...userNew
        //         })
        //         return users.find(user=>user._id == _id)
        //    }

        signupUser:(_,{userNew})=>{
            
        }

        },

     }


     export default resolvers