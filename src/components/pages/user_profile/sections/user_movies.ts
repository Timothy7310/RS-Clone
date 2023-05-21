const userProfileMoviesTemplates = `
            <div class="profile__movies">
                    <div class="profile__movies-wrap">
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
                        <div class="profile__movies-list">
                            <article class="profile__movies">
                                <div class="profile__movies-info-wrap">
                                    <div class="profile__movies-img-info-wrap">
                                        <img class="profile__movies-img" src="./assets/img/banner.png" alt="movie">
                                        <div class="profile__movies-title-wrap">
                                            <h2 class="profile__movies-title">Темный рыцарь (2008)</h2>
                                            <h3 class="profile__title-english">The Dark Knight</h3>
                                            <p class="profile__movies-timing">
                                                <span class="color-orange">8.5</span> (661 835) 152 мин.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="profile__movies-btn-wrap">
                                        <span class="profile__movies-remove">✖</span>
                                        <button class="profile__form-btn profile__movies-btn">Оценить</button>
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

export default userProfileMoviesTemplates;
