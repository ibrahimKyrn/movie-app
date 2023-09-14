import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/Genres.json";

function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 6)} />
    </div>
  );
}
export default HomeContainer;
