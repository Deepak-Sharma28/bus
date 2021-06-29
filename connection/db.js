const mongoose = require('mongoose');
const db = process.env.DB_URL;
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();




module.exports.connect = async() => {

    const uri = await mongod.getUri();
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    };
    await mongoose.connect(uri, mongooseOpts);
    // else {
    //     try {
    //         await mongoose.connect(db, {
    //             useNewUrlParser: true,
    //             useUnifiedTopology: true,
    //             useCreateIndex: true,
    //             useFindAndModify: false
    //         });
    //         console.log("database has connected successfully");
    //     } catch (err) {
    //         console.error(err.message);
    //         process.exit(1);
    //     }
    // }
};

//disconnect and close connection 


module.exports.closeDatabase = async() => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
};

// clear the db, remove all data

module.exports.clearDatabase = async() => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
};