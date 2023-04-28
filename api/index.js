import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.set("strictQuery",true)
try {
    await mongoose.connect(
      "mongodb+srv://carissaajao:olatunjiayo@cluster0.xa8k7.mongodb.net/?retryWrites=true&w=majority&dbname=fiverr-clone"
    );
    console.log("connected to db");
} catch (error) {
    console.log(error);
}

const PORT = 8000
app.listen(PORT,()=>{
    console.log(`"Server listening on port ${PORT}`);
})