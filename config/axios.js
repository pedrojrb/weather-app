const axios = require('axios').default;
require('dotenv').config()

const instance = axios.create({
    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/`,
    params:{
        'access_token': process.env.MAPBOX_KEY,
        'limit': 5,
        'language': 'es'
    }

})

module.exports = instance

