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


const suggestionSchema = new Schema({
    topicname: {
        type: String,
        required: true
    },
    topicdes: {
        type: String,
        required: true
    }
});


const profileSchema = new Schema({
    username: {
        type: String,
    },
    // fullname: {
    //     type: String,
    // },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    occupation: {
        type: String,
    },
})


const PickedtopicsSchema = new Schema({
    Educatoremail: {
        type: String,
    },
    picked: {
        type: Boolean,
    },
    topicname: {
        type: String,
    },
    topicdes: {
        type: String,
    }
})



const UploadvideoSchema = new Schema({
    uploadname: {
        type: String,
    },
    uploaddes: {
        type: String,
    },
    uploadtime: {
        type: String,
    },
    videolink: {
        type: String,
    },
})


module.exports = {
    Signup: mongoose.model('Signup', signupSchema),
    Suggestion: mongoose.model('suggestion', suggestionSchema),
    Profile: mongoose.model('profile', profileSchema),
    Pickedtopic: mongoose.model('Pickedtopic', PickedtopicsSchema),
    Uploadvideo: mongoose.model('uploadvideo', UploadvideoSchema),
    connectToDatabase: async () => {
        try {
            await mongoose.connect('mongodb+srv://kavan2269:r0M4hRbLLZExonnO@kavan.ybbof1e.mongodb.net/?retryWrites=true&w=majority&appName=Kavan', {

            });
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    },
};