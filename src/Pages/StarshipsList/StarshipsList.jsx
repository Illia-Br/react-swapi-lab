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
    <div>
    {starships.length ? 
        starships.map(starship => (
          <Link to='/starship' state={{starship}} key={starship.name}>
            <div>
              {starship.name}
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