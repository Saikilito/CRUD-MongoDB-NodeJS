const mongoose  = require('mongoose');

let db;

module.exports = function Conecction(){
    if(!db){
        db = mongoose.createConnection('mongodb://localhost/crub-example', {useNewUrlParser: true})
    }

    return db;
}