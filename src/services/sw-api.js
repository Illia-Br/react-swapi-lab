const baseUrl = 'https://swapi.dev/api/'

function getAllStarships() {
  return fetch(`${baseUrl}starships/`)
    .then(res => res.json())
}

export {
  getAllStarships
}