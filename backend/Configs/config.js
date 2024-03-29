const mongoose = require("mongoose");

// DB URL Local
const dbURL = process.env.DB_URL_Local;

const conCreate = mongoose.createConnection(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log("DB Connection error 1");
});

const conConnect = mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log("DB Connection error");

});

module.exports = {
    conConnect, conCreate
}