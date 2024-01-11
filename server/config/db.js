const mongoose = require('mongoose')

const db =async () => {
   await mongoose.connect('mongodb://hacker:123@ac-zisgheu-shard-00-00.nguq63o.mongodb.net:27017,ac-zisgheu-shard-00-01.nguq63o.mongodb.net:27017,ac-zisgheu-shard-00-02.nguq63o.mongodb.net:27017/?ssl=true&replicaSet=atlas-po1wpv-shard-0&authSource=admin&retryWrites=true&w=majority/dark_forums').then(() => {
        console.log("database connected");
    }).catch((err) => {
        console.log("Eror in Dattaase", err);
    })
    mongoose.set('bufferCommands', false);

}


module.exports = db;




// mongoose.connect('mongodb://localhost:27017/dark_forums').then(() => {
//     console.log("database connected");
// }).catch((err) => {
//     console.log("Eror in Dattaase", err);
// })



