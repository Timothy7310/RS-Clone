// import { debounce } from 'lodash';
// import debounce from './test';
import ControllerTestKP from '../controller/controllerTestKP';
import { MovieTestType } from '../types/types';

class Search {
    controllerTestKP;

    constructor() {
        this.controllerTestKP = new ControllerTestKP();
    }

    async searchEvent(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.closest('.header__search-input')) {
            const { value } = target;
            const res = await this.controllerTestKP.searchMovie(value);
            const searchResultsDOM = document.querySelector('.header__search-results') as HTMLElement;
            searchResultsDOM.classList.remove('header__search-results--hidden');
            this.renderSearchList(res);
        }
    }

    // eslint-disable-next-line class-methods-use-this
    renderSearchList(movies: MovieTestType) {
        let result = '';
        const searchResultDOM = document.querySelector('.header__search-results-wrap') as HTMLElement;
        movies.docs.forEach((movie) => {
            result += `
                <article class="header__search-result">
                    <a href="#/movie/${movie.id}" class="header__search-result-link"></a>
                    <img src="${movie.poster.previewUrl || movie.poster.url}" class="header__search-result-poster" alt="">
                    <div class="header__search-result-text-wrap">
                        <h4 class="header__search-result-name">${movie.name || movie.alternativeName}</h4>
                        <div class="header__search-result-info">
                            <span class="header__search-result-rate rate-num--good">${movie.rating.kp.toFixed(1)}</span>
                            <span class="header__search-result-type">${movie.type === 'movie' ? 'фильм' : 'сериал'}</span>
                            <span class="header__search-result-year">${movie.year}</span>
                        </div>
                    </div>
                </article>
            `;
        });
        searchResultDOM.innerHTML = result;
    }
}

export default Search;
