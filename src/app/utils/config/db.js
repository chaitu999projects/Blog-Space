import mongoose from "mongoose";

export const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected Successfully!");
    } catch (error) {
        console.log("DB Not Connected, error:", error);
    }
};
