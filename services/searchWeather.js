const { instanceOpenWeather } = require ("../config/axios");


const getWeather = async (lon, lat) => {

    try{

        const weather = await instanceOpenWeather.get(`weather?lat=${lat}&lon=${lon}`)

        return weather
        
    }catch(err){
        return err
    }
}

module.exports = { getWeather };