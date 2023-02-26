import { WillWatchType } from '../../types/types';

const profileWillWatchTemplate = (userInfoWillWatch: WillWatchType): string => `
<div class="profile__will-watch">
    <h2 class="profile__will-watch-title">
        Фильмы, буду смотреть
    </h2>
    <span class="profile__will-watch-count">
        Отмечено фильмов(${userInfoWillWatch.total}):
    </span>

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
    <div class="profile__will-watch-list">
        <span class="profile__score-list-warning-text">Вы еще не добавили фильмы</span>
    </div>
    <div class="movies__pagination movies__pagination--hidden  movies__pagination--bottom">
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
`;

export default profileWillWatchTemplate;
