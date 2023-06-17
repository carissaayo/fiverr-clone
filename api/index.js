import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";



// Routes
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";

// Middlewares
const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173",credential:true}))
app.use((err,req,res,next) => {
    const errorStatus = err.status || 500 ;
    const errorMessage = err.message || "Something went wrong"
    res.status(errorStatus).send(errorMessage)
})


dotenv.config();
mongoose.set("strictQuery",true)





const connection=async ()=>{

    try {
        await mongoose.connect(
            process.env.MONGO_URI
            );
            console.log("connected to db");
        } catch (error) {
            console.log(error);
        }
    }


app.use("/api/users", userRoute);   
app.use("/api/auth", authRoute);   
app.use("/api/gigs", gigRoute);   
app.use("/api/orders", orderRoute);   
app.use("/api/conversations", conversationRoute);   
app.use("/api/messages", messageRoute);   
app.use("/api/reviews",reviewRoute)   


const PORT = 8000
app.listen(PORT,()=>{
    connection()
    console.log(`"Server listening on port ${PORT}`);
})