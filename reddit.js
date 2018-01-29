const path = require('path');
const superPath = path.join;
const fs = require('fs');

const rp = require('request-promise');

let redditChildren = []
let dataPath = superPath(__dirname, './popular-articles.json');

let options = {
    encoding: null,
    json: true,
    uri: 'https://reddit.com/r/popular.json'
}

rp(options)
    .then(data => {
        data.data.children.forEach(item => {
        
            let author = item.data.author;
            let url = item.data.url;
            let title = item.data.title;
            redditChildren.push(author + "\n   " + url + "\n   " + title +"\n");
        });
        redditChildren.forEach(item => {
            fs.appendFileSync(dataPath, item);
    })    
})
