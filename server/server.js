const path = require('path');
const fs = require('fs');

let chirpArray = [{
                "username": "Peter", 
                "chirp": "First Chirp"
                }, {
                "username": "Peter",
                "chirp": "Second Chirp"
                }, {
                "username": "Peter",
                "chirp": "Third Chirp"
                }, {
                "username": "Peter",
                "chirp": "Fourth Chirp"
                }, {
                "username": "Peter",
                "chirp": "Fifth Chirp"
                }];

let dataPath = path.join(__dirname, "../chirps.json");

//fs.appendFile(dataPath, JSON.stringify(chirpArray));

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {
    let chirps = JSON.parse(data);
    for (let i = 0; i < chirps.length; i++) {
    
        console.log(chirps[i].username);
        console.log(chirps[i].chirp);
    }
})