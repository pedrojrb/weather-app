const { getPlace } = require('../services/searchPlaces');


class Busquedas {

    constructor(history = []){
        this.history = history
    }

    async city(place = '') {

        //HTTP request

        return await getPlace (place)
    }

}

module.exports = Busquedas;