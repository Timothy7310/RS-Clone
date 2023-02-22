// import FirebaseStore from '../server/firebaseStore';

// const res = await new FirebaseStore().getCurrentUser();
// const src = res[0].avatar;

const logInHeader = `
<h1 class="visually-hidden">RS-Clone Кинопоиск</h1>
<div class="container">
    <div class="header__wrap">

    <div class="header__logo-lines">
            <span class="hamburger">
                <span class="hamburger_line"></span>
            </span>
            <svg class="burger__logo-icon">
                <use href="./assets/img/sprite.svg#logo"></use>
            </svg>
        </div>

        <div class="burger__background">
            <div class="burger__menu">
                <nav class="burger__menu_navigation">
                    <svg class="burger__logo-icon">
                        <use href="./assets/img/sprite.svg#logo"></use>
                    </svg>
                    <ul class="burger__menu_navigation_list">
                        <li class="burger__menu_navigation_list_link">
                            <a href="#/main" class="burger__menu_navigation_list_link_burger">
                                <svg class="burger__menu_navigation_list_link_burger-icon">
                                    <use href="./assets/img/sprite.svg#icon_main"></use>
                                </svg>
                                <span class="header__link-text">Главная</span>
                            </a>
                        </li>
                        <li class="burger__menu_navigation_list_link">
                            <a href="#/movies" class="burger__menu_navigation_list_link_burger">
                                <svg class="burger__menu_navigation_list_link_burger-icon">
                                    <use href="./assets/img/sprite.svg#icon_movies"></use>
                                </svg>
                                <span class="header__link-text">Фильмы</span>
                            </a>
                        </li>
                        <li class="burger__menu_navigation_list_link">
                            <a href="#/cinema" class="burger__menu_navigation_list_link_burger">
                                <svg class="burger__menu_navigation_list_link_burger-icon">
                                    <use href="./assets/img/sprite.svg#icon_tickets"></use>
                                </svg>
                                <span class="header__link-text">Билеты&nbsp;в&nbsp;кино</span>
                            </a>
                        </li>
                        <li class="burger__menu_navigation_list_link_ham">
                            <a href="#/search" class="burger__menu_navigation_list_link_burger">
                                <svg class="burger__menu_navigation_list_link_burger-icon">
                                    <use href="./assets/img/sprite.svg#icon_search"></use>
                                </svg>
                                <span class="header__link-text">Поиск</span>
                            </a>
                        </li>
                        <li class="burger__menu_navigation_list_link_ham">
                            <a href="#/game" class="burger__menu_navigation_list_link_burger">
                                <svg class="burger__menu_navigation_list_link_burger-icon">
                                    <use href="./assets/img/sprite.svg#game_logo"></use>
                                </svg>
                                <span class="header__link-text">Специальная игра</span>
                            </a>
                        </li>
                        <li class="burger__menu_navigation_list_link_mob">
                            <a href="#/login" class="burger__menu_navigation_list_link_mob_text">Вход</a>
                        </li>
                    </ul>
                </nav>
                <span class="close_burger"></span>
            </div>
        </div>

        <a href="#/main" class="header__logo" aria-label="Главная страница">
            <svg class="header__logo-icon">
                <use href="assets/img/sprite.svg#logo"></use>
            </svg>
        </a>

        <nav class="header__nav">
            <ul class="header__list">
                <li class="header__item">
                    <a href="#/main" class="header__link">
                        <svg class="header__link-icon">
                            <use href="assets/img/sprite.svg#icon_main"></use>
                        </svg>
                        <span class="header__link-text">Главная</span>
                    </a>
                </li>
                <li class="header__item">
                    <a href="#/movies" class="header__link">
                        <svg class="header__link-icon">
                            <use href="assets/img/sprite.svg#icon_movies"></use>
                        </svg>
                        <span class="header__link-text">Фильмы</span>
                    </a>
                </li>
                <li class="header__item">
                    <a href="#/cinema" class="header__link">
                        <svg class="header__link-icon">
                            <use href="assets/img/sprite.svg#icon_tickets"></use>
                        </svg>
                        <span class="header__link-text">Билеты&nbsp;в&nbsp;кино</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div class="header__search-form-wrap">
            <form action="" class="header__search-form">
                <input class="header__search-input" type="text" placeholder="Фильмы, сериалы, персоны" required="">
                <button type="submit" class="header__search-btn" aria-label="Найти">
                    <svg class="header__search-btn-icon">
                        <use href="./assets/img/sprite.svg#icon_search"></use>
                    </svg>
                </button>
            </form>
            <div class="header__search-results header__search-results--hidden">
                <span class="header__search-results-text">Результаты поиска:</span>
                <article class="header__search-result">
                    <a href="" class="header__search-result-link"></a>
                    <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8b9cc726-2309-492a-a099-3163f8ef4693/40x60" class="header__search-result-poster" alt="">
                    <div class="header__search-result-text-wrap">
                        <h4 class="header__search-result-name">Фандорин. Азазель</h4>
                        <div class="header__search-result-info">
                            <span class="header__search-result-rate rate-num--good">7.1</span>
                            <span class="header__search-result-type">сериал</span>
                            <span class="header__search-result-year">2022</span>
                        </div>
                    </div>
                </article>
                <article class="header__search-result">
                    <a href="" class="header__search-result-link"></a>
                    <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/8b9cc726-2309-492a-a099-3163f8ef4693/40x60" class="header__search-result-poster" alt="">
                    <div class="header__search-result-text-wrap">
                        <h4 class="header__search-result-name">Фандорин. Азазель</h4>
                        <div class="header__search-result-info">
                            <span class="header__search-result-rate rate-num--good">7.1</span>
                            <span class="header__search-result-type">сериал</span>
                            <span class="header__search-result-year">2022</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <button class="header__quizz-btn">Игра</button>
        <a href="#/profile" class="header__profile-btn" id="profile" title="Личный кабинет">
            <img src="" alt="" class="header__profile-avatar">
        </a>
    </div>
</div>
`;

export default logInHeader;
