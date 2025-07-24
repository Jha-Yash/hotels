const mongoose=require('mongoose');


// define the person schema
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],//enum mai humne user ko 3 option diye work type kai agr isme sai kuch to select vrna 
        //accept nhi krengai or work fill krna mandatory krdiya humne
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})


//create person model
const person=mongoose.model('person',personSchema);
module.exports=person;