const axios = require('axios').default;
require('dotenv').config()

const instance = axios.create({
    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/`,
    params:{
        'access_token': process.env.NEXT_PUBLIC_MAPBOX_KEY,
        'limit': 5,
        'language': 'es'
    }

})

const instanceOpenWeather = axios.create({
    baseURL : `https://api.openweathermap.org/data/2.5/`,
    params: {
        'appid' : process.env.NEXT_PUBLIC_OPENWEATHER_KEY,
        'units': 'metric',
        'lang' : 'es'
    }
})

module.exports = {instance, instanceOpenWeather }

