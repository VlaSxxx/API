const express = require('express');
const getData = require('../utils/getData');
const router = express.Router();

// Получить все задачи
router.get('/', async (req, res) => {
    try {
      const todos = await getData('/todos');
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  });

// Получить одну задачу по ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await getData(`/todos/${id}`);
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Удалить задачу по ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getData(`/todos/${id}`, 'DELETE');
        res.json({ 
            message: `Задача с ID ${id} удалена`,
            result: result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;