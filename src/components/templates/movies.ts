const moviesTemplates = `
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
                    <li class="movies__card">
                        <div class="movies__card-first-info">
                            <a href="#/movie">
                                <img class="movies__card-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/300x450" alt="">
                            </a>
                            <div class="movies__card-text">
                                <a href="">
                                    <h3 class="movies__card-name">Кот в сапогах 2: Последнее желание</h3>
                                </a>
                                <span class="movies__card-name-original">Puss in Boots: The Last Wish, 2022</span>
                                <span class="movies__card-genres">мультфильм, комедия, приключения</span>
                                <div class="movies__card-cast">
                                    <span class="movies__card-cast-text">В главных ролях:</span>
                                    <span class="movies__card-cast-roles">Антонио Бандерас, Сальма Хайек, Харви Гильен, Флоренс Пью</span>
                                </div>
                                <div class="movies__card-filmmakers">
                                    <span class="movies__card-filmmakers-text">Режисер:</span>
                                    <span class="movies__card-filmmakers-directors">Джоэль Кроуфорд, Хануэль...</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies__card-second-info">
                            <div class="movies__card-rates">
                                <span class="movies__card-rates-num rate-num--good">8.2</span>
                                <span class="movies__card-rates-count">67 666 оценок</span>
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
                                <button class="movies__card-rates-will-watch">
                                    <svg class="movies__card-rates-will-watch-icon">
                                        <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                                    </svg>
                                    <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
                                </button>
                            </div>
                            <div class="movies__card-watch">
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть в кинотеатре:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline" disabled="">
                                        <svg class="movies__card-watch-block-btn-icon">
                                            <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                        </svg>
                                        <span class="movies__card-watch-block-btn-text">Билеты</span>
                                    </button>
                                </div>
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть online:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online">
                                        <span class="movies__card-watch-block-btn-text">Посмотреть</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="movies__card">
                        <div class="movies__card-first-info">
                            <a href="">
                                <img class="movies__card-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/300x450" alt="">
                            </a>
                            <div class="movies__card-text">
                                <a href="">
                                    <h3 class="movies__card-name">Кот в сапогах 2: Последнее желание</h3>
                                </a>
                                <span class="movies__card-name-original">Puss in Boots: The Last Wish, 2022</span>
                                <span class="movies__card-genres">мультфильм, комедия, приключения</span>
                                <div class="movies__card-cast">
                                    <span class="movies__card-cast-text">В главных ролях:</span>
                                    <span class="movies__card-cast-roles">Антонио Бандерас, Сальма Хайек, Харви Гильен, Флоренс Пью</span>
                                </div>
                                <div class="movies__card-filmmakers">
                                    <span class="movies__card-filmmakers-text">Режисер:</span>
                                    <span class="movies__card-filmmakers-directors">Джоэль Кроуфорд, Хануэль...</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies__card-second-info">
                            <div class="movies__card-rates">
                                <span class="movies__card-rates-num rate-num--good">8.2</span>
                                <span class="movies__card-rates-count">67 666 оценок</span>
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
                                <button class="movies__card-rates-will-watch">
                                    <svg class="movies__card-rates-will-watch-icon">
                                        <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                                    </svg>
                                    <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
                                </button>
                            </div>
                            <div class="movies__card-watch">
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть в кинотеатре:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline">
                                        <svg class="movies__card-watch-block-btn-icon">
                                            <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                        </svg>
                                        <span class="movies__card-watch-block-btn-text">Билеты</span>
                                    </button>
                                </div>
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть online:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online" disabled="">
                                        <span class="movies__card-watch-block-btn-text">Посмотреть</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="movies__card">
                        <div class="movies__card-first-info">
                            <a href="">
                                <img class="movies__card-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/300x450" alt="">
                            </a>
                            <div class="movies__card-text">
                                <a href="">
                                    <h3 class="movies__card-name">Кот в сапогах 2: Последнее желание</h3>
                                </a>
                                <span class="movies__card-name-original">Puss in Boots: The Last Wish, 2022</span>
                                <span class="movies__card-genres">мультфильм, комедия, приключения</span>
                                <div class="movies__card-cast">
                                    <span class="movies__card-cast-text">В главных ролях:</span>
                                    <span class="movies__card-cast-roles">Антонио Бандерас, Сальма Хайек, Харви Гильен, Флоренс Пью</span>
                                </div>
                                <div class="movies__card-filmmakers">
                                    <span class="movies__card-filmmakers-text">Режисер:</span>
                                    <span class="movies__card-filmmakers-directors">Джоэль Кроуфорд, Хануэль...</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies__card-second-info">
                            <div class="movies__card-rates">
                                <span class="movies__card-rates-num rate-num--good">8.2</span>
                                <span class="movies__card-rates-count">67 666 оценок</span>
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
                                <button class="movies__card-rates-will-watch">
                                    <svg class="movies__card-rates-will-watch-icon">
                                        <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                                    </svg>
                                    <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
                                </button>
                            </div>
                            <div class="movies__card-watch">
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть в кинотеатре:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline">
                                        <svg class="movies__card-watch-block-btn-icon">
                                            <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                        </svg>
                                        <span class="movies__card-watch-block-btn-text">Билеты</span>
                                    </button>
                                </div>
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть online:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online">
                                        <span class="movies__card-watch-block-btn-text">Посмотреть</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="movies__card">
                        <div class="movies__card-first-info">
                            <a href="">
                                <img class="movies__card-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/300x450" alt="">
                            </a>
                            <div class="movies__card-text">
                                <a href="">
                                    <h3 class="movies__card-name">Кот в сапогах 2: Последнее желание</h3>
                                </a>
                                <span class="movies__card-name-original">Puss in Boots: The Last Wish, 2022</span>
                                <span class="movies__card-genres">мультфильм, комедия, приключения</span>
                                <div class="movies__card-cast">
                                    <span class="movies__card-cast-text">В главных ролях:</span>
                                    <span class="movies__card-cast-roles">Антонио Бандерас, Сальма Хайек, Харви Гильен, Флоренс Пью</span>
                                </div>
                                <div class="movies__card-filmmakers">
                                    <span class="movies__card-filmmakers-text">Режисер:</span>
                                    <span class="movies__card-filmmakers-directors">Джоэль Кроуфорд, Хануэль...</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies__card-second-info">
                            <div class="movies__card-rates">
                                <span class="movies__card-rates-num rate-num--good">8.2</span>
                                <span class="movies__card-rates-count">67 666 оценок</span>
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
                                <button class="movies__card-rates-will-watch">
                                    <svg class="movies__card-rates-will-watch-icon">
                                        <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                                    </svg>
                                    <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
                                </button>
                            </div>
                            <div class="movies__card-watch">
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть в кинотеатре:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline">
                                        <svg class="movies__card-watch-block-btn-icon">
                                            <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                        </svg>
                                        <span class="movies__card-watch-block-btn-text">Билеты</span>
                                    </button>
                                </div>
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть online:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online">
                                        <span class="movies__card-watch-block-btn-text">Посмотреть</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="movies__card">
                        <div class="movies__card-first-info">
                            <a href="">
                                <img class="movies__card-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/300x450" alt="">
                            </a>
                            <div class="movies__card-text">
                                <a href="">
                                    <h3 class="movies__card-name">Кот в сапогах 2: Последнее желание</h3>
                                </a>
                                <span class="movies__card-name-original">Puss in Boots: The Last Wish, 2022</span>
                                <span class="movies__card-genres">мультфильм, комедия, приключения</span>
                                <div class="movies__card-cast">
                                    <span class="movies__card-cast-text">В главных ролях:</span>
                                    <span class="movies__card-cast-roles">Антонио Бандерас, Сальма Хайек, Харви Гильен, Флоренс Пью</span>
                                </div>
                                <div class="movies__card-filmmakers">
                                    <span class="movies__card-filmmakers-text">Режисер:</span>
                                    <span class="movies__card-filmmakers-directors">Джоэль Кроуфорд, Хануэль...</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies__card-second-info">
                            <div class="movies__card-rates">
                                <span class="movies__card-rates-num rate-num--good">8.2</span>
                                <span class="movies__card-rates-count">67 666 оценок</span>
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
                                <button class="movies__card-rates-will-watch">
                                    <svg class="movies__card-rates-will-watch-icon">
                                        <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                                    </svg>
                                    <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
                                </button>
                            </div>
                            <div class="movies__card-watch">
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть в кинотеатре:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline">
                                        <svg class="movies__card-watch-block-btn-icon">
                                            <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                        </svg>
                                        <span class="movies__card-watch-block-btn-text">Билеты</span>
                                    </button>
                                </div>
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть online:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online">
                                        <span class="movies__card-watch-block-btn-text">Посмотреть</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="movies__card">
                        <div class="movies__card-first-info">
                            <a href="">
                                <img class="movies__card-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/300x450" alt="">
                            </a>
                            <div class="movies__card-text">
                                <a href="">
                                    <h3 class="movies__card-name">Кот в сапогах 2: Последнее желание</h3>
                                </a>
                                <span class="movies__card-name-original">Puss in Boots: The Last Wish, 2022</span>
                                <span class="movies__card-genres">мультфильм, комедия, приключения</span>
                                <div class="movies__card-cast">
                                    <span class="movies__card-cast-text">В главных ролях:</span>
                                    <span class="movies__card-cast-roles">Антонио Бандерас, Сальма Хайек, Харви Гильен, Флоренс Пью</span>
                                </div>
                                <div class="movies__card-filmmakers">
                                    <span class="movies__card-filmmakers-text">Режисер:</span>
                                    <span class="movies__card-filmmakers-directors">Джоэль Кроуфорд, Хануэль...</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies__card-second-info">
                            <div class="movies__card-rates">
                                <span class="movies__card-rates-num rate-num--good">8.2</span>
                                <span class="movies__card-rates-count">67 666 оценок</span>
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
                                <button class="movies__card-rates-will-watch">
                                    <svg class="movies__card-rates-will-watch-icon">
                                        <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                                    </svg>
                                    <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
                                </button>
                            </div>
                            <div class="movies__card-watch">
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть в кинотеатре:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline">
                                        <svg class="movies__card-watch-block-btn-icon">
                                            <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                        </svg>
                                        <span class="movies__card-watch-block-btn-text">Билеты</span>
                                    </button>
                                </div>
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть online:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online">
                                        <span class="movies__card-watch-block-btn-text">Посмотреть</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="movies__card">
                        <div class="movies__card-first-info">
                            <a href="">
                                <img class="movies__card-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/300x450" alt="">
                            </a>
                            <div class="movies__card-text">
                                <a href="">
                                    <h3 class="movies__card-name">Кот в сапогах 2: Последнее желание</h3>
                                </a>
                                <span class="movies__card-name-original">Puss in Boots: The Last Wish, 2022</span>
                                <span class="movies__card-genres">мультфильм, комедия, приключения</span>
                                <div class="movies__card-cast">
                                    <span class="movies__card-cast-text">В главных ролях:</span>
                                    <span class="movies__card-cast-roles">Антонио Бандерас, Сальма Хайек, Харви Гильен, Флоренс Пью</span>
                                </div>
                                <div class="movies__card-filmmakers">
                                    <span class="movies__card-filmmakers-text">Режисер:</span>
                                    <span class="movies__card-filmmakers-directors">Джоэль Кроуфорд, Хануэль...</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies__card-second-info">
                            <div class="movies__card-rates">
                                <span class="movies__card-rates-num rate-num--good">8.2</span>
                                <span class="movies__card-rates-count">67 666 оценок</span>
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
                                <button class="movies__card-rates-will-watch">
                                    <svg class="movies__card-rates-will-watch-icon">
                                        <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                                    </svg>
                                    <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
                                </button>
                            </div>
                            <div class="movies__card-watch">
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть в кинотеатре:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline">
                                        <svg class="movies__card-watch-block-btn-icon">
                                            <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                        </svg>
                                        <span class="movies__card-watch-block-btn-text">Билеты</span>
                                    </button>
                                </div>
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть online:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online">
                                        <span class="movies__card-watch-block-btn-text">Посмотреть</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="movies__card">
                        <div class="movies__card-first-info">
                            <a href="">
                                <img class="movies__card-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/300x450" alt="">
                            </a>
                            <div class="movies__card-text">
                                <a href="">
                                    <h3 class="movies__card-name">Кот в сапогах 2: Последнее желание</h3>
                                </a>
                                <span class="movies__card-name-original">Puss in Boots: The Last Wish, 2022</span>
                                <span class="movies__card-genres">мультфильм, комедия, приключения</span>
                                <div class="movies__card-cast">
                                    <span class="movies__card-cast-text">В главных ролях:</span>
                                    <span class="movies__card-cast-roles">Антонио Бандерас, Сальма Хайек, Харви Гильен, Флоренс Пью</span>
                                </div>
                                <div class="movies__card-filmmakers">
                                    <span class="movies__card-filmmakers-text">Режисер:</span>
                                    <span class="movies__card-filmmakers-directors">Джоэль Кроуфорд, Хануэль...</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies__card-second-info">
                            <div class="movies__card-rates">
                                <span class="movies__card-rates-num rate-num--good">8.2</span>
                                <span class="movies__card-rates-count">67 666 оценок</span>
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
                                <button class="movies__card-rates-will-watch">
                                    <svg class="movies__card-rates-will-watch-icon">
                                        <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                                    </svg>
                                    <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
                                </button>
                            </div>
                            <div class="movies__card-watch">
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть в кинотеатре:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline">
                                        <svg class="movies__card-watch-block-btn-icon">
                                            <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                        </svg>
                                        <span class="movies__card-watch-block-btn-text">Билеты</span>
                                    </button>
                                </div>
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть online:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online">
                                        <span class="movies__card-watch-block-btn-text">Посмотреть</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="movies__card">
                        <div class="movies__card-first-info">
                            <a href="">
                                <img class="movies__card-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/300x450" alt="">
                            </a>
                            <div class="movies__card-text">
                                <a href="">
                                    <h3 class="movies__card-name">Кот в сапогах 2: Последнее желание</h3>
                                </a>
                                <span class="movies__card-name-original">Puss in Boots: The Last Wish, 2022</span>
                                <span class="movies__card-genres">мультфильм, комедия, приключения</span>
                                <div class="movies__card-cast">
                                    <span class="movies__card-cast-text">В главных ролях:</span>
                                    <span class="movies__card-cast-roles">Антонио Бандерас, Сальма Хайек, Харви Гильен, Флоренс Пью</span>
                                </div>
                                <div class="movies__card-filmmakers">
                                    <span class="movies__card-filmmakers-text">Режисер:</span>
                                    <span class="movies__card-filmmakers-directors">Джоэль Кроуфорд, Хануэль...</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies__card-second-info">
                            <div class="movies__card-rates">
                                <span class="movies__card-rates-num rate-num--good">8.2</span>
                                <span class="movies__card-rates-count">67 666 оценок</span>
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
                                <button class="movies__card-rates-will-watch">
                                    <svg class="movies__card-rates-will-watch-icon">
                                        <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                                    </svg>
                                    <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
                                </button>
                            </div>
                            <div class="movies__card-watch">
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть в кинотеатре:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline">
                                        <svg class="movies__card-watch-block-btn-icon">
                                            <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                        </svg>
                                        <span class="movies__card-watch-block-btn-text">Билеты</span>
                                    </button>
                                </div>
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть online:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online">
                                        <span class="movies__card-watch-block-btn-text">Посмотреть</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="movies__card">
                        <div class="movies__card-first-info">
                            <a href="">
                                <img class="movies__card-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/300x450" alt="">
                            </a>
                            <div class="movies__card-text">
                                <a href="">
                                    <h3 class="movies__card-name">Кот в сапогах 2: Последнее желание</h3>
                                </a>
                                <span class="movies__card-name-original">Puss in Boots: The Last Wish, 2022</span>
                                <span class="movies__card-genres">мультфильм, комедия, приключения</span>
                                <div class="movies__card-cast">
                                    <span class="movies__card-cast-text">В главных ролях:</span>
                                    <span class="movies__card-cast-roles">Антонио Бандерас, Сальма Хайек, Харви Гильен, Флоренс Пью</span>
                                </div>
                                <div class="movies__card-filmmakers">
                                    <span class="movies__card-filmmakers-text">Режисер:</span>
                                    <span class="movies__card-filmmakers-directors">Джоэль Кроуфорд, Хануэль...</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies__card-second-info">
                            <div class="movies__card-rates">
                                <span class="movies__card-rates-num rate-num--good">8.2</span>
                                <span class="movies__card-rates-count">67 666 оценок</span>
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
                                <button class="movies__card-rates-will-watch">
                                    <svg class="movies__card-rates-will-watch-icon">
                                        <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                                    </svg>
                                    <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
                                </button>
                            </div>
                            <div class="movies__card-watch">
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть в кинотеатре:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--offline">
                                        <svg class="movies__card-watch-block-btn-icon">
                                            <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                        </svg>
                                        <span class="movies__card-watch-block-btn-text">Билеты</span>
                                    </button>
                                </div>
                                <div class="movies__card-watch-block">
                                    <span class="movies__card-watch-block-title">Посмотреть online:</span>
                                    <button class="movies__card-watch-block-btn movies__card-watch-block-btn--online">
                                        <span class="movies__card-watch-block-btn-text">Посмотреть</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
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
