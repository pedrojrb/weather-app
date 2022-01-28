const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'

})

module.exports = instance

