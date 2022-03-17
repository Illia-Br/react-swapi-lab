import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/sw-api";

const StarshipsList = (props) => {
  
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    getAllStarships()
      .then(starshipData => setStarships(starshipData.results))
  }, [])

  return ( 
    <>
    <div className="ships-container">
    {starships.length ? 
        starships.map(starship => (
          <Link to='/starship' state={{starship}} key={starship.name} style={{ textDecoration: 'none' }}>
            <div className="ship-container">
              <p>{starship.name}</p> 
            </div>
          </Link> 
        ))
        :
        <h3>Starships are loading...</h3>
      }
    </div>
    </>
   );
}
 
export default StarshipsList;