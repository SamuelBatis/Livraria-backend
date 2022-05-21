import mongoose from "mongoose";

mongoose.connect("mongodb+srv://sam:123@cluster0.hp9t5.mongodb.net/livraria-node");

let db = mongoose.connection;

export default db;