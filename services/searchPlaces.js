const axios = require('axios').default
const instance  = require('../config/axios')

const getPlace = async ( path, queryString ) => {

    try{

        const response = await instance.get(`${path}${queryString}`)
        return response.data

    }catch(err){
        return console.log('error: ',err)
    }
}

module.exports = {
    getPlace
}