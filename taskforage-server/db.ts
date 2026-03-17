import mongoose from 'mongoose';

export const connectDB = async () => {

    try {
     await mongoose.connect('mongodb://127.0.0.1:27017/taskforage');
     console.log("Mongodb connected");
    }
    catch(error) {
     console.error("Mongodb connection error", error);
     process.exit(1);
    }

}