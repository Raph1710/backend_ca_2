const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const port = 3000;

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});

const Signup = require("./signup_schema");
app.get("/signup", async (req, res) => {
    const { username, email, password, dateofbirth } = req.body;
    const signup = new Signup({ username, email, password, dateofbirth });
    if(!signup.username){
        return res.status(400).send("username cannot be empty");
    }
    if(!signup.email){
        return res.status(400).send("email is required");
    }
    if(signup.password.length<8 || signup.password.length>16){
        return res.status(400).send("password must be between 8 and 16 characters");
    }
    if(!signup.dateofbirth){
        return res.status(400).send("date of birth is required");
    }
    res.send(signup);
});
