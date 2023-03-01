import { WatchedType } from '../../types/types';

const userProfileWatchedTemplates = (userInfoWatched: WatchedType): string => `
<div class="profile__score">
    <div class="profile__score-wrap">
        <h2 class="profile__title">Оценки</h2>
        <p class="profile__count-tick-movies">История оценок(${userInfoWatched.total}):</p>
        <div class="movies__pagination movies__pagination--hidden movies__pagination--top">
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
            <span class="profile__score-list-warning-text">Вы еще не смотрели не одного фильма</span>
        </div>
        <div class="movies__pagination movies__pagination--hidden movies__pagination--bottom">
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

export default userProfileWatchedTemplates;
