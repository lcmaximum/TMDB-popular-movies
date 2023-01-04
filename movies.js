//The movies.js file is responsible for rendering the movies with the data from api.js.
//The functions in this file will be used in App.js to render the app.
import { getPopularMovies } from "./api.js";
import { config } from "./config.js";

const moviesDiv = document.getElementById("movies");
export async function renderMovies() {
  console.log("render movies");
  const movies = await getPopularMovies();
  console.log("movies", movies);
  moviesDiv.innerHTML = movies
    .map((movie) => {
      return `<div class='col-4 col-lg-3 col-xl-2 p-1'>
      <a href='https://themoviedb.org/movie/${movie.id}'><img src='${config.image_base_url}${movie.poster_path}'></a> </div>`;
    })
    .join("");
}
