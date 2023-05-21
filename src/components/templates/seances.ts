import { TMovie } from './movie/typesMovie';

function newUrl(url: string) {
    return url.replace('/watch?v=', '/embed/');
}
const seancesTemplates = (movie: TMovie) => {
    const genres: string = movie.genres.reduce((acc: string[], x) => {
        acc.push(x.name);
        return acc;
    }, []).join(', ');

    const d = new Date();

    const trailers = movie?.videos?.trailers.filter((x) => x.site === 'youtube');

    const template = `
        <section class="seances">
            <div class="container">
                <div class="seances__wrap">
                    <svg class="seances__logo">
                        <use href="./assets/img/sprite.svg#cinema_logo"></use>
                    </svg>
                    <div class="seances__days">
                        <div class="seances__days-btns">
                            <button class="seances__days-btn" id="seances-today" data-date="${d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}">Сегодня</button>
                            <button class="seances__days-btn" id="seances-tomorrow" data-date="${new Date(d.getTime() + 1 * 86400000).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}">Завтра</button>
                            <button class="seances__days-btn seances__days-btn-choose" id="seances-choose" data-date="${d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}">
                                <span class="seances__days-btn-choose-text">Выбрать день</span>
                                <svg class="seances__days-btn-choose-icon">
                                    <use href="./assets/img/sprite.svg#icon_back"></use>
                                </svg>
                            </button>
                        </div>
                        <div class="seances__days-calendar">
                        </div>
                    </div>
                    <div class="seances__movie">
                        <a href="#/movie/${movie.id}">
                            <img class="seances__movie-poster" src="${movie.poster.url}" alt="">
                        </a>
                        <div class="seances__movie-info-block">
                            <a href="#/movie/${movie.id}">
                                <h2 class="seances__movie-name">${movie.name}</h2>
                            </a>
                            <span class="seances__movie-info">${movie.year}, ${genres} (${movie.movieLength} мин)</span>
                            <p class="seances__movie-desc">${movie.description}</p>
                            ${trailers === undefined || trailers.length === 0 ? '' : `
                                <div class="basic__column_content_trailer">
                                    <iframe class="basic__column_content_trailer_size" src=${newUrl(trailers[0].url)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            `}
                        </div>
                        <div class="seances__movie-rates">
                            <span class="seances__movie-rate">${movie.rating.kp.toFixed(1)}</span>
                            <span class="seances__movie-rate-count">${movie.votes.kp} оценок</span>
                            <span class="seances__movie-reviews">Рецензий: ${movie.votes.filmCritics}</span>
                        </div>
                    </div>
                    <ul class="seances__list">
                        <li class="seances__item">
                            <div class="seances__item-place-block">
                                <h3 class="seances__item-place-title">Зал №1</h3> 
                                <span class="seances__item-place-type">Dolby Digital 2D</span>
                            </div>
                            <div class="seances__item-time">
                                <span class="seances__item-time-type">2D</span>
                                <ul class="seances__item-time-list">
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="1">14:30</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="1">16:30</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="1">18:30</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="1">20:30</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="1">22:30</button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="seances__item">
                            <div class="seances__item-place-block">
                                <h3 class="seances__item-place-title">Зал №2</h3> 
                                <span class="seances__item-place-type">Dolby Digital 2D</span>
                            </div>
                            <div class="seances__item-time">
                                <span class="seances__item-time-type">2D</span>
                                <ul class="seances__item-time-list">
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="2">09:30</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="2">11:30</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="2">13:30</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="2">15:30</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="2">17:30</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="2">19:30</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="2">21:30</button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="seances__item">
                            <div class="seances__item-place-block">
                                <h3 class="seances__item-place-title">Зал №3</h3> 
                                <span class="seances__item-place-type">Dolby Digital 2D Prime</span>
                            </div>
                            <div class="seances__item-time">
                                <span class="seances__item-time-type">2D</span>
                                <ul class="seances__item-time-list">
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="3">10:00</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="3">12:00</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="3">14:00</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="3">18:00</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="3">20:00</button>
                                    </li>
                                    <li class="seances__item-time-option">
                                        <button class="seances__item-time-option-btn" data-hall="3">22:00</button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    `;
    return template;
};

export default seancesTemplates;
