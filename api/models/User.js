import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    fullname: String,
    avatar_url: String,
})

const User =  mongoose.model('User', userSchema);

export default User;
