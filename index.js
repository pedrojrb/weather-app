const { readMenu, handlePause, readInput, selectOption } = require('./helpers/inquirer');
const Busquedas = require('./models/search');
require('colors')



const main = async () => {

    const search = new Busquedas()

    let response = "";

    do {
        
        console.clear()

        response = await readMenu()
    
        switch(response){

            case 1:
                const place = await readInput()
                const data = await search.city(place)
                const option = await selectOption(data.features)

                if (!option){ await handlePause() }


                //Search places
                //Show results of places
                //Select one place
                //Weather data
                // Show results of weather data
                /* console.log('\n Informacion del lugar \n')
                console.log('Ciudad: ',)
                console.log('Latitud: ',)
                console.log('Longitud: ',)
                console.log('Temperatura: ',)
                console.log('Minima: ',)
                console.log('Maxima: ',) */
            break;
                
            /* case 2:
            break;

            case 0:
            break; */
        }

        response !== 0
        ? await handlePause()
        : false

    } while ( response !== 0)
    
}

main();