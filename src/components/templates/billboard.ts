const d = new Date();

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
                        <button class="billboard__days-btn" id="billboard-today" data-date="${d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}">Сегодня</button>
                        <button class="billboard__days-btn" id="billboard-tomorrow" data-date="${new Date(d.getTime() + 1 * 86400000).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}">Завтра</button>
                        <button class="billboard__days-btn billboard__days-btn-choose" id="billboard-choose">
                            <span class="billboard__days-btn-choose-text">Выбрать день</span>
                            <svg class="billboard__days-btn-choose-icon">
                                <use href="./assets/img/sprite.svg#icon_back"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="billboard__days-calendar">
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
