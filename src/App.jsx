import { useState, useEffect } from "react";
//components
import SearchBar from "./components/SearchBar";
import MoviesBox from "./components/MoviesBox";
//services
import { getMovies } from "./services/getMovies";
//styles
import "./App.css";
import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 900px;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  //states
  const [searchMovies, setSearchMovies] = useState("");
  const [apiMovies, setApiMovies] = useState([]);

  //First Call
  useEffect(() => {
    if (Object.keys(searchMovies).length) {
      const fetchData = async () => {
        const searchedMovies = await getMovies("search", searchMovies);
        const filteredByPath = searchedMovies.filter(
          // si no tienen imágen, no las muestres
          (movie) => movie.poster_path !== null
        );
        const moviesByRating = filteredByPath.sort(
          (a, b) => b.vote_average - a.vote_average
        );
        setApiMovies(moviesByRating);
      };
      fetchData();
    }
  }, [searchMovies]);

  return (
    <div className="App">
      <Contenedor>
        <SearchBar setSearchMovies={setSearchMovies} />
        {searchMovies && <MoviesBox apiMovies={apiMovies} />}
      </Contenedor>
    </div>
  );
}

export default App;
