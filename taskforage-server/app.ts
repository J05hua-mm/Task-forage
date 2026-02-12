import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const SECRET = "supersecret";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));


app.use(express.json());

app.post("/api/login",(req,res) => {
    const {email,password} = req.body;
    console.log('recived',req.body);
    

    if(email === "test@test.com" && password === "123456") {
        const token = jwt.sign({email},SECRET,{expiresIn:"1h"});
        return res.json({token});
    }

    return res.status(401).json({message:"Invalid credentials"});

    
})


export default app;