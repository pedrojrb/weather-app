const { readMenu, handlePause, readInput, selectOption } = require('./helpers/inquirer');
const { getWeather } = require('./services/searchWeather');
const Busquedas = require('./models/searchObj');
const showDataWeather = require('./helpers/showData');
require('colors')



const main = async () => {

    const search = new Busquedas()

    let response = "";

    do {
        
        console.clear()

        response = await readMenu()
    
        switch(response){

            case 1:

                //Show message
                const place = await readInput()

                //Search Places
                const data = await search.city(place)

                //Place selection
                const option = await selectOption(data.features)


                if (!option || option === 0){ 
                    
                    continue; 
                
                } else {

                    //Select one place and save in const its
                    const placeSelection = await data.features.filter(el => el.id === option )

                    //Save searched data
                    search.addHistory(placeSelection[0].text)

                    //Destructuration of placeSelection and create instance for latitud and longitud
                    const [lon, lat] = await placeSelection[0].center
                    
                    //Search results
                    const weather = await getWeather(lon, lat)
                    
                    //Show results
                    showDataWeather(weather.data)
                }

            break;
                
            case 2:
                search.history.forEach((el, i) => { 
                    console.log(`${i + 1}. `.green + `${el}`)
                })
            break;

            case 3:
                response = 0
            break;
        }

        response !== 0
        ? await handlePause()
        : false

    } while ( response !== 0)

    
}

main();