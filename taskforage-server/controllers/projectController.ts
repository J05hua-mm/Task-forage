import {Request,Response} from "express";
import { Project } from "../models/Project";

export const createProject = async (req:any, res:Response) => {

try {
    const {title,description} = req.body;

    const project = await Project.create({
        title,
        description,
        userId:req.user.email
    });

    res.status(201).json(project);
}
catch (error) {
    res.status(500).json({message:"server error"});
}

};

export const getProject = async (req:any,res:Response) => {

    try {

        const projects = await Project.find({
      userId: req.user.email
    }).sort({ createdAt: -1 });

    res.json(projects);


    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }

}

export const deleteProject = async (req:any,res:Response) => {

   try {

     const project = await Project.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.email
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.json({message:"peoject deleted"});

   }
   catch(error) {
    res.status(500).json({ message: "Server error" });
   }

}

