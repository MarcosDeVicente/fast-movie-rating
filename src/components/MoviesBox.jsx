import { useState } from "react";
//components
import MovieCard from "./MovieCard";
//styles
import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin: 0 auto;
  padding-top: 10px;
  overflow: scroll;
`;

const MoviesBox = ({ apiMovies }) => {
  return (
    <Contenedor>
      {apiMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}></MovieCard>
      ))}
    </Contenedor>
  );
};

export default MoviesBox;
