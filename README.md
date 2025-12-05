# 🚀 Task Tracker — Full Stack Project

A simple full-stack Task Tracker application built using:

- **Node.js + Express** (Backend)
- **MySQL** (Database)
- **HTML + CSS + JavaScript** (Frontend)
- **Bootstrap** (UI Styling)

---

## ✨ Features

- Add new tasks  
- View all tasks  
- Mark tasks as completed  
- Delete tasks  
- Stores data permanently in MySQL  
- Clean and simple UI  

---

## 🛠 Tech Stack

### Frontend
- HTML  
- CSS  
- JavaScript  
- Bootstrap  

### Backend
- Node.js  
- Express.js  
- Body-Parser  
- CORS  

### Database
- MySQL  

---

## 📂 Project Structure

task-tracker/
|-- backend/
| |-- server.js
| |-- package.json
| |-- node_modules/
|
|-- frontend/
| |-- index.html

---

## ⚙️ API Endpoints

| Method | Endpoint        | Description           |
|--------|-----------------|-----------------------|
| GET    | `/tasks`        | Get all tasks         |
| POST   | `/tasks`        | Add a new task        |
| PUT    | `/tasks/:id`    | Update task status    |
| DELETE | `/tasks/:id`    | Delete a task         |

---

## 🗄 Database Setup

```sql
CREATE DATABASE task_tracker;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  status ENUM('Pending','Completed') DEFAULT 'Pending'
);
▶️ Running the Backend
cd backend
npm install
node server.js


Backend will run at:

http://localhost:3000

▶️ Running the Frontend

Open:

frontend/index.html

👨‍💻 Author

Your Name
GitHub: https://github.com/Vennetianusha
