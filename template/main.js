const API_KEY = '8395500b5f2f826139c96542584cefd8';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const language = 'language=pt-BR';

function getMovie() {
  var movieid = Math.floor(Math.random() * 500 + 1);
  console.log(movieid);


  function getfilm() {
  axios.get(BASE_URL+ movieid + "?api_key=" + API_KEY + "&" + language)
  .then(response => {
    console.log(response.data.poster_path);
    const dImg = response.data.poster_path;
    nome.textContent = response.data.original_title;
    overview.textContent = response.data.overview
    showMovie(dImg);
  })
  .catch(error => console.log(error))
}

getfilm();

}

function procurar() {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", getMovie);
}

procurar();

function showMovie(imagem) {
  const img = document.getElementById("img");
  img.src = `${IMG_URL}${imagem}`
}
