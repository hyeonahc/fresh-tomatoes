import 'regenerator-runtime';

const getMovie = async (name, page) => {
  let res = await fetch(
    `https://www.omdbapi.com?apikey=7035c60c&s=${name}&page=${page}`
  );
  res = await res.json();
  return res;
};

let page = 1;
let totalResults = 0;
const inputEl = document.querySelector('.search input');
const closeEl = document.querySelector('.search .fa-xmark');
const welcomePageEl = document.querySelector('.welcome-page');
const h1El = document.querySelector('h1');
const h2El = document.querySelector('h2');
const moviePageEl = document.querySelector('.movie-page');
const movieContainerEl = document.querySelector('.movie-container');
const detailContainerEl = document.querySelector('.detail-container');
const detailContainerOverlayEl = document.querySelector(
  '.detail-container-overlay'
);

inputEl.addEventListener('keypress', async e => {
  if (e.key === 'Enter') {
    // Q: How to change focused element? (from input element to something else)
    // moviePageEl.focus();
    e.preventDefault();
    const movies = await getMovie(inputEl.value, page);

    if (movies.totalResults) {
      const movieItemEls = document.querySelectorAll(
        '.movie-item:not(.hidden)'
      );
      if (movieItemEls.length > 0) {
        movieItemEls.forEach(movieItemEl => {
          movieContainerEl.removeChild(movieItemEl);
        });
      }
      welcomePageEl.classList.add('hidden');
      moviePageEl.classList.remove('hidden');
      renderMovie(movies);
    } else {
      welcomePageEl.classList.remove('hidden');
      moviePageEl.classList.add('hidden');
      if (movies.Response === 'False') {
        h1El.innerHTML = 'Sorry :(';
        h2El.innerHTML = `No results found for <span>"${inputEl.value}"</span>`;
      }
      if (inputEl.value === '') {
        h1El.innerHTML = 'Forgot to type?';
        h2El.innerHTML = `Type something to find your favourite movie!`;
      }
    }
  }
});

// Q: It's not efficient to fire keyup event everytime. What is a better way to create this feature?
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

// Q: Why async with arrow function is not working?
function renderMovie(movies) {
  const { Search, totalResults } = movies;
  Search.forEach(movie => {
    const movieNode = document
      .querySelector('div.movie-item.hidden')
      .cloneNode(true);
    movieNode.classList.remove('hidden');
    movieNode.querySelector('img').src = movie.Poster;
    movieNode.querySelector('.movie-title').innerHTML = movie.Title;
    movieNode.querySelector('.movie-year').innerHTML = movie.Year;
    movieContainerEl.append(movieNode);
  });
  const movieItemEls = document.querySelectorAll('.movie-item:not(.hidden)');
  openMovieDetail(movieItemEls);
  // page = 2;
  // loadMore(page);
}

const openMovieDetail = movieItemEls => {
  movieItemEls.forEach(movieItemEl => {
    movieItemEl.addEventListener('click', () => {
      detailContainerEl.classList.remove('hidden');
      detailContainerOverlayEl.classList.remove('hidden');
    });
  });
};

const closeMovieDetail = () => {
  detailContainerEl.classList.add('hidden');
  detailContainerOverlayEl.classList.add('hidden');
};

document.querySelector('.close-detail-item').addEventListener('click', () => {
  closeMovieDetail();
});

detailContainerOverlayEl.addEventListener('click', () => {
  closeMovieDetail();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMovieDetail();
  }
});

/* Create lazy load using intersection observer (NOT WORKING)
const loadMore = page => {
  // const loadMoreEl = document.querySelector('.load-more');
  const movieItemEls = document.querySelectorAll('.movie-item:not(.hidden)');

  const movieItemObserver = new IntersectionObserver(entries => {
    entries.forEach(
      entry => {
        console.log(entry);
        const { isIntersecting } = entry;
        console.log(isIntersecting);
        if (isIntersecting) {
          // page += 1;
          // console.log('page', page);
          // renderMovie(page)
          // movieItemObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 1,
      }
    );
  });

  movieItemEls.forEach(movieItemEl => {
    movieItemObserver.observe(movieItemEl);
  });
};
*/
