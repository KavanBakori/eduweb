const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const signupSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    },
}); 



module.exports = { 
    Signup: mongoose.model('Signup', signupSchema),
    connectToDatabase: async () => {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/anilearn', {

            });
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    },
};