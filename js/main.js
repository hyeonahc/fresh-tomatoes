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
const searchEl = document.querySelector('.search input');
const closeEl = document.querySelector('.search .fa-xmark');

searchEl.addEventListener('keypress', async e => {
  if (e.key === 'Enter' && page === 1) {
    e.preventDefault();
    document.querySelector('.welcome-page').classList.add('hidden');
    document.querySelector('.movie-page').classList.remove('hidden');
    let movies = await getMovie(searchEl.value, page);
    renderMovie(movies);
  }
});

// Q: It's not efficient to fire keyup event everytime. What is the better way to create this feature?
searchEl.addEventListener('keyup', () => {
  if (searchEl.value) {
    closeEl.classList.remove('hidden');
  } else {
    closeEl.classList.add('hidden');
  }
});

closeEl.addEventListener('click', () => {
  searchEl.value = '';
});

// async arrow function not working
function renderMovie(movies) {
  const { Search, totalResults } = movies;
  const movieContainerEl = document.querySelector('.movie-container');
  console.log(Search, totalResults);

  Search.forEach(movie => {
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
  // page = 2;
  // loadMore(page);
}

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
