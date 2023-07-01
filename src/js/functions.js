import refs from "./refs.js";
function fillInBreeds(data) {
const breedsSelectorMarkup = data.map(
  breed => `<option value="${breed.id}">${breed.name}</option>`
    ).join('');
    refs.select.insertAdjacentHTML('beforeend', breedsSelectorMarkup)
};

export {fillInBreeds}