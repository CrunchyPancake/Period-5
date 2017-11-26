const fetch = require('node-fetch')
const urls = [
    'https://jsonplaceholder.typicode.com/photos?albumId=1',
    'https://jsonplaceholder.typicode.com/photos?albumId=2',
    'https://jsonplaceholder.typicode.com/photos?albumId=3',
    'https://jsonplaceholder.typicode.com/photos?albumId=4',
    'https://jsonplaceholder.typicode.com/photos?albumId=5',
    'https://jsonplaceholder.typicode.com/photos?albumId=6',
    'https://jsonplaceholder.typicode.com/photos?albumId=7',
    'https://jsonplaceholder.typicode.com/photos?albumId=8',
    'https://jsonplaceholder.typicode.com/photos?albumId=9',
]

let asyncRequest = function (cb, wordCount, index = 0, result = []) {
    let promises = urls.map(url => fetch(url).then(data => data.json()))
    Promise.all(promises).then(results => { 
        cb(sortData(results, wordCount))
    })
}

let sortData = (data, wordCount) => {
    let result = [];
    for (let i = 0 ; i < data.length ; i++) {
        for (let k = 0 ; k < data[i].length ; k++) {
            result.push(data[i][k]);
        }
    }

    let filteredData = result.filter((el) => {
        return el.title.split(" ").length === wordCount;
    })

    return filteredData.map((el) => {
        return {
            id: el.id,
            title: el.title
        }
    })

}

module.exports = { asyncRequest: asyncRequest };