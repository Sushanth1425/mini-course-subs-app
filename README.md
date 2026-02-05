#  Mini Course Subscription App

A full-stack MERN application that allows users to browse courses, apply promo codes, and subscribe to free or paid courses using a mock payment flow.

This project demonstrates **authentication, protected routes, backend business logic, and frontend state handling**, built as part of a technical assignment.

---
##  Live Demo

* **Frontend (Vercel):** [https://mini-course-subs-app.vercel.app/](https://mini-course-subs-app.vercel.app/) 
* **Backend (Render) :** [https://mini-course-subs-app.onrender.com/](https://mini-course-subs-app.onrender.com/)
---
##  Screenshots 


##### Login page
   <img width="1920" height="1032" alt="Image" src="https://github.com/user-attachments/assets/afee0696-4374-4f4b-ad43-4bb7f0b62382" />
##### Signup page
   <img width="1920" height="1032" alt="Image" src="https://github.com/user-attachments/assets/4ac158ba-bb0a-4837-80ad-782ddbe91a7a" />
##### Course List
   <img width="1920" height="1032" alt="Image" src="https://github.com/user-attachments/assets/3162325e-9622-4bb8-98a3-e9cf32a38700" />  
##### Course details 
   <img width="1920" height="1032" alt="Image" src="https://github.com/user-attachments/assets/1b07297b-1985-4924-8b1b-e68266ade4e5" />
   <img width="1920" height="1032" alt="Image" src="https://github.com/user-attachments/assets/0b3168e3-ac4c-4614-a49a-ed0b0510ef99" />
##### My Courses page
   <img width="1920" height="1032" alt="Image" src="https://github.com/user-attachments/assets/7ee3be06-735f-445c-909c-47a7d53a39d7" />

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

Email: testuser1@gmail.com
Password: testuser1

```

```

Email: testuser2@gmail.com
Password: testuser2

```

```

Email: testuser3@gmail.com
Password: testuser3

```
```

Email: testuser4@gmail.com
Password: testuser4

```
```

Email: testuser5@gmail.com
Password: testuser5

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


