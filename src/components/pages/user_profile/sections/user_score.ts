const userProfileScoreTemplates = `
            <div class="profile__score">
                    <div class="profile__score-wrap">
                        <h2 class="profile__title">Оценки</h2>
                        <p class="profile__count-tick-movies">История оценок(4):</p>
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
                        <div class="profile__score-list">
                          <article class="profile__score">
                            <div class="profile__score-info-wrap">
                                <div class="profile__score-img-info-wrap">
                                    <img class="profile__score-img" src="./assets/img/banner.png" alt="movie">
                                    <div class="profile__score-title-wrap">
                                        <h2 class="profile__score-title">Темный рыцарь (2008)</h2>
                                        <h3 class="profile__title-english">The Dark Knight</h3>
                                        <p class="profile__score-timing">
                                            <span class="color-orange">8.5</span> (661 835) 152 мин.
                                        </p>
                                    </div>
                                </div>
                                <div class="profile__score-btn-wrap">
                                    <p class="profile__score-your-mark">
                                        Ваша оценка: <span class="profile__mark">9</span>
                                    </p>
                                    <button class="profile__review-btn">Изменить</button>
                                </div>
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
                </div>`;

export default userProfileScoreTemplates;
