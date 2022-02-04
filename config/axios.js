const axios = require('axios').default;
require('dotenv').config()

const instance = axios.create({
    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/`,
    params:{
        'access_token': "pk.eyJ1IjoibGVwZXI3NCIsImEiOiJja3l5ZjUzZTYwOGd0MnZyeGcwODU0Z3VvIn0.P8Jy_fSpU1ckNRGuT2PiIw",
        'limit': 5,
        'language': 'es'
    }

})

const instanceOpenWeather = axios.create({
    baseURL : `https://api.openweathermap.org/data/2.5/`,
    params: {
        'appid' : "6aeb728ca8e75d68c5924df44a3558f9",
        'units': 'metric',
        'lang' : 'es'
    }
})

module.exports = {instance, instanceOpenWeather }

