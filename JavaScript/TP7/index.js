const apiKey = 'c6e8a39968221629b7e511aa7eb78499';
const movieContainer = document.getElementById('movie-container');
const loadingMessage = document.getElementById('loading-message');
const button = document.querySelector(".button")
const input = document.getElementById("search-term")
const clear = document.querySelector(".delete")
const selectLanguage = document.getElementById("Langue");
const tagContainer = document.querySelector(".categories")
const IMG_URL = "https://image.tmdb.org/t/p/w500";
let genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

function displayCategories(){
    genres.forEach(genre => {
        const tag = document.createElement("option")
        tag.classList.add("tag")
        tag.setAttribute("value", genre.id)
        tag.innerHTML = genre.name
        tagContainer.appendChild(tag)
    });
}
displayCategories()

async function getMoviesByCategorie(id){
    try {
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
        const response  = await fetch(apiUrl)
        const data = await response.json()
        let results = data.results
        console.log(results)
        results.forEach(movie => {
            displayMovie(movie)
        });
    }
    catch (error) {
        console.error(error);   
    }
}
tagContainer.addEventListener("change", (e)=>{
    movieContainer.innerHTML = ""
    let id = e.target.value
    // console.log(id)
    getMoviesByCategorie(id)
})

let page = 1;
let isLoading = false;
let lang = localStorage.getItem("lang") || "";
if (lang) {
  selectLanguage.value = lang; 
}
selectLanguage.addEventListener("change", (e)=>{
    lang= e.target.value
    console.log(lang)
    localStorage.setItem("lang",lang)
    window.location.reload()
})
function displayMovie(movie) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card', 'loading'); 

    const movieImage = document.createElement('img');
    movieImage.setAttribute("draggable", false)
    movieImage.src = `${IMG_URL + movie.poster_path}`;
    if (movie.poster_path == null) {
        movieImage.src = "images/Profil.jpg";
    }
    movieImage.alt = movie.title;

    movieImage.addEventListener('load', () => {
        movieCard.classList.remove('loading');
    });
    movieImage.addEventListener('error', () => {
        movieCard.classList.remove('loading');
    });

    const movieTitle = document.createElement('h2');
    movieTitle.innerHTML = movie.title + " " + `<span class="vote">${movie.vote_average}</span>`;

    const movieDescription = document.createElement('p');
    movieDescription.textContent = movie.overview;
    if (movie.overview == "") {
        movieDescription.innerHTML = "chargement de la description en cours... </br>Ceci pourrait prendre un bon moment. </br> Temps estimé avant la fin du chargement: <b>125ans 7mois 12jours 7h</b>"
    }
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieDescription);

    movieContainer.appendChild(movieCard);
}

async function getMovies() {
    try {
        isLoading = true;
        loadingMessage.style.display = 'block';
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}&language=${lang}&include_adult=false`)
        const data = await response.json()
        const movies = data.results
        movies.forEach((movie) => {
            displayMovie(movie)
    });
        isLoading = false;
        loadingMessage.style.display = 'none';
        page++;
    }catch (error) {
        console.error(error);
    }
}

let pageSearch = 1
let searchLoading = false
async function searchMovie(query){
    try {
        searchLoading = true;
        loadingMessage.style.display = 'block';
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${lang}&query=${query}&page=${pageSearch}&include_adult=false`
        const response  = await fetch(apiUrl)
        const data = await response.json()
        let results = data.results
        console.log(results)
        results.forEach(movie => {
            displayMovie(movie)
        });
        searchLoading = false;
        loadingMessage.style.display = 'none';
        pageSearch++;
    } catch (error) {
        console.log(error)
    }
}

button.addEventListener("click", (e)=>{
    e.preventDefault()
    let toSearch = input.value
    console.log(toSearch)
    searchMovie(toSearch)
    movieContainer.innerHTML = ""
})
window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // console.log("=================debut===================");
    // console.log("scrollHeight" + scrollHeight)
    // console.log("Clientheight" + clientHeight)
    // console.log("scrollTop" + scrollTop)
    // console.log("==================FIN====================");
     if(scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
        getMovies();
    }
});
clear.addEventListener("click", ()=>{
    input.value = ""
})
getMovies();