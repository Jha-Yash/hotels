const mongoose=require('mongoose');

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],//enum mai humne user ko 3 option diye work type kai agr isme sai kuch to select vrna 
        //accept nhi krengai or work fill krna mandatory krdiya humne
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
      default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
});

const menuitem=mongoose.model('menuitem',menuSchema);
module.exports=menuitem;