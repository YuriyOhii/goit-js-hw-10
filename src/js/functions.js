import refs from './refs.js';

function fillInBreeds(data) {
  const breedsSelectorMarkup = data
    .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
    .join('');
  refs.select.insertAdjacentHTML('beforeend', breedsSelectorMarkup);
}

function renderCatCard(data) {
  const cat = data[0].breeds[0];
  console.dir(cat);
  const catCardMarkup = `<img class="card-img" src="${data[0].url}" alt="Cat of ${cat.name} breed" width="480">
  <h2 class="card-title">${cat.name}</h2>
  <p class="cat-description">${cat.description}</p>
  <p class="cat-temperament">${cat.temperament}</p>`;

  refs.cardContainer.innerHTML = catCardMarkup;
}

export { fillInBreeds, renderCatCard };
