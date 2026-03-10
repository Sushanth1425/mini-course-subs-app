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

const helmet= require('helmet')
app.use(helmet())

const rateLimit= require('express-rate-limit')
const limit= rateLimit({
  windowMs: 15*60*1000,
  max: 100
})
app.use(limit)

const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const subsRoutes = require("./routes/subsRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api", subsRoutes);

const errorHandler= require('./middleware/errorMiddleware')
app.use(errorHandler)

app.get("/", (req, res)=> {res.send(`Running on ${process.env.PORT}`)})

const port= process.env.PORT || 5050
if (process.env.NODE_ENV !== 'test')
app.listen(port, ()=>console.log(`Server running on port ${port}`))

module.exports= app