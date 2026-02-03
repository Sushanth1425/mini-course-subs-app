const Subscription = require("../models/Subscription");
const Course = require("../models/Course");

exports.subscribeCourse = async (req, res) => {
  try {
    const { courseId, promoCode } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    let pricePaid = course.price;

    if (course.price > 0) {
      if (promoCode !== "BFSALE25") {
        return res.status(400).json({ message: "Invalid promo code" });
      }
      pricePaid = course.price / 2;
    }

    const alreadySubscribed = await Subscription.findOne({userId: req.user._id, courseId});
    if (alreadySubscribed) return res.status(400).json({ message: "Already subscribed to this course" });
    
    const subscription = await Subscription.create({userId: req.user._id, courseId, pricePaid});

    return res.status(201).json(subscription);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getMyCourses = async (req, res) => {
  try {
    const subs = await Subscription.find({ userId: req.user._id }).populate("courseId");

    return res.status(200).json(subs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};