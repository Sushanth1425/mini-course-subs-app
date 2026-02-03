mini-course-subscription-app/
│
├── backend/
│   ├── controllers/
|   |   ├── authController.js
|   |   └── subsController.js
│   ├── middleware/
|   |   └── authMiddleware.js
│   ├── models/
|   |   ├── Course.js
|   |   ├── Subscription.js
|   |   └── User.js
│   ├── routes/
|   |   ├── authRoutes.js
|   |   ├── courseRoutes.js
|   |   └── subsRoutes.js
│   ├── utils/
|   |   ├── db.js
|   |   └── seedCourses.js
│   ├── server.js
│   ├── .gitignore
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── CourseDetail.jsx
│   │   │   └── MyCourses.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── CourseCard.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
│
└── README.md
