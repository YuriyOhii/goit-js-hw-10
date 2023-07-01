import "../css/common.css";
import refs from "./refs.js";
import { Cat_API } from "./cat-api.js";
import { fillInBreeds } from "./functions.js";

const cat_API = new Cat_API();
cat_API.fetchBreeds().then(data => {
    fillInBreeds(data);
    refs.loader.classList.add('is-hidden');
}).catch(refs.errorMessage.classList.remove('is-hidden'));

console.log(refs)
