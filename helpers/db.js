const fs = require('fs');
const  dbJSON = '../db/database.json';

const saveDB = (data) => {

    fs.writeFileSync(dbJSON, JSON.stringify(data))
}

module.exports = { saveDB }