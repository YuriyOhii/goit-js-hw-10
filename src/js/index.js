import "../css/common.css";
import refs from "./refs.js";
import { Cat_API } from "./cat-api.js";
import { fillInBreeds, renderCatCard } from "./functions.js";

const cat_API = new Cat_API();
cat_API.fetchBreeds().then(data => {
    fillInBreeds(data);
    refs.loader.classList.add('is-hidden');
})

refs.select.addEventListener('change', onSelectCheck);

function onSelectCheck({target}) {
    cat_API.catBreed = target.value;
    cat_API.fetchCatByBreed().then(renderCatCard)
}
