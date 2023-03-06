class SearchView {
  #prentElement = document.querySelector('.search');
  getQuery() {
    // get and return input value
    let inputVlue = this.#prentElement.querySelector('.search__field').value;
    this.#clearInput();
    return inputVlue;
  }
  #clearInput() {
    this.#prentElement.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this.#prentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
