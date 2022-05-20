import 'regenerator-runtime';

// variable declaration
let page = 1;
let totalResults = 0;
let initialRequest;
const logoEl = document.querySelector('.logo');
const inputEl = document.querySelector('.search input');
const closeEl = document.querySelector('.search .fa-xmark');
const welcomePageEl = document.querySelector('.welcome-page');
const tomatoImg = document.querySelector('.welcome-page .tomato');
const h1El = document.querySelector('h1');
const h2El = document.querySelector('h2');
const moviePageEl = document.querySelector('.movie-page');
const movieContainerEl = document.querySelector('.movie-container');
const movieCardEl = document.querySelector('.movie-card');
const movieCardOverlayEl = document.querySelector('.movie-card-overlay');
const loadNothingEl = document.querySelector('.load-nothing');
const loadMoreEl = document.querySelector('.load-more');
const loadMoreAnimationEl = document.querySelector('.load-more-animation');

// Refresh page when logo is clicked
logoEl.addEventListener('click', () => {
  location.reload();
});

// fetch movie data
const getMovie = async (name, page) => {
  let res = await fetch(
    `https://www.omdbapi.com?apikey=7035c60c&s=${name}&page=${page}`
  );
  res = await res.json();
  return res;
};

// type keyword and submit
inputEl.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    inputEl.blur();
    searchMovie();
  }
});

// input UX
inputEl.addEventListener('keyup', () => {
  if (inputEl.value) {
    closeEl.classList.remove('hidden');
  } else {
    closeEl.classList.add('hidden');
  }
});

closeEl.addEventListener('click', () => {
  clearInputValue();
});

inputEl.addEventListener('click', () => {
  clearInputValue();
});

const clearInputValue = () => {
  inputEl.value = '';
};

// search movie using input value
const searchMovie = async () => {
  initialRequest = true;
  page = 1;
  const movies = await getMovie(inputEl.value, page);
  const { Search, totalResults, Response, Error } = movies;
  if (Response === 'True') {
    welcomePageEl.classList.add('hidden');
    moviePageEl.classList.remove('hidden');
    loadMoreEl.classList.remove('hidden');
    clearExistingMovie();
    renderMovie(Search, totalResults);
  } else {
    welcomePageEl.classList.remove('hidden');
    moviePageEl.classList.add('hidden');
    loadMoreEl.classList.add('hidden');
    errorPage(Error);
  }
  initialRequest = false;
};

// clear existing movie items when the user searches movies again
const clearExistingMovie = () => {
  if (movieContainerEl.hasChildNodes()) {
    let child = movieContainerEl.lastElementChild;
    while (child) {
      movieContainerEl.removeChild(child);
      child = movieContainerEl.lastElementChild;
    }
  }
};

// create element for movie item and append it
function renderMovie(Search, totalResults) {
  Search.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
    const poster = document.createElement('div');
    poster.classList.add('poster');
    const img = document.createElement('img');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const info = document.createElement('div');
    info.classList.add('info');
    const movieTitle = document.createElement('div');
    movieTitle.classList.add('movie-title');
    const movieYear = document.createElement('div');
    movieYear.classList.add('movie-year');

    movieItem.append(poster);
    poster.append(img, overlay);
    overlay.append(info);
    info.append(movieTitle, movieYear);

    const { Poster, Title, Year, imdbID } = movie;
    movieItem.setAttribute('data-imdbid', imdbID);

    function setMoviePosterSrc() {
      if (Poster === 'N/A') {
        // [HELP WANTED] Why does this image not change?
        // return '../img/image-not-available.png';
        return 'https://user-images.githubusercontent.com/83247825/169230743-9c6d8b88-3513-4e29-9970-922f173f03a0.png';
      } else {
        return Poster;
      }
    }
    img.src = setMoviePosterSrc();

    movieTitle.innerHTML = Title;
    movieYear.innerHTML = Year;

    movieContainerEl.append(movieItem);
  });
  moviePageEl.append(movieContainerEl);
  const movieItemEls = document.querySelectorAll('.movie-item');
  openMovieDetail(movieItemEls);
}

