const express = require("express");
const app = express();
const cors = require("cors");
const Router = require("./routes/user.route");
require("./config/db");
const path = require("path");

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use("/users", Router);


// home route
app.get("/", (req, res) => {
    const filePath = path.join(__dirname,  "views", "index.html");
    res.status(200).sendFile(filePath);
});


// route not found
app.use((req, res, next) => {
    res.status(404).json({
        message: "route not found"
    });
});

// server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something broken"
    });
});


module.exports = app;