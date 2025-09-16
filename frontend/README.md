# React + Vite + Node.js + Express + MongoDB

This project is a **full-stack authentication system** built as a task for [Turing Technologies](https://www.linkedin.com/company/turing-technologies/).  
It includes a responsive **Login & Signup UI (React + Vite)** and a **secure backend (Node.js + Express + MongoDB Atlas)** with JWT authentication.

---

## 🚀 Features

-  Responsive **Login & Signup pages** (React + TailwindCSS)
-  **Protected routes** with `react-router-dom`
-  **Node.js + Express.js backend**
-  **MongoDB Atlas** integration with Mongoose
-  Secure password hashing using **bcrypt**
-  JWT-based authentication (access + refresh tokens)
-  Clean folder structure & `.env` config

---

## 🛠️ Tech Stack

-  **Frontend**: React, Vite, TailwindCSS, React Router DOM
-  **Backend**: Node.js, Express.js, bcrypt, JWT
-  **Database**: MongoDB Atlas

---

## 📂 Project Structure

project/
│── backend/ # Node.js + Express + MongoDB
│ ├── server.js
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── middleware/
│
│── frontend/ # React + Vite + TailwindCSS
│ ├── src/
│ │ ├── auth/ (SignIn, Signup)
│ │ ├── layout/ (DashboardLayout, ChatLayout, Sidebar)
│ │ └── App.jsx
│ └── vite.config.js

---

## ⚡ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/mobeenn/fullstack-auth-app.git
cd fullstack-auth-app
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
➡ Open: http://localhost:5173
3️⃣ Backend (Node.js + Express)
cd backend

# Install dependencies
npm install

# Run server
npm run dev
# PORT=5000
# MONGO_URI=your-mongodb-connection-string
# JWT_SECRET=your-secret-key

```