// handle error message
const errorPage = error => {
  // [HELP WANTED] Why does this image not change?
  // tomatoImg.src = '../img/tomato-frown.png';
  tomatoImg.src =
    'https://user-images.githubusercontent.com/83247825/169230530-b1487b42-6fa0-464e-a8df-2ff2aa2d6325.png';
  if (error === 'Incorrect IMDb ID.') {
    h1El.innerHTML = 'Forgot to type?';
    h2El.innerHTML = `Type something to find your favourite movie!`;
  } else if (error === 'Movie not found!') {
    h1El.innerHTML = 'Sorry :(';
    h2El.innerHTML = `No results found for <span>"${inputEl.value}"</span>`;
  }
};

// execute infinite scroll using intersection observer
const infiniteScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const { isIntersecting } = entry;
    if (isIntersecting) {
      loadMoreMovie();
    }
  });
});
infiniteScroll.observe(loadMoreEl);

// when load more button is observed, render more movies
const loadMoreMovie = async () => {
  loadMoreAnimationEl.classList.remove('hidden');
  page += 1;
  const movies = await getMovie(inputEl.value, page);
  const { Search, totalResults } = movies;
  if (totalResults !== undefined) {
    loadNothingEl.classList.add('hidden');
    renderMovie(Search, totalResults);
    setTimeout(() => {
      loadMoreAnimationEl.classList.add('hidden');
    }, '1000');
  } else {
    setTimeout(() => {
      loadNothingEl.classList.remove('hidden');
    }, '1500');
  }
};

// fetch movie detail data using imdbID
const getMovieDetail = async id => {
  let res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&i=${id}`);
  res = await res.json();
  return res;
};

// open card when movie is clicked
const openMovieDetail = movieItemEls => {
  movieItemEls.forEach(movieItemEl => {
    movieItemEl.addEventListener('click', () => {
      movieCardEl.classList.remove('hidden');
      movieCardOverlayEl.classList.remove('hidden');
      const id = movieItemEl.getAttribute('data-imdbid');
      searchMovieDetail(id);
    });
  });
};

// search movie detail using id
const searchMovieDetail = async id => {
  const movieDetail = await getMovieDetail(id);
  renderMovieDetail(movieDetail);
};

// append data to movie card elements
const renderMovieDetail = movieDetail => {
  const {
    Poster,
    Title,
    imdbID,
    Genre,
    Plot,
    Released,
    Runtime,
    Director,
    Writer,
    Actors,
    Language,
    Country,
    Awards,
  } = movieDetail;

  const movieImg = document.querySelector('.movie-card .movie-img');
  function setMoviePosterSrc() {
    if (Poster === 'N/A') {
      // [HELP WANTED] Why does this image not change?
      // return '../img/image-not-available.png';
      return 'https://user-images.githubusercontent.com/83247825/169230743-9c6d8b88-3513-4e29-9970-922f173f03a0.png';
    } else {
      return Poster;
    }
  }
  movieImg.src = setMoviePosterSrc();

  const title = document.querySelector('.movie-card .movie-title')
    .childNodes[0];
  title.nodeValue = Title;
  document.querySelector(
    '.movie-card .movie-title a'
  ).href = `https://www.imdb.com/title/${imdbID}/`;

  const categoriesEl = document.querySelector('.movie-card .categories');
  let genreArr = Genre.split(', ');
  if (categoriesEl.hasChildNodes()) {
    let child = categoriesEl.lastElementChild;
    while (child) {
      categoriesEl.removeChild(child);
      child = categoriesEl.lastElementChild;
    }
  }
  genreArr.forEach(genre => {
    const category = document.createElement('div');
    category.classList.add('category');
    category.textContent = genre;
    categoriesEl.append(category);
  });

  document.querySelector('.movie-card p').textContent = Plot;
  document.querySelector('.release-date').textContent = Released;
  document.querySelector('.running-time').textContent = Runtime;
  document.querySelector('.directors').textContent = Director;
  document.querySelector('.writers').textContent = Writer;
  document.querySelector('.starring').textContent = Actors;
  document.querySelector('.language').textContent = Language;
  document.querySelector('.country').textContent = Country;
  document.querySelector('.awards').textContent = Awards;
};

// close movie card
const closeMovieDetail = () => {
  movieCardEl.classList.add('hidden');
  movieCardOverlayEl.classList.add('hidden');
};

document.querySelector('.close-movie-card').addEventListener('click', () => {
  closeMovieDetail();
});

movieCardOverlayEl.addEventListener('click', () => {
  closeMovieDetail();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMovieDetail();
  }
});
