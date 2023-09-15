import React from "react";
import MovieContainer from "@/containers/movie";

import Movies from "@/mocks/movies";

async function MoviePage({ params }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
