const inquirer = require('inquirer');
const {handlerMessage} = require ('./header/welcome')



//Instance functions with inquirer module

const readMenu = async() => {

    //Options menu instance

    const menu = [

        {
            type: 'list',
            name: 'optionsMenu',
            message: 'SELECCIONE UNA OPCION \n',
            choices: [
                {
                    value : 1,
                    name : `1. Buscar ciudad`
                },
                {
                    value : 2,
                    name : `2. Ver Historial`
                },
                {
                    value : 0,
                    name : `0. Salir`
                }
            ]  
        }
    ]

    handlerMessage()

    const { optionsMenu } = await inquirer.prompt(menu)

    return optionsMenu;
}

const selectOption = async (array = []) => {

    if ( array.length === 0){
        console.log(`No se encontraron resultados`.red)
        return false
    }

    const options = 
    [
        {
            type: 'list',
            name: 'optionsPlaces',
            message: 'SELECCIONE UNA CIUDAD \n'.green,
            choices: array.map((el, idx) => {
                
                return {
                    value : el.id,
                    name : `${idx + 1} `.green + `${el.place_name}`
                }
            })
        }
    ]

    const { optionsPlaces } = await inquirer.prompt(options)

    return optionsPlaces

}

const handlePause = async() => {

    //Instance pause options for first inquirer.prompt argument

    const pauseOpt = [
        {
            type: 'input',
            name: 'pause',
            message: `Presione ${'ENTER'.green} para volver al menu` 
        }
    ]

    const {pause} = await inquirer.prompt(pauseOpt)

    return pause

}

const readInput = async () => {

    const question = [

        {
            type : 'input',
            name : 'place',
            message: 'Ciudad: ',
            validate(value){

                let regex = /[A-Z]/gi
                
                if (value.length === 0 || !regex.test(value)){

                    return `Debe ingresar una ciudad`.red
                    
                }

                return true
            }
        }
    ]

    const { place } = await inquirer.prompt(question)
    
    return place
}

module.exports = {
    readMenu,
    handlePause,
    readInput,
    selectOption
}