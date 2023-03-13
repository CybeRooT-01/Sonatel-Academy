const apiKey = "c6e8a39968221629b7e511aa7eb78499";
const movieList = document.getElementById("movie-list");

async function getMovieDetails(movieId) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=fr`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data)
  return data;
}

async function searchMovie(query) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr&query=${query}&include_adult=false`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results;
}

// Fonction pour afficher les films dans la liste
function displayMovies(movies) {
  movieList.innerHTML = "";  //suprime la liste de film actuel
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>${movie.release_date}</p>
      <p class="description"></p>
    `;
    movieList.appendChild(li);
    // Affiche la description au survol de la souris
    const description = li.querySelector(".description");
    li.addEventListener("mouseenter", async () => {
      const movieDetails = await getMovieDetails(movie.id);
      description.textContent = movieDetails.overview;
    });
    li.addEventListener("mouseleave", () => {
      description.textContent = "";
    });
  });
}
// Gestionnaire d'événements pour la soumission du formulaire
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Empêche le formulaire de se soumettre
  const searchTerm = document.getElementById("search-term").value.trim();
  if (searchTerm !== "") {
    const movies = await searchMovie(searchTerm);
    displayMovies(movies);
  }
});