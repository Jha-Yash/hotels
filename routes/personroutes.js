
const express=require('express');
const router=express.Router();
const person=require('../models/person');

//post route to add a person
router.post('/',async (req,res)=>{
try{ 
  const data=req.body //assuming the req body contains the person data

  //creating the new person document using the mongose model
  const newPerson=new person(data);//req body ka data data mai liya or usko newpwerson ko pass krrdiya

  //save the newperson to the database
  const response=await newPerson.save();//await mtlb save hone ka wait kiya fir jo res hai vo bhej diya aage if agr fail hota kuch 
  //save mai toh automatic catch block mai chla jaata 
  console.log('data saved successfullly');
  res.status(200).json(response);
} catch(err){
   console.log('error saving person',err);
 res.status(500).json({error:'Internal server error'});//ye msg client ko bhejengai,jb bhi data exchnage hota hai server ek signal
//send krta hai usko status signal kehte hai diff no. represent diff response ex 500 server error response 200 mtlb succesfull res

}
})
  
//get method to get the person
router.get('/',async(req,res)=>{//server sirf end point smjhta hai usko 3 he end point pta hai ki get /person toh data show post
  // /person toh data add and get / toh welcome msg show krna and chiken idli vaale points
  try{
    const data=await person.find();
    console.log('data fetched');
  res.status(200).json(data);
  }catch(err){
console.log('error saving person',err);
 res.status(500).json({error:'Internal server error'});
  }
})

router.get('/:worktype',async(req,res)=>{ //: isse worktype variable bn gya ab iski value kuch bhi ho skti hai
  try{
    const worktype=req.params.worktype;// extract the worktype from the url parameter
    if(worktype=='chef' || worktype=='waiter' || worktype=='manager'){ //ye taaki server sirf inhi worktype ko entertain krey vrna
      //bnde toh kuch bhi enter krte jayengai
    const data=await person.find({work:worktype});
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

router.put('/:id',async(req,res)=>{
  try{ 
  const personid=req.params.id;//extract id from url parameter
  const updatedpersondata=req.body;//updated data for the person

  const response= await person.findByIdAndUpdate(personid,updatedpersondata,{
    new:true,//ruturn the updated document
    runValidators:true//run moongoose validation
 
  })
  if(!response){
    res.status(404).json({error:'person not found'});
  }
  console.log('data updated');
   res.status(200).json(response);

   }catch(err){
console.log('error saving person',err);
 res.status(500).json({error:'Internal server error'});
   }
})

router.delete('/:id',async(req,res)=>{
  try{ 
  const personid=req.params.id;//extract id from url parameter
  

  const response= await person.findByIdAndDelete(personid);
  if(!response){
    return res.status(404).json({error:'person not found'});
  }
  console.log('data deleted');
   res.status(200).json({message:'person deleted succesfully'});

   }catch(err){
console.log('error saving person',err);
 res.status(500).json({error:'Internal server error'});
   }
})
module.exports=router;