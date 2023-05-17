import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = "mongodb+srv://ruhi14112001:fAHpmDyRyw9Tiz0q@cluster0.oy6vci5.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;