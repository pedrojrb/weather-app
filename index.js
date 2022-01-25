const { readMenu, handlePause } = require('./helpers/inquirer');
require('colors')

console.clear()

const main = async () => {

    let response = "";

    do {

        response = await readMenu()

        console.log(`Selecciono la opcion ${response} \n`)

        await handlePause()

    } while ( response !== 0)
    
}

main();