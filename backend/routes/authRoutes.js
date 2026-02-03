const router= require('express').Router()

const {signupAuth, loginAuth}= require('../controllers/authController')

router.post('/signup', signupAuth)
router.post('/login', loginAuth)

module.exports= router