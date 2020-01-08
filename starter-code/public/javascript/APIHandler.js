class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL);
  }

  getOneRegister() {
    return axios.get(this.BASE_URL/id);
  }

  createOneRegister(characterInfo) {
    return axios.post(this.BASE_URL, characterInfo);
  }

  updateOneRegister(updatedCharacterInfo) {
    return axios.patch(this.BASE_URL, updatedCharacterInfo);
  }

  deleteOneRegister() {}
}
