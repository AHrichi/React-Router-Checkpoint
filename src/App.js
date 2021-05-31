import { useState } from 'react';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

function App() {
  
  const [movies, setMovies] = useState([
    {
      title: "Game of thrones",
      description: "Genre : Fantasy",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
      rate: "3",
      trailerUrl:"https://www.youtube.com/embed/KPLWWIOCOOQ"
    },
    {
      title: "Breaking bad",
      description:
        "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rate: "4",
      trailerUrl:"https://www.youtube.com/embed/HhesaQXLuRY"
    },
    {
      title: "hunter x hunter",
      description:
        "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
      posterUrl:
        "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
      rate: "5",
      trailerUrl:"https://www.youtube.com/embed/DbylrrZ6C_k"
    },

  ])
  const add=(addMovie)=>{
    setMovies([...movies,addMovie])
  }
  return (
    <div className="App">
      
      <header className="App-header">
      
        <MovieList movies={movies}/>
        <AddMovie add={add}/>
      </header>
    </div>
  );
}

export default App;
