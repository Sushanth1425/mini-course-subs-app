const mongoose = require("mongoose");
require("dotenv").config();
const Course = require("../models/Course");

const courses = [
  {
    title: "Web Security Fundamentals",
    description: "Basics of web application security",
    price: 0,
    image: "https://bpbonline.com/cdn/shop/products/427_Front_96b74228-d315-4000-9b8e-edfc61c29135.jpg?v=1755670081"
  },
  {
    title: "Advanced Ethical Hacking",
    description: "Deep dive into hacking techniques",
    price: 999,
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~advanced-ethical-hacking-cybersecurity/XDP~COURSE!~advanced-ethical-hacking-cybersecurity.jpeg"
  },
  {
    title: "Bug Bounty Bootcamp",
    description: "Learn bug bounty hunting",
    price: 1499,
    image: "https://images2.penguinrandomhouse.com/smedia/9781718501546"
  },
  {
    title: "Cloud Security Basics",
    description: "Securing cloud infrastructure",
    price: 0,
    image: "https://i.ytimg.com/vi/pD98Nmd6d6U/hq720.jpg"
  },
  {
    title: "Red Team Operations",
    description: "Offensive security practices",
    price: 1999,
    image: "https://hawkeyeforensic.com/wp-content/uploads/2024/07/Red-Team-Assessment.jpg"
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