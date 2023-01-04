//The api.js file handles async requests to the TMDB API.

import { config } from "./config.js";

const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;

export async function getPopularMovies(page = 1) {
  console.log("get popular movies");
  let data = [];
  try {
    const response = await fetch(
      `${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`
    );
    const responseData = await response.json();
    console.log("response data ", responseData);
    data = responseData?.results;
    console.log(data);
  } catch (error) {}
  return data;
}
