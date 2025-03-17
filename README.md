# Full-Stack User Management System – Itransition Task 4 Submission

This project is a full-stack web application for user management, developed as part of Task submission.

## 🌟 Features

- User Registration
- User Login / Logout
- Select any user (excluding current one)
- Block / Unblock individual users
- Block all users (automatic redirection to login page)
- See all users including current
- Automatic logout if current user gets blocked
- Email uniqueness guaranteed at the database level (index or key-based)
- Catches duplicate email errors and displays friendly UI message

## 💻 Tech Stack

- Frontend: React / Vite / Tailwind CSS
- Backend: Node.js / Express
- Database: MongoDB 


## 🎥 Demo Video

https://youtu.be/WxAQTycSyQI?feature=shared

## 🧠 Database Index Strategy

This application uses a unique index on email field in the database to guarantee no duplicate users can register.  
An error is caught on the backend and displayed on the UI accordingly.

> 📌 If using a storage that doesn't support indices, an alternative strategy using email as key, triggers, or similar consistency-enforcing methods is applied.

## ⚙️ Project Setup (Local)

```bash
# Clone repository
git clone https://github.com/your-username/your-repo.git

# Backend setup
cd backend
npm install
npm run dev

# Frontend setup
cd ../frontend
npm install
npm run dev
```
