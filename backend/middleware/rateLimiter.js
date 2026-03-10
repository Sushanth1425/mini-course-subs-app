const rateLimit= require('express-rate-limit')

const loginLimiter= rateLimit({
  windowMs: 15*60*1000,
  max: 20,
  message: 'Too many attempts.... Try again later!!'
})

module.exports= {loginLimiter}