require('colors')

const showDescriptionWeather = ( obj = {}) => {
 
    console.log (`Descripcion: ` + `${obj.weather[0].description}`.green)
}

const showDataWeather = async (obj = {}) => {

    console.log(`Temperatura: ` + `${obj.main.temp}°`.green)
    console.log(`Temp Min: ` + `${obj.main.temp_min}°`.green)
    console.log(`Temp Max: ` + `${obj.main.temp_max}°`.green)
    console.log(`Humedad: ` + `${obj.main.humidity}%`.green)
    showDescriptionWeather(obj)
}



module.exports = showDataWeather;