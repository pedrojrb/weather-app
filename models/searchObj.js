const { getPlace } = require('../services/searchPlaces');
const fs = require('fs');



class Busquedas {

    history = []
    dbPath = './db/database.json'

    constructor(){
        this.readDB()
    }

    async city(place = '') {

        //HTTP request
        return await getPlace (place)
    }

    saveDB(data){

        fs.writeFileSync(this.dbPath, JSON.stringify(data))
    }

    addHistory(place){

        if(this.history.includes(place)){
            return;
        }

        if ( this.history.length === 5){
            this.history.pop()
        }

        this.history.unshift(place);

        this.saveDB(this.history)
    }


    readDB(){

        if( fs.existsSync(this.dbPath)){

            const db = fs.readFileSync(this.dbPath, {encoding: 'utf-8'})
    
            const data = JSON.parse(db)
    
            this.history = data
    
        }

    }

}

module.exports = Busquedas;