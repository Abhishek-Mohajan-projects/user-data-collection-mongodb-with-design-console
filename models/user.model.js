const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    id : {
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    age : {
        type : Number,
        require : true
    },
    image : {
        type : String,
        require: [true, "user image is required"]
    }
});

module.exports = mongoose.model('User', usersSchema);