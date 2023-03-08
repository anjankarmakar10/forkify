import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    let markup = this._generateMarkup();
    this._clear();
    this._prentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._prentElement.innerHTML = '';
  }

  renderSpnier = () => {
    const markup = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this._clear();
    this._prentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderError(message = this._errMessage) {
    let markup = ` <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._prentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
