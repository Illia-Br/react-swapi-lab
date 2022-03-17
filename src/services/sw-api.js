function getAllStarships() {
  return fetch('https://swapi.dev/api/starships/')
    .then(res => res.json())
}

function getStarshipDetails(shipUrl) {
  return fetch(`${shipUrl}`)
    .then(res => res.json())
}

export {
  getAllStarships,
  getStarshipDetails
}