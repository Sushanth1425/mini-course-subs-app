const express= require("express");
const Course= require("../models/Course");

const router= express.Router();

router.get("/", async (req, res)=> {
  try {
    const courses= await Course.find();
    return res.status(200).json(courses);
  } 
  catch (err) {
    console.error(err)
    return res.status(500).json({message: 'Server error! Try again !!'})
  }  
});


router.get("/:id", async (req, res)=> {
  try{
    const course= await Course.findById(req.params.id);
    if (!course) return res.status(400).json({ message: "Invalid Course ID" })
    return res.status(200).json(course);
  }
  catch(err){
    console.error(err)
    return res.status(500).json({message: 'Server error! Try again !!'})
  }  
});

module.exports= router;