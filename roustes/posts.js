const express = require('express');
const getData = require('../utils/getData');
const router = express.Router();

// Получить все посты
router.get('/', async (req, res) => {
    try {
      const posts = await getData('/posts');
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  });

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = await getData(`/posts${id}`);
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.massage});
    }
});

// Удалить пост по ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getData(`/posts/${id}`, 'DELETE');
        res.json({ 
            message: `Пост с ID ${id} удален`,
            result: result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;