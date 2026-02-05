#  Mini Course Subscription App

A full-stack MERN application that allows users to browse courses, apply promo codes, and subscribe to free or paid courses using a mock payment flow.

This project demonstrates **authentication, protected routes, backend business logic, and frontend state handling**, built as part of a technical assignment.

---

##  Features

###  Authentication

- JWT-based authentication
- Login & Signup
- Protected routes (Home, Course Details, My Courses)
- Token stored in `localStorage`

###  Courses

- View list of available courses
- View detailed course information
- Free and Paid courses supported

###  Subscription Logic

- Free courses → instant subscription
- Paid courses → promo code required
- Valid promo code: **BFSALE25**
- 50% discount applied on valid promo
- Prevents duplicate subscriptions

###  My Courses

- View all enrolled courses
- Shows price paid and subscription date

---

##  Tech Stack

### Frontend

- React (Vite)
- React Router DOM
- Axios
- Bootstrap 5

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt.js

---

##  Project Structure

```

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

```

---

##   Credentials (For Testing)

You can use the following pre-created user credentials:

```

Email: testuser@gmail.com
Password: test123

```

(Or create a new user via Signup)

---

##  Promo Code

```

BFSALE25

```

- Applies **50% discount**
- Valid only for paid courses

---

##  API Endpoints

### Auth

```

POST /api/auth/signup
POST /api/auth/login

```

### Courses

```

GET /api/courses
GET /api/courses/:id

```

### Subscriptions

```

POST /api/subscribe
GET /api/my-courses

```

---

##  Environment Variables

### Backend (`backend/.env`)

```

PORT=5050
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
```

### Frontend (`frontend/.env`)

```

VITE_API_URL=http://localhost:5050/api
````

---

##  How to Run Locally

### 1 Clone Repository

```
git clone https://github.com/your-username/mini-course-subscription-app.git
````

### 2 Backend Setup

```
cd backend
npm install
npm run dev
```

### 3 Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:5050
```

---

##  Bonus Features Implemented

* Route protection using auth middleware
* Promo validation UX
* Discounted vs original price display
* Duplicate subscription prevention
* Clean UI with Bootstrap
* Loading states

---

##  Screenshots 


* Login page
* Signup page
* Home page
* Course List
* Course details 
* My Courses page

---

##  Key Learnings

* Implementing JWT authentication end-to-end
* Designing backend business logic for subscriptions
* Protecting frontend routes
* Handling async API flows in React

---

##  Author

**Sushanth Balasekaran**

GitHub: [https://github.com/Sushanth1425](https://github.com/Sushanth1425)



---


