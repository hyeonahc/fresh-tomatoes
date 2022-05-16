import 'regenerator-runtime';

async function getMovie(name, page) {
  let res = await fetch(
    `https://www.omdbapi.com?apikey=7035c60c&s=${name}&page=${page}`
  );
  res = await res.json();
  return res;
}

let page = 1;
let totalResults = 0;
const searchEl = document.querySelector('.search input');
const searchBtnEl = document.querySelector('.search .fa-magnifying-glass');

searchBtnEl.addEventListener('click', async () => {
  document.querySelector('.welcome-page').classList.add('hidden');
  document.querySelector('.movie-page').classList.remove('hidden');
  page = 1;
  const movies = await getMovie(searchEl.value, page);
  console.log(movies);
  page = 2;
  const { Search, totalResults } = movies;
  const movieContainerEl = document.querySelector('.movie-container');
  console.log(Search, totalResults);

  Search.forEach(movie => {
    console.log(movie);
    const movieNode = document
      .querySelector('div.movie-item.hidden')
      .cloneNode(true);
    movieNode.classList.remove('hidden');
    movieNode.querySelector('img').src = movie.Poster;
    movieNode.querySelector(
      'a'
    ).href = `https://www.imdb.com/title/${movie.imdbID}/`;
    movieNode.querySelector('.movie-title').innerHTML = movie.Title;
    movieNode.querySelector('.movie-year').innerHTML = movie.Year;
    movieContainerEl.append(movieNode);
  });
});
