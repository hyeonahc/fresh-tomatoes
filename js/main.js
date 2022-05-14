import 'regenerator-runtime';

async function getMovie(name, page = 1) {
  let res = await fetch(
    `https://www.omdbapi.com?apikey=7035c60c&s=${name}&page=1`
  );
  res = await res.json();
  return res;
}

let page = 1;
let totalResults = 0;
const searchEl = document.querySelector('.search input');
const searchBtnEl = document.querySelector('.search .fa-magnifying-glass');

searchBtnEl.addEventListener('click', async () => {
  page = 1;
  const movies = await getMovie(searchEl.value, page);
  page = 2;
  const { Search, totalResults } = movies;
  const gridContainerEl = document.querySelector('.grid-container');

  Search.forEach(movie => {
    const movieNode = document
      .querySelector('div.grid-item.hidden')
      .cloneNode(true);
    movieNode.classList.remove('hidden');
    movieNode.querySelector('img').src = movie.Poster;
    movieNode.querySelector(
      'a'
    ).href = `https://www.imdb.com/title/${movie.imdbID}/`;
    movieNode.querySelector('.poster-title').innerHTML = movie.Title;
    movieNode.querySelector('.poster-year').innerHTML = movie.Year;
    gridContainerEl.append(movieNode);
  });
});
