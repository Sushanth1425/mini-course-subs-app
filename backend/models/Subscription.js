const mongoose = require("mongoose");

const subsSchema= new mongoose.Schema({  
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseId: {type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  pricePaid: Number,
  subscribedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Subscription", subsSchema);