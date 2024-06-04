import mongoose from "mongoose";

const schema = new mongoose.Schema({
    usuario: String,
    password: String,
    rol: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
})

const UserModel= mongoose.model("usuarios", schema);

export default UserModel;