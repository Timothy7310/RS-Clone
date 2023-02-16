// import FirebaseStore from '../server/firebaseStore';

// const res = await new FirebaseStore().getCurrentUser();
// const src = res[0].avatar;

const logInHeader = `
<h1 class="visually-hidden">RS-Clone Кинопоиск</h1>
<div class="container">
    <div class="header__wrap">
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

        <form action="" class="header__search-form">
            <input class="header__search-input" type="text" placeholder="Фильмы, сериалы, персоны" required="">
            <button type="submit" class="header__search-btn" aria-label="Найти">
                <svg class="header__search-btn-icon">
                    <use href="assets/img/sprite.svg#icon_search"></use>
                </svg>
            </button>
        </form>

        <a href="#/profile" class="header__profile-btn" id="profile" title="Личный кабинет">
            <img src="" alt="" class="header__profile-avatar">
        </a>
    </div>
</div>
`;

export default logInHeader;
