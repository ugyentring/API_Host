// Connecting database with the backend

const mongoose = require("mongoose");

const connectDB = (uri)=>{
    return mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        writeConcern: {
            w: "majority",
            wtimeout: 0,
            provenance: "clientSupplied"
        },
    });
};

module.exports = connectDB;