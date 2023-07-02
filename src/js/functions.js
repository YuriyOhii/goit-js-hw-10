import refs from './refs.js';

function fillInBreeds(data) {
  const breedsSelectorMarkup = data
    .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
    .join('');
  refs.select.insertAdjacentHTML('beforeend', breedsSelectorMarkup);
}

function renderCatCard(data) {
  const cat = data[0].breeds[0];
  const catCardMarkup = `<img class="card-img item" src="${data[0].url}" alt="Cat of ${cat.name} breed" width="480">
 <div class="text-wrap item"> <h2 class="card-title">${cat.name}</h2>
  <p class="cat-description"><b>Description: </b>${cat.description}</p>
  <p class="cat-temperament"><b>Temperament: </b>${cat.temperament}</p></div>`;

  refs.cardContainer.innerHTML = catCardMarkup;
};

function showErrorMessage(er) {
  refs.select.classList.add('is-hidden');
  refs.loader.classList.add('is-hidden');
  refs.errorMessage.insertAdjacentHTML('beforeend',` ${er}`);
  refs.errorMessage.classList.remove('is-hidden');
}

export { fillInBreeds, renderCatCard, showErrorMessage };
