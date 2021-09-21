const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema({
    name: {
        type: String,
        required: [true, "Project name is required!"],
        minlength: [2, "Must be longer than 2 characters!"],
        unique: true
    },
    imageURL: { type: String },
    patterLocation: { type: String },
    description: { type: String },
    hookSize: { type: String },
    yarnInfo: { type: String },
    completed: {
        type: Boolean,
        default: false
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
},
    { timestamps: true });

module.exports = mongoose.model('projects', Project);
