// const express = require('express');
// const dotenv = require('dotenv');
// dotenv.config();

// const indexRouter = require('./roustes/app');
// const usersRouter = require('./roustes/users');
// const todosRouter = require('./roustes/todos');
// const postsRouter = require('./roustes/posts');


// const app = express();
// const PORT = 12000;

// app.use(express.json());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/todos', todosRouter);
// app.use('/posts', postsRouter);

// app.listen(PORT, () => {
//   console.log(`Сервер запущен на http://localhost:${PORT}`);
//   console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
// });

///////////////////////////////////////////////////////////////////////////////

// const axios = require('axios');
// const express = require('express');

// const app = express();
// const PORT = 12000;

// app.use(express.json());

// app.get('/user', (req, res) => {
//   res.json({
//     message: 'User',
//     users: [
//       {
//         id: 1,
//         name: 'Vlad',
//         age: 17,
//         email: 'vlad@gmail.com'
//       }
//     ]
//   })
// });

// app.post('/user', (req, res) => {
//   const { firstName, lastName } = req.body;
  
//   res.json({
//     message: 'User created',
//     user: {
//       id: 1,
//       firstName: firstName,
//       lastName: lastName
//     }
//   });
// });  

// axios.post('http://localhost:12000/user', {
//   firstName: 'Vlad',
//   lastName: 'Soldatko'
// })

// .then(function (response) {
//   console.log(response.data);
// })

// .catch(function (error) {
//   console.log(error);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

///////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const axios = require('axios');

// const app = express();
// const PORT = 13000;

// let users = [
//   {
//     id: 1,
//     username: 'Vlad',
//     email: 'vlad@gmail.com',
//     password: '123456'
//   }];

// app.use(express.json());

// app.get('/user', (req, res) => {
//   res.json({
//     message:'User',
//     users: users,
//     total: users.length
//   })
// });

// app.post('/user', (req, res) => {
//   const { username, email, password, id } = req.body;

//   const newUser = {
//     id: id,
//     username: username,
//     email: email, 
//     password: password
//   };

//   users.push(newUser);

//   res.json({
//     message: 'User new',
//     user: newUser,
//     totalUsers: users.length
//   });
// });

// setTimeout(() => {

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// })

// axios.post('http://localhost:13000/user', {
//   id: 2,
//   username: 'Daniil',
//   email: 'daniil@gmail.com',
//   password: '123456'
// })

// .then(function (response) {
//   console.log(response.data);
// })

// .catch(function (error) {
//   console.log(error);

// }, 1000);

// });

//////////////////////////////////////////////////////////////////////

// const express = require('express');

// const app = express()
// const PORT = 12000;

// app.use(express.json());

// async function getData() {
//   try {
//     const { default: fetch } = await import('node-fetch');
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`); 
//     }
//     const data = await response.json();
//     return(data);
//   } catch (error) {
//     console.log('Problem with connection', error);
//     throw error;
//   }
// }

// // Маршрут для отображения данных на сайте
// app.get('/', async (req, res) => {
//   try {
//     const data = await getData();
//     res.json(data);
//   } catch (error) {
//     res.status(500).send('Error');
//   }
// })

// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// })


//////////////////////////////////////////////////////////////////////

async function getData() {
  try {
    const { default: fetch } = await import('node-fetch');
    const [response1, response2] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts/1'),
      fetch('https://jsonplaceholder.typicode.com/posts')
    ]);
    if (!response1.ok || !response2.ok) {
      throw new Error(`Error: ${response1.status} || ${response2.status}`);
    }
    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log(data1, data2);
  } catch (error) {
    console.log('Problem with connection', error);
    throw error;
  }
}

getData();