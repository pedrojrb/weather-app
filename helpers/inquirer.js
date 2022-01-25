const inquirer = require('inquirer');
const {handlerMessage} = require ('./header/welcome')

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

//Instance functions with inquirer module

const readMenu = async() => {

    handlerMessage()

    const { optionsMenu } = await inquirer.prompt(menu)

    return optionsMenu;
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

module.exports = {
    readMenu,
    handlePause
}