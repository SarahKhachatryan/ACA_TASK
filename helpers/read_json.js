//reads from json file and converts it to an array

const fs = require('fs');

function  read_json (){

    let rawdata = fs.readFileSync('info/users.json');
    console.log("rawdata", rawdata);
    let arr = JSON.parse(rawdata);
    return arr;
}

module.exports = {read_json};