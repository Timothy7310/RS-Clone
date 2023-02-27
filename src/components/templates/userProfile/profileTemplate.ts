import { MoviesUserType, UserType } from '../../types/types';

const profileTemplate = (userInfo: UserType, moviesTypes: MoviesUserType, average: number): string => `
<section class="profile">
    <div class="container display-flex">
        <ul class="profile__user">
            <li class="profile__photo">
                <div class="profile__photo-wrap-img">
                    <img src="${userInfo.avatar}" alt="user">
                </div>
            </li>
            <li class="profile__photo-change">
                <label class="profile__photo-change-label">
                    <span class="profile__photo-change-text">Изменить</span>
                    <input name="uploadAvatar" type="file" class="profile__photo-change-input" accept="image/png, image/gif, image/jpeg">
                </label>
                <input name="avatar" type="hidden" class="profile-input">
            </li>
            <li class="profile__user-name">${userInfo.nickname || 'Dude'}</li>
            <li class="profile__location">
                <span class="profile__city">${userInfo.city || ''}</span>
                <span class="profile__country">${userInfo.country || ''}</span>
            </li>
            <li class="profile__email">${userInfo.email}</li>
            <li class="profile__line"></li>
            <li class="profile__delete">
                <a href="" class="profile__link profile__link--delete">
                    <svg class="profile__link-icon">
                        <use href="./assets/img/sprite.svg#delete-logo"></use>
                    </svg>
                    <span class="profile__link-text">Удалить аккаунт</span>
                </a>
            </li>
            <li class="profile__line"></li>
            <li class="profile__list">
                <a href="" class="profile__link profile__link-page profile-page--active profile--settings">
                    <svg class="profile__link-icon">
                        <use href="./assets/img/sprite.svg#user-logo"></use>
                    </svg>
                    <span class="profile__link-text">Настройки профиля</span>
                </a>
            </li>
            <li class="profile__list profile__list--watched">
                <a href="" class="profile__link profile__link-page profile--watched">
                    <svg class="profile__link-icon profile__link-icon--list">
                        <use href="./assets/img/sprite.svg#list-logo"></use>
                    </svg>
                    <span class="profile__link-text">Посмотрел (${userInfo.watched.total})</span>
                </a>
            </li>
            <li class="profile__list">
                <a href="" class="profile__link profile__link-page profile--reviews">
                    <svg class="profile__link-icon">
                        <use href="./assets/img/sprite.svg#review-logo"></use>
                    </svg>
                    <span class="profile__link-text profile--reviews-count">Рецензии (${userInfo.reviews.total})</span>
                </a>
            </li>
            <li class="profile__list">
                <a href="" class="profile__link profile__link-page profile--will-watch">
                    <svg class="profile__link-icon">
                        <use href="./assets/img/sprite.svg#movie-logo"></use>
                    </svg>
                    <span class="profile__link-text profile--will-watch-count">Моё (${userInfo.willWatch.total})</span>
                </a>
            </li>
            <li class="profile__list">
                <a href="" class="profile__link profile__link-page profile--tickets">
                    <svg class="profile__link-icon">
                        <use href="./assets/img/sprite.svg#movie-logo"></use>
                    </svg>
                    <span class="profile__link-text profile--tickets-count">Билеты (${userInfo.willWatch.total})</span>
                </a>
            </li>
            <li class="profile__list profile__list--log-out">
                <a class="profile__log-out" href="#/main">Выйти</a>
            </li>
        </ul>
        <div class="profile__content">

        </div>
        <div class="profile__activity">
            <h3 class="profile__title-activity">Ваша активность:</h3>
            <h4 class="profile__category-activity">вы просмотрели:</h4>
            <p class="profile__item-activity">
                фильмы <span class="count-movies count">${moviesTypes.movie}</span>
            </p>
            <p class="profile__item-activity">
                сериалы <span class="count-serials count">${moviesTypes.tvShows}</span>
            </p>
            <p class="profile__item-activity">
                короткометражки <span class="count-short-movies count">${moviesTypes.shortMovie}</span>
            </p>
            <h4 class="profile__category-activity">вы написали:</h4>
            <p class="profile__item-activity">рецензий
                <span class="count-review count">${userInfo.reviews.total}</span>
            </p>
            <h4 class="profile__category-activity">ваша средняя оценка:</h4>
            <p class="profile__item-activity profile__item-activity--average-score count">${average.toFixed(2)}</p>
        </div>
    </div>
</section>
`;

export default profileTemplate;
