class Cat_API {
    #API_KEY;
    #BASE_URL;
  constructor() {
    this.#API_KEY =
      'live_gUyKMIPXYlwzs67KbUZ11vjeXdPwKjUV4J7bV3JMCjqyz4pvxI3vRy4gbyMof5Jn';
    this.#BASE_URL = 'https://api.thecatapi.com/v1/';
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
};

export {Cat_API}
