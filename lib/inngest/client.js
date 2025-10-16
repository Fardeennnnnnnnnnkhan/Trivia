import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: "Trivia" ,
     name:"Trivia" , 
    credentials : {
        gemini : process.env.GOOGLE_API_KEY
    } 
});