const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const http = require("http");

const port = 5325;
const hostname = "0.0.0.0";
const server = http.createServer(app);
// ====== SERVER LISTEING =======
server.listen(port, hostname, (req, res)=> {
  console.log(`http://${hostname}:${port}`);
});

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
  res.json({
data: user
  }) 
})

