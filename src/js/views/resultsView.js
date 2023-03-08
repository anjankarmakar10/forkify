import icons from 'url:../../img/icons.svg';
import View from './View';
class ResultView extends View {
  _prentElement = document.querySelector('.results');
  _errMessage = 'No recipe found for your query! Please try again.';
  _message = '';
  _generateMarkup() {
    return this._data
      .map(recipe => this._generateMarkupPrivew(recipe))
      .join('');
  }
  _generateMarkupPrivew(recipe) {
    return `
        <li class="preview">
                <a class="preview__link" href="#${recipe.id}">
                <figure class="preview__fig">
                    <img src="${recipe.image}" alt="${recipe.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${recipe.title}</h4>
                    <p class="preview__publisher">${recipe.publisher}Woman</p>
                    
                </div>
                </a>
            </li>
    `;
  }
}

export default new ResultView();
