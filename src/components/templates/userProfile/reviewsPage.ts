const userProfileReviewsTemplates = `
    <div class="profile__review">
        <div class="profile__review-wrap">
            <h2 class="profile__title">Рецензии</h2>
            <p class="profile__count-tick-movies">Отмесено фильмов(2):</p>
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
            <div class="profile__review-list">
                <article class="profile__user-review">
                    <div class="profile__review-info-wrap">
                        <div class="profile__review-img-info-wrap">
                            <img class="profile__review-img" src="./assets/img/banner.png" alt="movie">
                            <div class="profile__review-title-wrap">
                                <h2 class="profile__review-title">Темный рыцарь (2008)</h2>
                                <h3 class="profile__title-english">The Dark Knight</h3>
                                <p class="profile__score-timing">
                                    <span class="color-orange">8.5</span> (661 835) 152 мин.
                                </p>
                            </div>
                        </div>
                        <div class="profile__review-btn-wrap">
                            <button class="profile__review-btn">Изменить</button>
                            <button class="profile__review-btn">Удалить</button>
                        </div>
                    </div>
                    <div class="profile__review-text-wrap">
                        <h2 class="profile__review-title">Каков следующий ход?</h2>
                        <p class="profile__review-text">
                            Темный рыцарь по праву считается, если не лучшим, то одним из фильмов снятых по комиксу.
                            Более того, могу добавить, что это один из сильнейших триллеров, что мне удосужилось
                            увидеть. Я считаю, что для того, чтобы понять этот фильм и проникнуться им даже не нужно
                            ничего о нем знать. История будет понятна каждому, но обо всем по порядку...
                        </p>
                        <button class="profile__form-btn profile__view-review-btn">Посмотреть рецензию</button>
                    </div>
                </article>
            </div>
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
`;

export default userProfileReviewsTemplates;
