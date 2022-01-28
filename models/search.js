const { getPlace } = require('../services/searchPlaces');

class Busquedas {

    constructor(history = []){
        this.history = history
    }

    async city(place = '') {
        return await getPlace ('api/users?page=2')
        /* console.log('ciudad:', place) */
    }

}

module.exports = Busquedas;