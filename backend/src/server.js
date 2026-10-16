console.log("hey from the server");

import express from "express";
// import dotenv from "dotenv";

import path from "path";

import {ENV} from "./lib/env.js";

import { fileURLToPath } from "url";

const __filename =fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);


// dotenv.config();
const app=express();

// console.log(ENV.PORT);
// console.log(ENV.DB_URL);

const _dirname= path.resolve()

app.get("/health",(req,res)=>{
    // res.status(200).json({msg:"success from api"})
     res.status(200).json({msg:"api is up and running "});
});
   
app.get("/book",(req,res)=>{
    // res.status(200).json({msg:"success from api"})
     res.status(200).json({msg:"This is the books endpoint "});
});

// app.listen(ENV.PORT,()=>console.log("Server is running on port 3000"));

//make   our  app  ready for deployment 
if(ENV.NODE_ENV === "production"){
   app.use(express.static(path.join(__dirname,"../../frontend/dist")));
    // app.use(express.static(path.json(__dirname,"../../frontend/dist")));

  app.get("/{*any}",(req,res)=>{
    res.sendFile(path.join(__dirname,"../../frontend","dist","index.html"));
  }); 
}


app.listen(ENV.PORT,()=>console.log("Server is running on port:",ENV.PORT));

















