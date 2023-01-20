import React from "react";
//styles
import styled from "styled-components";

const Movie = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  width: 80%;
  height: 90px;
  margin-bottom: 35px;
  border-radius: 26px;
  background: linear-gradient(
    0deg,
    rgba(45, 45, 45, 1) 0%,
    rgba(54, 54, 54, 1) 100%
  );
  box-shadow: 5px 5px 10px #1d1d1d, -5px -5px 10px #2b2b2b;
`;
const Image = styled.img`
  height: 90px;
  width: auto;
  border-radius: 5px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-left: 10%;
  font-family: "Lato", sans-serif;
  color: grey;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  }
`;
const Title = styled.p`
  margin: 0;
`;
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Rating = styled.div`
  background-color: #505558;
  padding: 5px;
  border-radius: 10px;
  margin-right: 10px;
`;
const RatingNumber = styled.p`
  color: #ffc900;
`;

const renderStars = (rating) => {
  console.log();
  if (rating >= 10) {
    return <>🌕 🌕 🌕 🌕 🌕</>;
  } else if (rating < 10 && rating > 8) {
    return <>🌕 🌕 🌕 🌕 🌗</>;
  } else if (rating >= 8) {
    return <>🌕 🌕 🌕 🌕 🌑</>;
  } else if (rating < 8 && rating > 6) {
    return <>🌕 🌕 🌕 🌗 🌑</>;
  } else if (rating >= 6) {
    return <>🌕 🌕 🌕 🌑 🌑</>;
  } else if (rating < 6 && rating > 4) {
    return <>🌕 🌕 🌗 🌑 🌑</>;
  } else if (rating >= 4) {
    return <>🌕 🌕 🌑 🌑 🌑</>;
  } else if (rating < 4 && rating > 2) {
    return <>🌕 🌕 🌗 🌑 🌑</>;
  } else if (rating >= 2) {
    return <>🌕 🌑 🌑 🌑 🌑</>;
  } else if (rating < 2 && rating > 0) {
    return <>🌗 🌑 🌑 🌑 🌑</>;
  } else if (rating == 0) {
    return <>🌑 🌑 🌑 🌑 🌑</>;
  }
};

const MovieCard = ({ movie }) => {
  const { title, poster_path, vote_average } = movie;
  return (
    <Movie>
      <Image src={`https://image.tmdb.org/t/p/original/${poster_path}`}></Image>
      <Info>
        <Title>{title}</Title>
        <RatingContainer>
          <Rating>{renderStars(vote_average)}</Rating>
          <RatingNumber>{vote_average}</RatingNumber>
        </RatingContainer>
      </Info>
    </Movie>
  );
};

export default MovieCard;
