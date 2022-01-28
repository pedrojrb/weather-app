const axios = require('axios').default
const instance  = require('../config/axios')

const {baseURL} = instance
console.log(baseURL)

const getPlace = async ( path ) => {
    const response = await instance.get(`${path}`)
    return response.data
}

module.exports = {
    getPlace
}