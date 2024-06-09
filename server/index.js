const axios = require("axios")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./models/Register");
const ListingModel = require("./models/Listings");

const app = express();
app.use(cors());
app.use(express.json());

const databaseUrl = process.env.CONNECTION_STRING;
mongoose.connect(databaseUrl);

app.get("/getListings", (req, res) => {
  ListingModel.find()
    .then((listings) => res.json(listings))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({ message: "Success", accountType: user.accountType }); //Include account type in response
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

app.get("/ping", (req, res) => {
  console.log("pinged");
  res.send("pong");
});

//self-ping function to keep the server awake
function keepServerAwake() {
  setInterval(async () => {
    try {
      await axios.get("https://rentease-jhzd.onrender.com/ping");
      console.log("Self-ping successful");
    } catch (err) {
      console.error("Self-ping failed: ", err.message);
    }
  }, 780000); //ping every 13 minutes
}

app.listen(3001, () => {
  console.log("server is running on port 3001");
  keepServerAwake();
});
