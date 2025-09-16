const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Первый роут - информация о пользователях
app.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'Иван Петров',
      email: 'ivan@example.com',
      age: 25,
      city: 'Koln'
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      email: 'maria@example.com',
      age: 30,
      city: 'Frankfurt'
    },
    {
      id: 3,
      name: 'Алексей Иванов',
      email: 'alexey@example.com',
      age: 28,
      city: 'Aachen'
    }
  ];

  res.json({
    success: true,
    message: 'Список пользователей получен успешно',
    data: users,
    total: users.length
  });
});

// Второй роут - информация о продуктах
app.get('/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Ноутбук ASUS',
      price: 55000,
      category: 'Электроника',
      inStock: true,
      description: 'Производительный ноутбук для работы и игр'
    },
    {
      id: 2,
      name: 'Смартфон iPhone',
      price: 85000,
      category: 'Электроника',
      inStock: false,
      description: 'Современный смартфон с отличной камерой'
    },
    {
      id: 3,
      name: 'Наушники Sony',
      price: 12000,
      category: 'Аудио',
      inStock: true,
      description: 'Беспроводные наушники с шумоподавлением'
    },
    {
      id: 4,
      name: 'Клавиатура механическая',
      price: 8500,
      category: 'Периферия',
      inStock: true,
      description: 'Механическая клавиатура для геймеров'
    }
  ];

  res.json({
    success: true,
    message: 'Список продуктов получен успешно',
    data: products,
    total: products.length,
    inStock: products.filter(p => p.inStock).length
  });
});

app.get('/users-uk', (req, res) => {
    const usersUk = [
        {
            id: 1,
            username: 'Vlad',
            email: 'vlad@gmail.com',
            age: 18,
            city: 'Lukhansk',
            isAdmin: true
        },
        {
            id: 2,
            username: 'Maks',
            email: 'maks@gmail.com',
            age: 20,
            city: 'Luhansk'
        }
    ];
    res.json({
        success: true,
        message: 'имена укр',
        data: usersUk,
        total: usersUk.length
    });
});

app.get('/products-uk', (req, res) => {
    const productsUK = [
        {
          id: 1,
          name: 'Ноутбук ASUS',
          price: 55000,
          category: 'Электроника',
          inStock: true,
          description: 'Производительный ноутбук для работы и игр'
        },
        {
          id: 2,
          name: 'Смартфон iPhone',
          price: 85000,
          category: 'Электроника',
          inStock: false,
          description: 'Современный смартфон с отличной камерой'
        },
        {
          id: 3,
          name: 'Наушники Sony',
          price: 12000,
          category: 'Аудио',
          inStock: true,
          description: 'Беспроводные наушники с шумоподавлением'
        },
        {
          id: 4,
          name: 'Клавиатура механическая',
          price: 8500,
          category: 'Периферия',
          inStock: true,
          description: 'Механическая клавиатура для геймеров'
        }
      ];

    res.json({
        success: true,
        message: 'Список украинских продуктов',
        data: productsUK,
        total: productsUK.length
    });
});

// Обработка несуществующих роутов
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Роут не найден',
    availableRoutes: ['/users', '/products', '/users-uk', '/products-uk']
  });
});

// Глобальный обработчик ошибок
app.use((error, req, res, next) => {
  console.error('Ошибка сервера:', error);
  res.status(500).json({
    success: false,
    message: 'Внутренняя ошибка сервера'
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});

module.exports = app;
