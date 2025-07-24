const  mongoose  = require('mongoose');

//define the mongo db connection url
const mongoUrl='mongodb://localhost:27017/hotels'//replace mydatabase with your database name


//setup MongoDB connection
mongoose.connect(mongoUrl,{
    useNewUrlParser:true, //must
    useUnifiedTopology:true //must

})


//get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection

const db=mongoose.connection;

//define event listener for database connection
db.on('connected',()=>{//ye connected error disconnected ye already pre defined hai
    console.log('connected to mongodb server');
});
db.on('error',(err)=>{
    console.log('mongodb connection error:',err);
});
db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});


//Export the database connection
module.exports=db;//db(object) represent MongoDB connection