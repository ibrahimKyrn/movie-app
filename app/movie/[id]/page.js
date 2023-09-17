import React from "react";
import MovieContainer from "@/containers/movie";
import { getMovie } from "@/services/movie";

async function MoviePage({ params }) {
  const movieDetail = await getMovie(params.id);

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
