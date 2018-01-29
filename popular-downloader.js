const path = require('path');
const superPath = path.join;
const fs = require('fs');
const download = require('download');

const rp = require('request-promise');

let dataPath = superPath(__dirname, './popular-articles-downloader.json');

let options = {
    uri: 'https://reddit.com/r/popular.json',
    json: true,
    encoding: null 
};

rp(options)
    .then(data => {
        data.data.children.forEach(item => {
            if (item.data.preview) {
                download(item.data.url, './downloads').then(() =>
            console.log('done!'))
            }
        })
    });













// rp(options).then(function(items) {
//     fs.readFile(dataPath, {
//         encoding: "UTF-8"
//     }, (err, data) => {
//         body.data.children.forEach(item => {
//             if (item.data.preview) {
//                 //fs.appendFile(downloadPath, item.data.url + "\n")
//                 request.get(options)
//         .then(function (res) {
//     const buffer = Buffer.from(res, 'utf8');
//     fs.writeFileSync('/some/path', buffer);
//   });

    //fs.appendFile(dataPath, body);

    
                

                /*var options = {
                    uri: 'url',
                    json: true
                } 
                
                rp(options)
                    .then(function (repos) {
                     console.log('User has %d repos', repos.length);
                    })
                    .catch(function (err) {
                    });*/
         
    

