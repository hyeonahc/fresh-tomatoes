import * as Popper from '@popperjs/core';
import {} from '../node_modules/bootstrap';
import 'regenerator-runtime';

// async & await
async function getMovie() {
  const { data } = await axios({
    url: 'https://www.omdbapi.com?apikey=7035c60c&s=frozen',
    method: 'GET',
  });
  console.log({ data });
}

getMovie();
