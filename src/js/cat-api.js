class Cat_API {
    #API_KEY;
    #BASE_URL;
  constructor() {
    this.#API_KEY =
      'live_gUyKMIPXYlwzs67KbUZ11vjeXdPwKjUV4J7bV3JMCjqyz4pvxI3vRy4gbyMof5Jn';
    this.#BASE_URL = 'https://api.thecatapi.com/v1/';
    this.catBreedId = null;
  }

  fetchBreeds() {
    const options = new URLSearchParams({
      api_key: this.#API_KEY,
    });
      return fetch(`${this.#BASE_URL}breeds?${options}`).then(responce => {
        if (!responce.ok) throw new Error(responce.status);
        return responce.json();
      });
  }

  fetchCatByBreed() {
const options = new URLSearchParams({
  api_key: this.#API_KEY,
  breed_ids: this.catBreedId,
});
return fetch(`${this.#BASE_URL}images/search?${options}`).then(responce => {
  if (!responce.ok) throw new Error(responce.status);
  return responce.json();
});
  }

  set catBreed(newBreed) {
    this.catBreedId = newBreed;
  }


};

export {Cat_API}
