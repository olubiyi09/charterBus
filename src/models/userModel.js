import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your name"],
        unique: true
    },

    email: {
        type: String,
        required: [true, "Please enter your email address"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Please enter password"],
    },

}, {
    timestamps: true,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
