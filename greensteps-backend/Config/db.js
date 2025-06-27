const mongoose = require('mongoose');

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    }

    catch (err)
    {
        console.err(err.message)
        process.exit(1);
    }
}
