const express = require("express");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const objcollection = require("./mongoserver/Mongoose");

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    const { email } = req.body;
    // console.log(req.body);
    const Data = req.body;

    try {
        const olduser = await objcollection.findOne({ email: email });
        // console.log(olduser);
        if (olduser!=null) {
            console.log(olduser);
            console.log("user exists");
            return res.send("userexits");
        }
        objcollection.create(Data);
        res.send("notexists");
    }
    catch (er) { console.log("err " + er) }
});

// app.get('/returndata', (req, res) => {
//     objcollection.find()
//         .then((data) => {
//             // console.log(data[0]);
//             res.send(data);
//         });
// })

app.post("/vrification", async (req, res) => {
    const { Email, pass } = req.body;
    try {
        const Olduser = await objcollection.findOne({ email: Email });
        // const oldpass = await objcollection.findOne({pass1: pass});
        // console.log(Olduser);
        if (Olduser === null) {
            // console.log(Olduser);
            console.log("user not exists");
            return res.send("notExisist");
        }
        else if(pass !== Olduser.pass1){
            console.log("passnotmatch");
            return res.send("passnotmatch");
        }
        console.log("login");
        return res.send("login");
    }
    catch (er) {
        console.log("er " + er);
    }
})

app.listen(9000, () => {
    console.log("server started at port 9000");
});


