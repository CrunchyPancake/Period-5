const baseUrl = 'https://swapi.co/api/';
const fetch = require('node-fetch')

let getPlanetforFirstSpeciesInFirstMovieForPerson = function (id) {
    let characterName, firstFilm, firstSpecies, homeWorld = '';
    fetch(baseUrl + 'people/' + id)
        .then(response => {
            response.json().then(data => {
                characterName = JSON.stringify(data.name);
                console.log(characterName, firstFilm, firstSpecies, homeWorld)
                
            })
        }).then( () => {
        firstFilm = 'Find First Film'
        }).then( () => {
            firstSpecies = "Find First Species"
        }).then( () => {
            homeWorld = "Find Home Planet"
        }).catch(err => {
            console.log(err);
        })

    return;

}
module.exports = { getPlanetforFirstSpeciesInFirstMovieForPerson: getPlanetforFirstSpeciesInFirstMovieForPerson };