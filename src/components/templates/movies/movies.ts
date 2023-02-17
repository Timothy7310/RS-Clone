import { TMovie } from '../movie/typesMovie';
import movieCard from './movieCard';

const moviesTemplates = (movie: TMovie[]): string => `
    <section class="movies">
        <div class="container">
            <div class="movies__wrap">
                <div class="movies__head">
                    <h2 class="movies__title">
                        Фильмы
                    </h2>
                    <button class="movies__random">
                        Показать случайный фильм
                    </button>
                </div>
                <span class="movies__count">Найдено (250)</span>
                <div class="movies__pagination movies__pagination--top">
                    <button class="movies__pagination-btn movies__pagination-btn--first" disabled="">
                        <div class="movies__pagination-btn-icon-wrap">
                            <svg class="movies__pagination-btn-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                            <svg class="movies__pagination-btn-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                        </div>
                    </button>
                    <button class="movies__pagination-btn movies__pagination-btn--prev" disabled="">
                        <svg class="movies__pagination-btn-icon">
                            <use href="./assets/img/sprite.svg#icon_back"></use>
                        </svg>
                    </button>
                    <ul class="movies__pagination-list">
                        <li class="movies__pagination-item">
                            <button class="movies__pagination-btn movies__pagination-btn--active">1</button>
                        </li>
                        <li class="movies__pagination-item">
                            <button class="movies__pagination-btn">2</button>
                        </li>
                        <li class="movies__pagination-item">
                            <button class="movies__pagination-btn">3</button>
                        </li>
                        <li class="movies__pagination-item">
                            <span class="movies__pagination-item-dots">...</span>
                        </li>
                        <li class="movies__pagination-item">
                            <button class="movies__pagination-btn">10</button>
                        </li>
                    </ul>
                    <button class="movies__pagination-btn movies__pagination-btn--next">
                        <svg class="movies__pagination-btn-icon">
                            <use href="./assets/img/sprite.svg#icon_back"></use>
                        </svg>
                    </button>
                    <button class="movies__pagination-btn movies__pagination-btn--last">
                        <div class="movies__pagination-btn-icon-wrap">
                            <svg class="movies__pagination-btn-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                            <svg class="movies__pagination-btn-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                        </div>
                    </button>
                </div>
                <ul class="movies__list">
                    ${movie.map((item: TMovie) => movieCard(item)).join('')}
                </ul>
                <div class="movies__pagination movies__pagination--bottom">
                    <button class="movies__pagination-btn movies__pagination-btn--first" disabled="">
                        <div class="movies__pagination-btn-icon-wrap">
                            <svg class="movies__pagination-btn-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                            <svg class="movies__pagination-btn-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                        </div>
                    </button>
                    <button class="movies__pagination-btn movies__pagination-btn--prev" disabled="">
                        <svg class="movies__pagination-btn-icon">
                            <use href="./assets/img/sprite.svg#icon_back"></use>
                        </svg>
                    </button>
                    <ul class="movies__pagination-list">
                        <li class="movies__pagination-item">
                            <button class="movies__pagination-btn movies__pagination-btn--active">1</button>
                        </li>
                        <li class="movies__pagination-item">
                            <button class="movies__pagination-btn">2</button>
                        </li>
                        <li class="movies__pagination-item">
                            <button class="movies__pagination-btn">3</button>
                        </li>
                        <li class="movies__pagination-item">
                            <span class="movies__pagination-item-dots">...</span>
                        </li>
                        <li class="movies__pagination-item">
                            <button class="movies__pagination-btn">10</button>
                        </li>
                    </ul>
                    <button class="movies__pagination-btn movies__pagination-btn--next">
                        <svg class="movies__pagination-btn-icon">
                            <use href="./assets/img/sprite.svg#icon_back"></use>
                        </svg>
                    </button>
                    <button class="movies__pagination-btn movies__pagination-btn--last">
                        <div class="movies__pagination-btn-icon-wrap">
                            <svg class="movies__pagination-btn-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                            <svg class="movies__pagination-btn-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
`;

export default moviesTemplates;
