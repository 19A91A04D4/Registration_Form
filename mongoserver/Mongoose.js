const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin:nancy123@cluster0.wcmdkpe.mongodb.net/mr_hanu45")
    .then(() => console.log("connected successfully"))
    .catch((er) => { console.log("Not connected to monggose" + er) });

const Objectscma = new mongoose.Schema(
    {
        fname: {
            type: String,

        },
        lname: {
            type: String,

        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        pass1: {
            type: String,
            required: true
        },
    }
)

const objcollection = mongoose.model('objcollection', Objectscma);


module.exports = objcollection;