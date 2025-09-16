const axios = require('axios');

const getData = async (endpoint, method = 'GET', data = null) => {
    try {
        const baseURL = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

        const config = {
            method: method,
            url: `${baseURL}${endpoint}`,
        };

        if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
            config.data = data;
        }

        const response = await axios(config);
        return response.data;

        } catch (error) {
        
        if (error.response && error.response.status === 404) {
            throw new Error('Роут не найден');
        }
        throw new Error('Ошибка при получении данных');
    }
  };

module.exports = getData;