📌 Task Tracker — Full Stack Project

A simple full-stack Task Tracker application built using:

Node.js + Express (Backend)

MySQL (Database)

HTML + CSS + JavaScript (Frontend)

Bootstrap (UI styling)

🚀 Features

✔ Add new tasks
✔ View all tasks
✔ Mark tasks as completed
✔ Delete tasks
✔ Stores data permanently in MySQL
✔ Clean and simple UI

🏗️ Tech Stack
Frontend

HTML

CSS

JavaScript

Bootstrap UI

Backend

Node.js

Express.js

CORS

Body Parser

Database

MySQL

phpMyAdmin / MySQL Workbench

📂 Project Structure
task-tracker/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
└── frontend/
    └── index.html

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR-USERNAME/task-tracker.git
cd task-tracker/backend

2️⃣ Install backend dependencies
npm install

3️⃣ Start backend
node server.js


Backend runs at:

http://localhost:3000

4️⃣ Open frontend

Open:

frontend/index.html


or use Live Server extension.

🗄️ Database Setup (MySQL)
CREATE DATABASE task_tracker;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  status ENUM('Pending', 'Completed') DEFAULT 'Pending'
);

🎯 Conclusion

This project demonstrates a complete beginner-friendly full-stack development workflow including backend API creation, frontend integration, and database interaction.
