const { getPlace } = require('../services/searchPlaces');
require('dotenv').config()

class Busquedas {

    constructor(history = []){
        this.history = history
    }

    async city(place = '') {

        return await getPlace (`${place}.json?`,`${process.env.QUERYSTRING_MAPBOX}${process.env.MAPBOX_TOKEN}`)
    }

}

module.exports = Busquedas;