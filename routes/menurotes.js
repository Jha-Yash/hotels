const express=require('express');
const router=express.Router();
const menuitem=require('../models/menuitem');

router.post('/',async (req,res)=>{
try{ 
  const data=req.body ;
  const newmenu=new menuitem(data);
  const response=await newmenu.save();
  console.log('data saved successfullly');
  res.status(200).json(response);

} catch(err){
   console.log('error saving person',err);
 res.status(500).json({error:'Internal server error'});

}
})

router.get('/',async(req,res)=>{
  try{ 
    const data=await menuitem.find();
    console.log('data fetched');
  res.status(200).json(data);
  }
  catch(err){
console.log('error saving person',err);
 res.status(500).json({error:'Internal server error'});
  }
})

router.get('/:tastetype',async(req,res)=>{ 
  try{
    const tastetype=req.params.tastetype;
    if(tastetype=='spicy' || tastetype=='sour' || tastetype=='sweet'){ 
    const data=await menuitem.find({taste:tastetype});
    console.log('data fetched');
    res.status(200).json(data);
    }else{
      res.status(404).json({error:'invalid worktype'});
    }

  }catch(err){
console.log('error saving person',err);
 res.status(500).json({error:'Internal server error'});
  }
})
module.exports=router;