const mongoose = require('mongoose');

//DATABASE_URI=mongodb+srv://admin:pass12345@cluster0.qza6fel.mongodb.net/flashcarddb?retryWrites=true&w=majority&appName=Cluster0



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }   catch (err){
        console.error(err);
    }
}


module.exports = connectDB