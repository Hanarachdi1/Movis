import "./App.css";
import { dataMovies } from "./components/Data"
import  BasicCard from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/Add";
import { useState } from 'react';

function App() {

  const [moviesList, setMoviesList] = useState(dataMovies)
  const getNewMovie = (newM) => {
    setMoviesList([...moviesList, { ...newM, id: moviesList.length }])
  }
  // console.log(dataMovies);
  // ;
  return (
    <div className="App">
              {dataMovies.map(el=>< BasicCard el={el}/>)}
              <Add getNewMovie={getNewMovie} />
    </div>
    
  );
}

export default App;