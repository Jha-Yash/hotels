const  mongoose  = require('mongoose');

//define the mongo db connection url
//const mongoUrl='mongodb://localhost:27017/hotels'//replace mydatabase with your database name
//const mongoUrl='mongodb+srv://Yashjha:Yashjha@88@cluster0.gs4kipw.mongodb.net/'//online database(atlas) sai setup krega ye url 
//uppr vaala local database sai krta thaa setup.ye bhi wrong url bcz @ ni consider krta ye toh here is the correct url with data
//base name
const mongoUrl = 'mongodb+srv://Yashjha:Yashjha%4088@cluster0.gs4kipw.mongodb.net/hotels?retryWrites=true&w=majority';
//if local db dubara acces krna hou toh idhr sai comment htao or url local vaala load kro or online vaala comment out
//local sai local vaala url chla kai data get krlo fir online url chla kai data post krdo tb atlas pai data visible ho jayega.abhi
//udhr no data save bcz kuch post ni kiya humne ...ek kra yash(person) manager vala

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