const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./models/Register");

const app = express();
app.use(express.json());
app.use(cors());

let mongoURL =
  "mongodb+srv://FrancescaGalang:zIxWkoXIOgieSd4B@cluster0.qywthgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURL);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

app.post("/signup", (req, res) => {
  RegisterModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
