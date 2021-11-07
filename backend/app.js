const keys = require("./key");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongodb = require("mongodb").MongoClient;

const app = express();

app.use(cors());

app.use(bodyparser.json());

mongodb.connect("mongodb+srv://" + keys.urlname + ":" + keys.urlpass + "@cluster0.tnyqb.mongodb.net/" + keys.database + "?retryWrites=true&w=majority", (error, result) =>
{
    if (error) {
        console.log("Database Not Connected");
    } else {
        db = result.db("KnowYourAlumni");
        console.log("Database is Connected");
    }
});

app.get("/", (req, res) =>
{
    res.send("<h1>hi I am working</h1>");
});

app.post("/register", (req, res) =>
{
    console.log(req.body);
    req.body._id = new Date().getTime();

    db.collection("user").insertOne(req.body, (error) =>
    {

        if (error) {
            res.status(403).json("Error in inserting");
        } else {
            res.json("User Registration Succesfull!!!!");
        }
    });

});

app.post("/login", (req, res) =>
{

    console.log(req.body);
    db.collection("user").find({ uemail: req.body.uemail, upassword: req.body.upassword }).toArray((error, data) =>
    {
        if (error) {
            res.status(403).json("Error in Finding");
        } else {
            res.json(data);
        }
    })

});

app.post("/editUser", (req, res) =>
{
    console.log(req.body);
    updateData = {
        uname: req.body.uname,
        uemail: req.body.uemail,
        upassword: req.body.unpassword,
        ucol: req.body.ucol,
        uphone: req.body.uphone
    }
    db.collection("user").updateOne({ _id: req.body._id }, { $set: updateData }, (error) =>
    {
        if (error) {
            res.status(403).json("Error in Editing");
        } else {
            res.json("User Editing Succesfull!!!!");
        }
    });
});

app.post("/getUser", (req, res) =>
{
    db.collection("user").find({ _id: req.body._id }).toArray((error, data) =>
    {
        if (error) {
            res.status(403).json("Error in Finding");
        } else {
            res.json(data);
        }
    });
});

app.listen(3000, () =>
{
    console.log("Server is running");
});