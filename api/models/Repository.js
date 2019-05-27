import mongoose from 'mongoose';

const repoSchema = mongoose.Schema({
    name: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    contributors: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        commits: Number
    }]
})

const Repository =  mongoose.model('Repository', repoSchema);

export default Repository;
