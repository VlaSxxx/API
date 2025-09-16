const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 12000;


const getData = async (endpoint) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com${endpoint}`);
    return response.data;
  } catch (error) {
    throw new Error('Ошибка при получении данных');
  }
};

app.get('/', (req, res) => {
  res.json({
    message: 'API',
    routes: ['/users', '/todos', '/posts'],
    examples: {
      allUsers: 'http://localhost:12000/users',
      allTodos: 'http://localhost:12000/todos',
      allPlants: 'http://localhost:12000/posts'
    }
  });
});

app.get('/users', async (req, res) => {
  try {
    const users = await getData('/users');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

app.get('/todos', async (req, res) => {
  try {
    const todos = await getData('/todos');
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await getData('/posts');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
