import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'Notes',
    }).then(() => {
        console.log("Database Connected!");
    }).catch((error) => {
        console.log(error);
    });
};