const router = require("express").Router();
const { subscribeCourse, getMyCourses } = require("../controllers/subsController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/subscribe", verifyToken, subscribeCourse);
router.get("/my-courses", verifyToken, getMyCourses);

module.exports = router;