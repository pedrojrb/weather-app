const axios = require('axios').default
const instance  = require('../config/axios')

const getPlace = async ( place ) => {

    try{

        const response = await instance.get(`${place}.json`)
        
        return response.data

    }catch(err){
        return console.log('error: ',err)
    }
}

module.exports = {
    getPlace
}