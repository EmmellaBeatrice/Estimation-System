const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {UserRolesSchema, required: true},
    date: {
        type: Date,
        default: Date.now
    }
});

//roles schema
const UserRolesSchema = new Schema({
    developer : {type: String},
    projectManager: {type: String}
})


//defining user model
 const User = mongoose.model('User', UserSchema);

 module.exports = User;