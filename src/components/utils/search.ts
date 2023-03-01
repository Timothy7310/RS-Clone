import ControllerTestKP from '../controller/controllerTestKP';
import { MovieTestType } from '../types/types';
import MoviesTop from '../pages/movies/movies';
import CardGenerator from '../templates/movies/movieCard';

class Search {
    controllerTestKP;

    moviesTop;

    constructor() {
        this.controllerTestKP = new ControllerTestKP();
        this.moviesTop = new MoviesTop();
    }

    async searchEvent(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.closest('.header__search-input')) {
            const btn = document.querySelector('.header__search-btn') as HTMLButtonElement;
            const { value } = target;
            btn.disabled = true;
            const res = await this.controllerTestKP.searchMovie(value);
            const searchResultsDOM = document.querySelector('.header__search-results') as HTMLElement;
            searchResultsDOM.classList.remove('header__search-results--hidden');
            await this.renderSearchList(res);
            btn.disabled = false;
        }
    }

    async renderSearchPage(event: Event) {
        const target = event.target as HTMLFormElement;

        if (target.closest('.header__search-form')) {
            event.preventDefault();
            const input = document.querySelector('.header__search-input') as HTMLInputElement;
            window.location.href = '#/movies';

            const pageData = await this.controllerTestKP.searchMovie(input.value);
            const id = await this.moviesTop.getRandomeId();

            if (pageData) {
                const movies = await this.moviesTop.getMoviesFromPageData(pageData.docs);
                const generator = new CardGenerator();
                await generator.reloadWatchList();
                this.moviesTop.drawPage(movies, pageData, id, generator);
            }
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
