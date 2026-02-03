const mongoose = require("mongoose");
require("dotenv").config();
const Course = require("../models/Course");

const courses = [
  {
    title: "Web Security Fundamentals",
    description: "Basics of web application security",
    price: 0
  },
  {
    title: "Advanced Ethical Hacking",
    description: "Deep dive into hacking techniques",
    price: 999
  },
  {
    title: "Bug Bounty Bootcamp",
    description: "Learn bug bounty hunting",
    price: 1499
  },
  {
    title: "Cloud Security Basics",
    description: "Securing cloud infrastructure",
    price: 0
  },
  {
    title: "Red Team Operations",
    description: "Offensive security practices",
    price: 1999
  }
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Course.deleteMany();
    await Course.insertMany(courses);
    console.log("Courses seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();