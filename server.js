const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) =>{
    res.send({username: "bamkachu", password: "03210804"});
});

app.listen(8080, () =>{
    console.log("server runing on port 8080");
});

