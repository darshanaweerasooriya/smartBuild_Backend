const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://darshana:Meekiri213@cluster0.bmrclmi.mongodb.net/SmartBuild?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ MongoDB connected successfully");
})
.catch((err) => {
    console.error("❌ MongoDB connection error:", err);
});

module.exports = mongoose;
