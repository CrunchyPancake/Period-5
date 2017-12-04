const baseUrl = 'https://swapi.co/api/';
const fetch = require('node-fetch')

let getPlanetforFirstSpeciesInFirstMovieForPerson = function (id, cb) {
    let characterName, firstFilm, firstSpecies, homeWorld = '';
    fetch(baseUrl + 'people/' + id)
        .then(response => {
            return response.json()
                .then(data => {
                    characterName = JSON.stringify(data.name);
                    return data;
                })
        })
        .then((data) => {
            let films = data.films.sort();
            fetch(films[0])
                .then(response => {
                    return response.json()
                        .then(data => {
                            firstFilm = JSON.stringify(data.title);
                            return data;
                        })
                }).then(data => {
                    let species = data.species.sort();
                    fetch(species[0])
                        .then(response => {
                            return response.json()
                                .then(data => {
                                    firstSpecies = JSON.stringify(data.name)
                                    return data;
                                })
                        }).then(data => {
                            let planet = data.homeworld;
                            fetch(planet)
                                .then(response => {
                                    return response.json()
                                        .then(data => {
                                            homeWorld = JSON.stringify(data.name)
                                            return cb(characterName, firstSpecies, firstFilm, homeWorld);
                                        })
                                })
                        })

                })
        })

}
module.exports = { getPlanetforFirstSpeciesInFirstMovieForPerson: getPlanetforFirstSpeciesInFirstMovieForPerson };