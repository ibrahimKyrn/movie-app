import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MovieSection from "@/components/movie-section";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/Genres.json";

function HomeContainer({ selectedCategory }) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 6)} />
      {selectedCategory.movies.length > 0 && (
        <MovieSection
          title={
            Genres.genres.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MovieSection
        title="Popular Filmls"
        movies={Movies.results.slice(0, 7)}
      />
      <MovieSection
        title="Random Movies"
        movies={Movies.results.slice(10, 17)}
      />
    </div>
  );
}
export default HomeContainer;
