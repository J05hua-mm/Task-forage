import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { authenticate } from './middleware/auth';
import { Project } from './models/project';
import morgan from 'morgan';
import projectRoutes from "./routes/projectRoutes";

const SECRET = "supersecret";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));


app.use(express.json());

app.use(morgan('combined'));

app.use("/api/projects", projectRoutes);

app.get('/api/profile',authenticate,(req,res) => {
    res.json({
        message:"Protected data",
        user:(req as any).user
    })
})

app.post("/api/login",(req,res) => {
    const {email,password} = req.body;
    

    if(email === "test@test.com" && password === "123456") {
        const token = jwt.sign({email},SECRET,{expiresIn:"1h"});
        return res.json({token});
    }

    return res.status(401).json({message:"Invalid credentials"});

    
});


app.put('/api/rojects/:id',authenticate,async (req,res) => {

    try {

    const {title,description} = req.body;
    
    const project = await Project.findOneAndUpdate(
    {
    _id:req.params.id,
    userId:(req as any).user.email,
    },
    {title,description},
    {new:true}
    );

    if(!project) {
        return res.status(404).json({message:"Project not found"});
    }

    res.json(project);

    }
    catch (error) {
        res.status(500).json({message:"Server error"});
    }

})

export default app;