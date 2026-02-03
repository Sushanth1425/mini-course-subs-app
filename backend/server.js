const express= require('express')
require('dotenv').config()
const cors= require('cors')


const connetDB= require('./utils/db')
connetDB()

const app= express()

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'PUT', 'DELETE', 'POST', 'PATCH'],
  credentials: true
}))
app.use(express.json())

const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const subsRoutes = require("./routes/subsRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api", subsRoutes);

app.get("/", (req, res)=> {res.send(`Running on ${process.env.PORT}`)})

const port= process.env.PORT || 5050
app.listen(port, ()=>console.log(`Server running on port ${port}`))