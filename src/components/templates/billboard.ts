const billboardTemplate = `
    <section class="billboard">
        <div class="container">
            <div class="billboard__wrap">
                <div class="billboard__head">
                    <h2 class="billboard__head-title">Афиша кино</h2>
                    <svg class="billboard__head-icon">
                        <use href="./assets/img/sprite.svg#cinema_logo"></use>
                    </svg>
                </div>
                <div class="billboard__days">
                    <div class="billboard__days-btns">
                        <button class="billboard__days-btn">Сегодня</button>
                        <button class="billboard__days-btn">Завтра</button>
                        <button class="billboard__days-btn billboard__days-btn-choose">
                            <span class="billboard__days-btn-choose-text">Выбрать день</span>
                            <svg class="billboard__days-btn-choose-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="billboard__days-calendar">
                        <button class="billboard__days-calendar-btn">
                            <span class="billboard__days-calendar--day-week">вт</span>
                            <span class="billboard__days-calendar--day-month">7</span>
                        </button>
                        <button class="billboard__days-calendar-btn">
                            <span class="billboard__days-calendar--day-week">ср</span>
                            <span class="billboard__days-calendar--day-month">8</span>
                        </button>
                        <button class="billboard__days-calendar-btn">
                            <span class="billboard__days-calendar--day-week">чт</span>
                            <span class="billboard__days-calendar--day-month">9</span>
                        </button>
                        <button class="billboard__days-calendar-btn">
                            <span class="billboard__days-calendar--day-week">пт</span>
                            <span class="billboard__days-calendar--day-month">10</span>
                        </button>
                        <button class="billboard__days-calendar-btn billboard__days-calendar-btn--holiday">
                            <span class="billboard__days-calendar--day-week">сб</span>
                            <span class="billboard__days-calendar--day-month">11</span>
                        </button>
                        <button class="billboard__days-calendar-btn billboard__days-calendar-btn--holiday">
                            <span class="billboard__days-calendar--day-week">вс</span>
                            <span class="billboard__days-calendar--day-month">12</span>
                        </button>
                        <button class="billboard__days-calendar-btn">
                            <span class="billboard__days-calendar--day-week">пн</span>
                            <span class="billboard__days-calendar--day-month">13</span>
                        </button>
                        <button class="billboard__days-calendar-btn">
                            <span class="billboard__days-calendar--day-week">вт</span>
                            <span class="billboard__days-calendar--day-month">14</span>
                        </button>
                        <button class="billboard__days-calendar-btn">
                            <span class="billboard__days-calendar--day-week">ср</span>
                            <span class="billboard__days-calendar--day-month">15</span>
                        </button>
                    </div>
                </div>
                <ul class="billboard__list">
                    <li class="billboard__item">
                        <a href="#/cinema/seances" class="billboard__item-link">
                            <span class="billboard__item-rate rate--common">6.7</span>
                            <div class="billboard__item-tickets">
                                <svg class="billboard__item-tickets-icon">
                                    <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                </svg>
                                <span class="billboard__item-tickets-text">Билеты</span>
                            </div>
                            <div class="billboard__item-poster-wrap">
                                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8e0994cf-f72d-4aed-ab5f-1abf29530200/300x450" alt="" class="billboard__item-poster">
                            </div>
                            <h3 class="billboard__item-name">
                                О чем говорят мужчины. Простые удовольствия
                            </h3>
                            <span class="billboard__item-info">2022, комедия (93 мин)</span>
                        </a>
                    </li>
                    <li class="billboard__item">
                        <a href="#/cinema/seances" class="billboard__item-link">
                            <span class="billboard__item-rate rate--common">6.7</span>
                            <div class="billboard__item-tickets">
                                <svg class="billboard__item-tickets-icon">
                                    <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                </svg>
                                <span class="billboard__item-tickets-text">Билеты</span>
                            </div>
                            <div class="billboard__item-poster-wrap">
                                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8e0994cf-f72d-4aed-ab5f-1abf29530200/300x450" alt="" class="billboard__item-poster">
                            </div>
                            <h3 class="billboard__item-name">
                                О чем говорят мужчины. Простые удовольствия
                            </h3>
                            <span class="billboard__item-info">2022, комедия (93 мин)</span>
                        </a>
                    </li>
                    <li class="billboard__item">
                        <a href="#/cinema/seances" class="billboard__item-link">
                            <span class="billboard__item-rate rate--common">6.7</span>
                            <div class="billboard__item-tickets">
                                <svg class="billboard__item-tickets-icon">
                                    <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                </svg>
                                <span class="billboard__item-tickets-text">Билеты</span>
                            </div>
                            <div class="billboard__item-poster-wrap">
                                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8e0994cf-f72d-4aed-ab5f-1abf29530200/300x450" alt="" class="billboard__item-poster">
                            </div>
                            <h3 class="billboard__item-name">
                                О чем говорят мужчины. Простые удовольствия
                            </h3>
                            <span class="billboard__item-info">2022, комедия (93 мин)</span>
                        </a>
                    </li>
                    <li class="billboard__item">
                        <a href="#/cinema/seances" class="billboard__item-link">
                            <span class="billboard__item-rate rate--common">6.7</span>
                            <div class="billboard__item-tickets">
                                <svg class="billboard__item-tickets-icon">
                                    <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                </svg>
                                <span class="billboard__item-tickets-text">Билеты</span>
                            </div>
                            <div class="billboard__item-poster-wrap">
                                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8e0994cf-f72d-4aed-ab5f-1abf29530200/300x450" alt="" class="billboard__item-poster">
                            </div>
                            <h3 class="billboard__item-name">
                                О чем говорят мужчины. Простые удовольствия
                            </h3>
                            <span class="billboard__item-info">2022, комедия (93 мин)</span>
                        </a>
                    </li>
                    <li class="billboard__item">
                        <a href="#/cinema/seances" class="billboard__item-link">
                            <span class="billboard__item-rate rate--common">6.7</span>
                            <div class="billboard__item-tickets">
                                <svg class="billboard__item-tickets-icon">
                                    <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                </svg>
                                <span class="billboard__item-tickets-text">Билеты</span>
                            </div>
                            <div class="billboard__item-poster-wrap">
                                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8e0994cf-f72d-4aed-ab5f-1abf29530200/300x450" alt="" class="billboard__item-poster">
                            </div>
                            <h3 class="billboard__item-name">
                                О чем говорят мужчины. Простые удовольствия
                            </h3>
                            <span class="billboard__item-info">2022, комедия (93 мин)</span>
                        </a>
                    </li>
                    <li class="billboard__item">
                        <a href="#/cinema/seances" class="billboard__item-link">
                            <span class="billboard__item-rate rate--common">6.7</span>
                            <div class="billboard__item-tickets">
                                <svg class="billboard__item-tickets-icon">
                                    <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                </svg>
                                <span class="billboard__item-tickets-text">Билеты</span>
                            </div>
                            <div class="billboard__item-poster-wrap">
                                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8e0994cf-f72d-4aed-ab5f-1abf29530200/300x450" alt="" class="billboard__item-poster">
                            </div>
                            <h3 class="billboard__item-name">
                                О чем говорят мужчины. Простые удовольствия
                            </h3>
                            <span class="billboard__item-info">2022, комедия (93 мин)</span>
                        </a>
                    </li>
                    <li class="billboard__item">
                        <a href="#/cinema/seances" class="billboard__item-link">
                            <span class="billboard__item-rate rate--common">6.7</span>
                            <div class="billboard__item-tickets">
                                <svg class="billboard__item-tickets-icon">
                                    <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                </svg>
                                <span class="billboard__item-tickets-text">Билеты</span>
                            </div>
                            <div class="billboard__item-poster-wrap">
                                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8e0994cf-f72d-4aed-ab5f-1abf29530200/300x450" alt="" class="billboard__item-poster">
                            </div>
                            <h3 class="billboard__item-name">
                                О чем говорят мужчины. Простые удовольствия
                            </h3>
                            <span class="billboard__item-info">2022, комедия (93 мин)</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
`;

export default billboardTemplate;
