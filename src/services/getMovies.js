const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "ce5424884e45717855c7a6c155122707";

export const getMovies = async (searchKey, query) => {
  if (!searchKey || !query) return;
  const type = searchKey ? "search" : "discover";
  const respuesta = await fetch(
    `${API_URL}/${type}/movie?api_key=${API_KEY}&query=${query}`
  );
  const resultado = await respuesta.json();
  return resultado.results;
};
