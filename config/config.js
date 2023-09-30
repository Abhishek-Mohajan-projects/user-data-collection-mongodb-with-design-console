require("dotenv").config();

const dev = {
    app : {
        port : process.env.PORT || 5000
    },
    db : {
        url : process.env.DB_URL || "mongodb://localhost:5000/userDb"
    }
};

module.exports = dev;