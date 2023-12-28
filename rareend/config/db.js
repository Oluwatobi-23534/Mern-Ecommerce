import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Everything is connected 😁`);
    } catch {
        console.error(`ERROR: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;