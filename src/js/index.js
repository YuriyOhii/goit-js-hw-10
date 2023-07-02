import '../css/common.css';
import refs from './refs.js';
import { Cat_API } from './cat-api.js';
import { fillInBreeds, renderCatCard, showErrorMessage } from './functions.js';

const cat_API = new Cat_API();

refs.select.addEventListener('change', onSelectCheck);

cat_API
  .fetchBreeds()
  .then(data => {
    fillInBreeds(data);
    refs.select.classList.remove('is-hidden');
  })
  .catch(showErrorMessage)

  .finally(refs.loader.classList.add('is-hidden'));

function onSelectCheck({ target }) {
  refs.cardContainer.innerHTML = '';
  refs.loader.classList.remove('is-hidden');
  cat_API.catBreed = target.value;

  cat_API
    .fetchCatByBreed()
    .then(data => {
      renderCatCard(data);
      refs.loader.classList.add('is-hidden');
    })
    .catch(showErrorMessage);
}
