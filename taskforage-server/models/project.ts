import mongoose, {Schema, Document} from 'mongoose';

export interface IProject extends Document {
    title:string;
    description?:string;
    userId:string;
    createdAt:Date;
}

const ProjectSchema = new Schema<IProject>(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
        },
        userId:{
            type:String,
            required:true,
        },

    },
    {
        timestamps:true,
    }
);

export const Project = mongoose.models.Project || mongoose.model<IProject>('Project',ProjectSchema);