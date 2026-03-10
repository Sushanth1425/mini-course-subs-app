const errorHandler= (err, req, res, next)=>{
  console.error(err)

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server error! Try again !!'
  })
}

module.exports= errorHandler