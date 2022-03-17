import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { getStarshipDetails } from "../../services/sw-api";



const StarshipPage = (props) => {
  
  const [starship, setStarship] = useState({})
  let location = useLocation()
  
  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
      .then(shipData => setStarship(shipData))
  }, [])


  return ( 
    <>
    {starship.name ?
    <div>
      <p>NAME: {starship.name}</p>
      <p>MODEL: {starship.model}</p>
      <Link to="/" >RETURN</Link>
    </div>
    :
    <p>Loading ship details...</p>
    }
    </>
   );
}
 
export default StarshipPage;