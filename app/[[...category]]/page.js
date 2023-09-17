import React from "react";
import HomeContainer from "@/containers/home";

import {
  getPopularMovies,
  getTopRatedMovies,
  getSingleCategory,
  getCategories,
} from "@/services/movie";

async function HomePage({ params }) {
  let selectedCategory;

  // const { results: popularMovies } = await getPopularMovies();
  // const { results: topRatedMovies } = await getTopRatedMovies();

  //Daha hizli olmasi adina

  const topRatedPromise = getTopRatedMovies();
  const popularPromise = getPopularMovies();
  const categoriesPromise = getCategories();

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
  ] = await Promise.all([topRatedPromise, popularPromise, categoriesPromise]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}
export default HomePage;
