const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb://localhost:27017/abscence_assignment', { useNewUrlParser: true, useUnifiedTopology: true });

    //Get the default connection
    let db = mongoose.connection;

    console.log(db)
    
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    
}


connectDB();
