const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const port = 3000;

app.use(express.json());
app.use(cors());

const db_url = `mongodb+srv://anas:anas@food.t6wubmw.mongodb.net/?retryWrites=true&w=majority&appName=food`;

mongoose.connect(db_url)
.then(db => console.log("database connected.."))
.catch(err => console.log(err))

const userSchema = mongoose.Schema({
   name: String,
    email: String,
    password: String,
    confirmPassword: String
})
const userModel = mongoose.model("userModel", userSchema);

app.get("/", (req, res) => {
  res.send("blog backend...... ") ;
});

app.post("/register", async(req, res)=>{
  let obj = req.body;
  let user = await userModel.create(obj);
  console.log(user);
})

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
})
