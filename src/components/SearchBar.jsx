import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const H1 = styled.h2`
  font-family: "Lato", sans-serif;
  margin: 0;
  color: grey;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 300px;
  height: 100px;
`;
const SearchInput = styled.input`
  background-color: white;
  border: none;
  border-radius: 30px;
  color: black;
  font-family: inherit;
  font-size: inherit;
  outline: 0;
  padding: 10px;
  width: 100%;
  font-family: "Lato", sans-serif;
`;

const SearchBar = ({ setSearchMovies }) => {
  const [inputValue, setInputValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchMovies(inputValue);
  };

  return (
    <Container>
      <H1>🍿 Encuentra tu película 🍿</H1>
      <Form onSubmit={handleSubmit}>
        <SearchInput onChange={(e) => setInputValue(e.target.value)} />
      </Form>
    </Container>
  );
};

export default SearchBar;
