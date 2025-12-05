// server.js - debug friendly
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // or app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Anush@123',
  database: 'task_tracker'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL Database');
});

// root
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// ---------- CRUD APIs with debug logs ----------
app.get('/tasks', (req, res) => {
  console.log('DEBUG: GET /tasks called');
  db.query('SELECT * FROM tasks ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('DB error on GET /tasks:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post('/tasks', (req, res) => {
  console.log('DEBUG: POST /tasks', req.body);
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description || null], (err, result) => {
    if (err) {
      console.error('DB error on POST /tasks:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId, message: 'Task added successfully' });
  });
});

app.put('/tasks/:id', (req, res) => {
  console.log('DEBUG: PUT /tasks/:id', req.params, req.body);
  const { id } = req.params;
  const { status } = req.body;
  if (!status) return res.status(400).json({ error: 'Status is required' });
  db.query('UPDATE tasks SET status = ? WHERE id = ?', [status, id], (err, result) => {
    if (err) {
      console.error('DB error on PUT /tasks/:id:', err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task updated successfully' });
  });
});

app.delete('/tasks/:id', (req, res) => {
  console.log('DEBUG: DELETE /tasks/:id', req.params);
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('DB error on DELETE /tasks/:id:', err);
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  });
});
// ---------- end CRUD APIs ----------

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
