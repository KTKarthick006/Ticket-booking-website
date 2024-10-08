import mongoose from 'mongoose';

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log('Database Connected');
    } catch (error) {
        console.error(error);
    }
};

export default ConnectDb;

