const Joi= require('joi')

const subscribeSchema= Joi.object({
  courseId: Joi.string().required(),
  promoCode: Joi.string().allow("", null)
})

module.exports= {subscribeSchema}