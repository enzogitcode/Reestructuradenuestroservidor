import mongoose from 'mongoose'
mongoose.connect ("mongodb+srv://coder:codercoder1@cluster0.j9ubv2z.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
.then (()=> console.log ("Conectados a la Db"))
.catch((error)=> console.log("No se pudo conectar a la DB", error))