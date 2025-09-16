# Базовый Express сервер

Простой Node.js сервер на Express с двумя роутами для получения информации.

## Установка

```bash
npm install
```

## Запуск

```bash
# Запуск сервера
npm start

# Разработка с автоперезагрузкой (если установлен nodemon)
npm run dev
```

## API Endpoints

### 👥 GET /users
Возвращает информацию о пользователях.

**Ответ:**
```json
{
  "success": true,
  "message": "Список пользователей получен успешно",
  "data": [
    {
      "id": 1,
      "name": "Иван Петров",
      "email": "ivan@example.com",
      "age": 25,
      "city": "Москва"
    },
    {
      "id": 2,
      "name": "Мария Сидорова",
      "email": "maria@example.com",
      "age": 30,
      "city": "Санкт-Петербург"
    },
    {
      "id": 3,
      "name": "Алексей Иванов",
      "email": "alexey@example.com",
      "age": 28,
      "city": "Екатеринбург"
    }
  ],
  "total": 3
}
```

### 🛍️ GET /products
Возвращает информацию о продуктах.

**Ответ:**
```json
{
  "success": true,
  "message": "Список продуктов получен успешно",
  "data": [
    {
      "id": 1,
      "name": "Ноутбук ASUS",
      "price": 55000,
      "category": "Электроника",
      "inStock": true,
      "description": "Производительный ноутбук для работы и игр"
    },
    {
      "id": 2,
      "name": "Смартфон iPhone",
      "price": 85000,
      "category": "Электроника",
      "inStock": false,
      "description": "Современный смартфон с отличной камерой"
    }
  ],
  "total": 4,
  "inStock": 3
}
```

## Примеры использования

### Получение списка пользователей
```bash
curl http://localhost:3000/users
```

### Получение списка продуктов
```bash
curl http://localhost:3000/products
```

### Через браузер
Откройте в браузере:
- http://localhost:3000/users
- http://localhost:3000/products

## Обработка ошибок

### 404 - Роут не найден
При обращении к несуществующему роуту:
```json
{
  "success": false,
  "message": "Роут не найден",
  "availableRoutes": ["/users", "/products"]
}
```

### 500 - Внутренняя ошибка сервера
При возникновении ошибки на сервере:
```json
{
  "success": false,
  "message": "Внутренняя ошибка сервера"
}
```

## Структура проекта

```
minipars/
├── index.js          # Основной файл сервера
├── package.json      # Конфигурация проекта
├── package-lock.json # Заблокированные версии зависимостей
└── README.md         # Документация
```

## Переменные окружения

- `PORT` - порт сервера (по умолчанию: 3000)

## Запуск на другом порту

```bash
PORT=8080 npm start
```

или в Windows:
```bash
set PORT=8080 && npm start
```
