import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [
            /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
            "Email is not valid"
        ]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    fullname: {
        type: String,
        required: [true, "Fullname is required"],
        minLenght: [3, "Fullname must be at least 3 characters"],
        maxLenght: [50, "Fullname must be at most 50 characters"]
    },
})

const User = models.User || model('User', UserSchema)
export default User;