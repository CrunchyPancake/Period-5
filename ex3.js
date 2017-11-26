const fetch = require('node-fetch')
const urls = [
    'https://jsonplaceholder.typicode.com/photos?albumId=1',
    'https://jsonplaceholder.typicode.com/photos?albumId=3',
    'https://jsonplaceholder.typicode.com/photos?albumId=5',
    'https://jsonplaceholder.typicode.com/photos?albumId=7',
    'https://jsonplaceholder.typicode.com/photos?albumId=9',
]

let asyncRequest = function (cb, wordCount, index = 0, result = []) {
    if (index == urls.length - 1) {
        return cb(result);
    }

    fetch(urls[index])
        .then(response => {
            response.json()
                .then(data => {
                    mergedResult = result.concat(sortData(data, wordCount));
                    asyncRequest(cb, wordCount, index + 1, mergedResult);
                })
        })
}

let sortData = (data, wordCount) => {
    let filteredData = data.filter((el) => {
        return el.title.split(" ").length === wordCount;
    })

    let result = filteredData.map((el) => {
        return {
            id: el.id,
            title: el.title}
    })
    return result;
}

module.exports = { asyncRequest: asyncRequest };