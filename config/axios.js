const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://reqres.in/'

})

module.exports = instance

