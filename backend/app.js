const keys = require("./key");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongodb = require("mongodb").MongoClient;
const { data } = require("jquery");

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

app.get("/getTableData", (req, res) =>
{
    db.collection("alumni-data").find({}).toArray((error, data) =>
    {
        if (error) {
            res.status(403).json("Error in Finding");
        } else {
            res.json(data);
        }
    });
});

app.post("/addTableData", (req, res) =>
{
    console.log(req.body);
    req.body._id = new Date().getTime();

    db.collection("alumni-data").insertOne(req.body, (error) =>
    {

        if (error) {
            res.status(403).json("Error in inserting table data");
        } else {
            res.json("Table Data Added Succesfull!!!!");
        }
    });
});

app.get("/getTableData/:userid", (req, res) =>
{
    console.log(req.params.userid);
    db.collection("alumni-data").find({ _id: parseInt(req.params.userid) }).toArray((error, data) =>
    {
        if (error) {
            res.status(403).json("Error in Finding");
        } else {
            res.json(data);
        }
    });
});

app.post("/editTableData", (req, res) =>
{
    updateData = {
        Name: req.body.Name,
        Email: req.body.Email,
        cId: req.body.cId,
        Course_Dept: req.body.Course_Dept,
        College: req.body.College,
        Phone: req.body.Phone,
        Year: req.body.Year
    }
    db.collection("alumni-data").updateOne({ _id: req.body._id }, { $set: updateData }, (error) =>
    {
        if (error) {
            res.status(403).json("Error in Editing");
        } else {
            res.json("Table Editing Succesfull!!!!");
        }
    });
});

app.get("/deleteTableData/:userid", (req, res) =>
{
    db.collection("alumni-data").deleteOne({ _id: parseInt(req.params.userid) }, (error, data) =>
    {
        if (error) {
            res.status(403).json("Error in deleting");
        } else {
            res.json("Deletion Success!!!");
        }
    });
});

app.get("/search/:search?", (req, res) =>
{
    if (req.params.search != undefined) {
        var s = new RegExp(req.params.search, 'i');
        var se = { Name: s };
    } else {
        var se = null;
    }
    db.collection("alumni-data").find(se).toArray((error, data) =>
    {
        if (error) {
            res.status(403).json("Error in Finding");
        } else {
            res.json(data);
        }
    });
});

app.get("/isAdmin/:id", (req, res) =>
{
    return res.json((Number(req.params.id)) === keys.admin_id);
});

app.listen(3000, () =>
{
    console.log("Server is running");
});