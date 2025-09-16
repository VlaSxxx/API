const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const port = process.env.PORT || 12000;
    const baseUrl = `http://localhost:${port}`;
    
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

module.exports = router;

