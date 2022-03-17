import './App.css';
import { Route, Routes } from 'react-router-dom';
import StarshipsList from './Pages/StarshipsList/StarshipsList';
import StarshipPage from './Pages/StarshipPage/StarshipPage';

function App() {
  return (
    <>
    <h1>STAR WARS STARSHIPS</h1>
    <Routes>
      <Route path="/" element={<StarshipsList />}/>
      <Route path="/starship" element={<StarshipPage />}/>
    </Routes>
    </>
  );
}

export default App;
