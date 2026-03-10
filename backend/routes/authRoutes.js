const router= require('express').Router()

const {signupAuth, loginAuth}= require('../controllers/authController')
const { loginLimiter } = require('../middleware/rateLimiter')

router.post('/signup', signupAuth)
router.post('/login', loginLimiter, loginAuth)

module.exports= router