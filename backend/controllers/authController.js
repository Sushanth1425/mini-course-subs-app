const User= require('../models/User')
const bcrypt= require('bcryptjs')
const jwt= require('jsonwebtoken')
const {signupSchema, loginSchema}= require('../validations/authValidation')

//  api/auth/signup
module.exports.signupAuth= async(req, res, next)=>{
  try {
    const {error}= signupSchema.validate(req.body)
    if (error) return res.status(400).json({msg: error.details[0].message})

    const {name, email, password}= req.body
    const userExists= await User.findOne({email})
    if (userExists) return res.status(400).json({message: 'User already exists'})

    const hashedPwd= await bcrypt.hash(password, 10)
    const newUser= new User({name, email, password: hashedPwd})
    await newUser.save()

    const payload= {id: newUser._id}
    const token= jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'})

    return res.status(201).json({message: 'User Created Successfully !!', token, user: {id: newUser._id, name: newUser.name, email: newUser.email}})
  }
  catch (err) {
    next(err)
  }
}

//  api/auth/login
module.exports.loginAuth= async(req, res, next)=>{
  try{
    const {error}= loginSchema.validate(req.body)
    if (error) return res.status(400).json({message: error.details[0].message})

    const {email, password}= req.body
    if (!email || !password) return res.status(400).json({message: "All fields are required!"})

    let account= await User.findOne({email})
    if (!account) return res.status(400).json({ message: "Invalid credentials" })
    const validPwd= await bcrypt.compare(password, account.password);
    if (!validPwd) return res.status(400).json({message: 'Invalid credentials'})

    const payload= {id: account._id}
    const token= jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'})

    return res.status(200).json({message: 'Logged In Successfully !!', token, user: {id: account._id, name: account.name, email: account.email}})
  }
  catch(err){
    next(err)
  }
}