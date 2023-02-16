const seancesTemplates = `
    <section class="seances">
        <div class="container">
            <div class="seances__wrap">
                <svg class="seances__logo">
                    <use href="./assets/img/sprite.svg#cinema_logo"></use>
                </svg>
                <div class="seances__days">
                    <div class="seances__days-btns">
                        <button class="seances__days-btn">Сегодня</button>
                        <button class="seances__days-btn">Завтра</button>
                        <button class="seances__days-btn seances__days-btn-choose">
                            <span class="seances__days-btn-choose-text">Выбрать день</span>
                            <svg class="seances__days-btn-choose-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="seances__days-calendar">
                        <button class="seances__days-calendar-btn">
                            <span class="seances__days-calendar--day-week">вт</span>
                            <span class="seances__days-calendar--day-month">7</span>
                        </button>
                        <button class="seances__days-calendar-btn">
                            <span class="seances__days-calendar--day-week">ср</span>
                            <span class="seances__days-calendar--day-month">8</span>
                        </button>
                        <button class="seances__days-calendar-btn">
                            <span class="seances__days-calendar--day-week">чт</span>
                            <span class="seances__days-calendar--day-month">9</span>
                        </button>
                        <button class="seances__days-calendar-btn">
                            <span class="seances__days-calendar--day-week">пт</span>
                            <span class="seances__days-calendar--day-month">10</span>
                        </button>
                        <button class="seances__days-calendar-btn seances__days-calendar-btn--holiday">
                            <span class="seances__days-calendar--day-week">сб</span>
                            <span class="seances__days-calendar--day-month">11</span>
                        </button>
                        <button class="seances__days-calendar-btn seances__days-calendar-btn--holiday">
                            <span class="seances__days-calendar--day-week">вс</span>
                            <span class="seances__days-calendar--day-month">12</span>
                        </button>
                        <button class="seances__days-calendar-btn">
                            <span class="seances__days-calendar--day-week">пн</span>
                            <span class="seances__days-calendar--day-month">13</span>
                        </button>
                        <button class="seances__days-calendar-btn">
                            <span class="seances__days-calendar--day-week">вт</span>
                            <span class="seances__days-calendar--day-month">14</span>
                        </button>
                        <button class="seances__days-calendar-btn">
                            <span class="seances__days-calendar--day-week">ср</span>
                            <span class="seances__days-calendar--day-month">15</span>
                        </button>
                    </div>
                </div>
                <div class="seances__movie">
                    <a href="">
                        <img class="seances__movie-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8e0994cf-f72d-4aed-ab5f-1abf29530200/300x450" alt="">
                    </a>
                    <div class="seances__movie-info-block">
                        <a href="">
                            <h2 class="seances__movie-name">
                                О чем говорят мужчины.  
                                Простые удовольствия
                            </h2>
                        </a>
                        <span class="seances__movie-info">2022, комедия (93 мин)</span>
                        <p class="seances__movie-desc">
                            Дело было в далеком 2019-м году… Встретившись субботним утром, чтобы выпить
                            шампанского, друзья отправляются в новое путешествие по глубинам мужского
                            подсознания. О чем же на этот раз говорят мужчины? Конечно, о личном. Леша пытается
                            понять существует ли «женская дружба», Камиль рассуждает, можно ли уволить лучшего
                            друга, ловелас Слава вспоминает первую любовь (или это была не она?), а Саша
                            размышляет о потере отца и умению жить и радоваться каждому новому дню. А еще,
                            прогуливаясь по центру города, друзья обсуждают, как вкрутить лампочку, чтобы она
                            осталась довольна, о чем кричат откровенные фото в социальных сетях, и что такое
                            чевапчичи. Они вернулись поговорить о вечном, и о личном, и о всяких пустяках…
                            короче, обо всем.
                        </p>
                        <button class="seances__movie-trailer-btn">Смотреть трейлер</button>
                    </div>
                    <div class="seances__movie-rates">
                        <span class="seances__movie-rate rate-num--common">6.7</span>
                        <span class="seances__movie-rate-count">3 509 оценок</span>
                        <button class="seances__movie-review-btn">Оценить фильм</button>
                        <span class="seances__movie-reviews">Рецензий: 2</span>
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
                                    <button class="seances__item-time-option-btn">14:30</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">16:30</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">18:30</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">20:30</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">22:30</button>
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
                                    <button class="seances__item-time-option-btn">09:30</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">11:30</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">13:30</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">15:30</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">17:30</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">19:30</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">21:30</button>
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
                                    <button class="seances__item-time-option-btn">10:00</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">12:00</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">14:00</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">18:00</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">20:00</button>
                                </li>
                                <li class="seances__item-time-option">
                                    <button class="seances__item-time-option-btn">22:00</button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
`;

export default seancesTemplates;
