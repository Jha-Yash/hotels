// let fs=require('fs');//ye import kraa file system module ko from node js ,it creates file and write the msg inside
// let os=require('os');// os user ,machine kai baare mai detail deta hai

// let user=os.userInfo();
// console.log(user);
// console.log(os);
// console.log(user.username);
//  fs.appendFile('greeting.txt','hi' + user.username,()=>{ console.log('file created')});
//  console.log(fs);

// //if server.js mai baar baar changes krne haii and uske output dekhne toh isntead of writing node Server.js run npx nodemon Server.js
// //ye khud he changes detect krke file run krdega and


//saare page ko server.js sai link krte hai using import
// let notes=require('./notes.js');
// console.log(notes);
// let age=notes.age;
// console.log(age);
// let addnumber=notes.add(age+10,age-10);
// console.log(addnumber);


// var _ =require('lodash');//ye ek liabraray hai Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
// // Lodash’s modular methods are great for:

// // Iterating arrays, objects, & strings
// // Manipulating & testing values
// // Creating composite functions

// let data=['person','person',1,1,2,3,true];
// let uniq = _.uniq(data);
// console.log(data);
// console.log(uniq);
// console.log(_.isString('person'));
// console.log(_.isString(3));
// console.log(_.isString(true));


//convert JSON to object
// const jsonString='{"name":"Yash","Age":21}';//JSON is a string
// console.log(jsonString);
// const jsonobject=JSON.parse(jsonString);//json to object 
// console.log(jsonobject);
// const json=JSON.stringify(jsonobject);//again object to json
// console.log(json);



const express = require('express') //import kraa
const app = express();//express ka blueprint app mai save krlia
const port = 3000 //ye port/room no. hai jo humne decide kiya hai
const db= require('./db');
require('dotenv').config();
const bodyParser=require('body-parser');
app.use(bodyParser.json());//req.body (requestbody)
const PORT=process.env.PORT||3000;//jb hum isko online push krengai toh possible hhai ki machine kuch apne port no. pai run krey is
//code ko toh isliye ye use krte ki ya toh apna kuch hai toh uspe krlo run ya use local port(3000)

app.get('/', (req, res) => { //get kai 2 parameter / agr koi bhi address kai baad enter krta hai toh usko data milega dusra para fn
    //fn mai 2 para request and respond
  res.send('welcome to our hotel')
})//get sirf present info laake de skta hai kuch modify ni kr skta

app.get('/chicken',(req,res)=>{
    res.send('sure sir ..i will bring your chicken in a minute')
})

app.get('/idli',(req,res)=>{
   let customize_idli ={
    name:'rava idli',
    size:'10 cm diameter',
    sambhar:true,
    chutney:false
   }
   res.send(customize_idli) //hume ek json string mil jayega
})
//server ko hume list of items dena pdta hai ki ye sb hum serve krengai or server bs utna he smjhta hai uske alava kuhc maango toh
//mna krdega 




 

//import the router files
const personroutes=require('./routes/personroutes');
app.use('/person',personroutes); //ab agr log /person pai hit krengai toh person routes pai jayega fir dekhega api call kya hai uske
//acc fn perform ... humne person ka saara api calls routes folder mai person file mai bhej diya or isse access krlia ye code ki
//  readability bdhata hai

const menuroutes=require('./routes/menurotes');
app.use('/menuitem',menuroutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) //direct app.listen(3000) bhi kr skte to keep server alive,but to track server zinda hai ya nhi ek fn bnaa liya jo inform krega
//Ctrl+c server dead ho jaata usse ,usko again restart kai liye node server.js

//POSTMAN use krte hai as a frontend ka reference like sirf backend pai kaam krrehy toh kese api milega data save update del hoga 
// ye postman kai through dekhte agr frontend bna rkha hota toh details login krte or jese he save krte vo api generate krta hai jisse
//database mai data save ho jaata hai