const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const indexRouter = require('./roustes/app');
const usersRouter = require('./roustes/users');
const todosRouter = require('./roustes/todos');
const postsRouter = require('./roustes/posts');


const app = express();
const PORT = 12000;

app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todos', todosRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

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

