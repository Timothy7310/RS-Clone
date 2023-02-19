import GenerateTables from '../movie/generateTables';
import { TMovie } from '../movie/typesMovie';

const persons = new GenerateTables();

const movieCard = (movie: TMovie): string => `
<li class="movies__card">
<div class="movies__card-first-info">
    <a href="#/movie/${movie.id}">
        <img class="movies__card-poster" src=${movie.poster.previewUrl} alt="">
    </a>
    <div class="movies__card-text">
        <a href="#/movie/${movie.id}">
            <h3 class="movies__card-name">${movie.name}</h3>
            <div class="movies__card-rate rate--good">${movie.rating.kp.toFixed(1)}</div>
        </a>
        <span class="movies__card-name-original">${movie.countries.map((x: { name: string; }) => x.name).slice(0, 2).join(', ')}, ${movie.year}</span>
        <span class="movies__card-genres">${movie.genres.map((x: { name: string; }) => x.name).join(', ')}</span>
        <div class="movies__card-cast">
            <span class="movies__card-cast-text">В главных ролях:</span>
            <span class="movies__card-cast-roles">${persons.getActorsMovies(movie.persons)}</span>
        </div>
        <div class="movies__card-filmmakers">
            <span class="movies__card-filmmakers-text">Режисер:</span>
            <span class="movies__card-filmmakers-directors">${persons.getDirector(movie.persons)}</span>
        </div>
    </div>
</div>
<div class="movies__card-second-info">
    <div class="movies__card-rates">
    <div>
        <span class="movies__card-rates-num rate-num--good">${movie.rating.kp.toFixed(1)}</span>
        <span class="movies__card-rates-count">${movie.votes.kp}оценок</span>
    </div>
        <ul class="movies__card-rates-stars">
            <li class="movies__card-rates-star">
                <svg class="movies__card-rates-star-icon movies__card-rates-star-icon--active">
                    <use href="./assets/img/sprite.svg#star"></use>
                </svg>
            </li>
            <li class="movies__card-rates-star">
                <svg class="movies__card-rates-star-icon movies__card-rates-star-icon--active">
                    <use href="./assets/img/sprite.svg#star"></use>
                </svg>
            </li>
            <li class="movies__card-rates-star">
                <svg class="movies__card-rates-star-icon movies__card-rates-star-icon--active">
                    <use href="./assets/img/sprite.svg#star"></use>
                </svg>
            </li>
            <li class="movies__card-rates-star">
                <svg class="movies__card-rates-star-icon movies__card-rates-star-icon--active">
                    <use href="./assets/img/sprite.svg#star"></use>
                </svg>
            </li>
            <li class="movies__card-rates-star">
                <svg class="movies__card-rates-star-icon movies__card-rates-star-icon--active">
                    <use href="./assets/img/sprite.svg#star"></use>
                </svg>
            </li>
            <li class="movies__card-rates-star">
                <svg class="movies__card-rates-star-icon movies__card-rates-star-icon--active">
                    <use href="./assets/img/sprite.svg#star"></use>
                </svg>
            </li>
            <li class="movies__card-rates-star">
                <svg class="movies__card-rates-star-icon movies__card-rates-star-icon--active">
                    <use href="./assets/img/sprite.svg#star"></use>
                </svg>
            </li>
            <li class="movies__card-rates-star">
                <svg class="movies__card-rates-star-icon movies__card-rates-star-icon--active">
                    <use href="./assets/img/sprite.svg#star"></use>
                </svg>
            </li>
            <li class="movies__card-rates-star">
                <svg class="movies__card-rates-star-icon">
                    <use href="./assets/img/sprite.svg#star"></use>
                </svg>
            </li>
            <li class="movies__card-rates-star">
                <svg class="movies__card-rates-star-icon">
                    <use href="./assets/img/sprite.svg#star"></use>
                </svg>
            </li>
        </ul>
        <svg class="movies__card-rates-will-tablet">
            <use href="./assets/img/sprite.svg#icon_add_watch"></use>
        </svg>
        <button class="movies__card-rates-will-watch">
            <svg class="movies__card-rates-will-watch-icon">
                <use href="./assets/img/sprite.svg#icon_add_watch"></use>
            </svg>
            <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
        </button>
    </div>
    <div class="movies__card-watch">
        <div class="movies__card-watch-block">
            <span class="movies__card-watch-block-title">Посмотреть в кинотеатре</span>
            <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline" disabled="">
                <svg class="movies__card-watch-block-btn-icon">
                    <use href="./assets/img/sprite.svg#icon_tickets"></use>
                </svg>
                <span class="movies__card-watch-block-btn-text">Билеты</span>
            </button>
        </div>
        <div class="movies__card-watch-block">
            <span class="movies__card-watch-block-title">Посмотреть online</span>
            <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online">
                <span class="movies__card-watch-block-btn-text">Посмотреть</span>
            </button>
        </div>
    </div>
</div>
</li>`;

export default movieCard;
