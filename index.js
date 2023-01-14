const fs = require('fs');
const axios = require('axios');
const readline = require('readline');
const { it } = require('node:test');

function generateJSON(shopData) {
    // parse and organize data into JSON format
    const jsonData = JSON.stringify(shopData);
    // write data to a file
    fs.writeFileSync('fortnite-shop.json', jsonData);
    console.log('Fortnite shop JSON generated and written to fortnite-shop.json');
}

axios.get('https://api.nitestats.com/v1/epic/store')
    .then(response => {
        // do something with the data
        const shopData = response.data;
        generateJSON(shopData);
    })
    .catch(error => {
        console.log(error);
    });
