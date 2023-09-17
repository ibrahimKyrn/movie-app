import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MovieSection from "@/components/movie-section";

function HomeContainer({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={popularMovies?.[0]} />
      <Categories categories={categories.slice(0, 6)} />

      {selectedCategory.movies.length > 0 && (
        <MovieSection
          title={
            categories.find((genre) => `${genre.id}` === selectedCategory.id)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MovieSection title="Popular Filmls" movies={popularMovies.slice(0, 7)} />
      <MovieSection
        title="Top Rated Movies"
        movies={topRatedMovies.slice(0, 7)}
      />
    </div>
  );
}
export default HomeContainer;
