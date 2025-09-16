const express = require('express');
const getData = require('../utils/getData');
const router = express.Router();

// Получить всех пользователей
router.get('/', async (req, res) => {
    try {
        const users = await getData('/users');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получить одного пользователя по ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getData(`/users/${id}`);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Удалить пользователя по ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getData(`/users/${id}`, 'DELETE');
        res.json({ 
            message: `Пользователь с ID ${id} удален`,
            result: result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
