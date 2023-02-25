import Page from '../Page';
import userProfileTemplate from '../../templates/userProfile/userProfile';
import FirebaseStore from '../../server/firebaseStore';
import FirebaseAuthUser from '../../server/firebaseAuthUser';
import {
    UserType, WatchedType, ReviewsType, WillWatchType,
} from '../../types/types';
import ControllerKP from '../../controller/controllerKP';

export default class UserProfile {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    firebaseStore;

    firebaseAuthUser;

    controllerKP;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.firebaseStore = new FirebaseStore();
        this.firebaseAuthUser = new FirebaseAuthUser();
        this.controllerKP = new ControllerKP();
    }

    draw(): HTMLElement {
        this.container.classList.add('user-profile');
        this.container.innerHTML = userProfileTemplate;
        this.renderLastPage();
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }

    async renderLastPage() {
        const page = localStorage.getItem('profilePage');

        switch (page) {
            case 'settings':
                await this.renderPage();
                await this.renderSettings();
                break;
            case 'watched':
                await this.renderPage();
                await this.renderWatched();
                break;
            case 'reviews':
                await this.renderPage();
                await this.renderReviews();
                break;
            case 'willWatch':
                await this.renderPage();
                await this.renderWillWatch();
                break;
            default:
                await this.renderPage();
                await this.renderSettings();
                break;
        }
    }

    async renderPage() {
        const res = await this.firebaseStore.getCurrentUser();
        const userInfo = res[0] as UserType;
        const moviesTypes = {
            movie: 0,
            tvShows: 0,
            shortMovie: 0,
        };
        const moviesList = userInfo.watched.items.map((x) => x.filmID)
            .map(async (id) => {
                const repsonse = await this.controllerKP.searchMovie(id, 'id');
                return repsonse;
            });
        await Promise.all(moviesList).then((response) => {
            response.forEach((item) => {
                if (item.type === 'movie') {
                    moviesTypes.movie += 1;
                }
                if (item.type === 'tv-series') {
                    moviesTypes.tvShows += 1;
                }
                if (item.type === 'movie' && item.movieLength <= 50) {
                    moviesTypes.shortMovie += 1;
                }
            });
        });

        const watchedList = userInfo.watched.items;

        const average = (watchedList.reduce((acc, x) => acc + (+(x?.score as number) ?? 0), 0)
                        / watchedList.length) || 0;

        const result = `
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

        this.container.innerHTML = result;
    }

    async renderSettings() {
        const res = await this.firebaseStore.getCurrentUser();
        const userInfo = res[0];
        const entryPoint = document.querySelector('.profile__content') as HTMLElement;

        const activeClass = 'profile-page--active';
        const allNavButtons = document.querySelectorAll('.profile__link-page');
        const settingsButton = document.querySelector('.profile--settings');
        allNavButtons.forEach((btn) => btn.classList.remove(activeClass));
        settingsButton?.classList.add(activeClass);

        localStorage.setItem('profilePage', 'settings');

        const result = `
        <div class="profile-settings">
            <h2 class="profile-settings__title">Настройки профиля</h2>
            <div class="profile-settings__wrap">
                <div class="profile-settings__input-wrap">
                    <label for="profileFirstName" class="profile-settings__input-label">Имя</label>
                    <input type="text" name="firstName" id="profileFirstName" class="profile-settings__input profile-input" placeholder="Введите ваше имя" value="${userInfo.firstName || ''}">
                </div>

                <div class="profile-settings__input-wrap">
                    <label for="profileLastName" class="profile-settings__input-label">Фамилия</label>
                    <input type="text" name="lastName" id="profileLastName" class="profile-settings__input profile-input" placeholder="Введите вашу фамилию" value="${userInfo.lastName || ''}">
                </div>

                <div class="profile-settings__input-wrap">
                    <label for="profileNickname" class="profile-settings__input-label">Никнейм</label>
                    <input type="text" name="nickname" id="profileNickname" class="profile-settings__input profile-input" placeholder="Введите ваш никнейм" value="${userInfo.nickname || 'Dude'}">
                </div>

                <div class="profile-settings__input-wrap">
                    <label for="profileFirstName" class="profile-settings__input-label">Город</label>
                    <input type="text" name="city" id="profileFirstName" class="profile-settings__input profile-input" placeholder="Введите ваш город" value="${userInfo.city || ''}">
                </div>

                <div class="profile-settings__input-wrap">
                    <label for="profileCountry" class="profile-settings__input-label">Страна</label>
                    <input type="text" name="country" id="profileCountry" class="profile-settings__input profile-input" placeholder="Введите вашу страну" value="${userInfo.country || ''}">
                </div>
            </div>

            <button class="profile-settings__save">Сохранить</button>
        </div>
        `;
        entryPoint.innerHTML = result;
    }

    async renderWatched() {
        const res = await this.firebaseStore.getCurrentUser();
        const userInfoWatched: WatchedType = res[0].watched;

        const entryPoint = document.querySelector('.profile__content') as HTMLElement;

        const activeClass = 'profile-page--active';
        const allNavButtons = document.querySelectorAll('.profile__link-page');
        const watchedButton = document.querySelector('.profile--watched');
        allNavButtons.forEach((btn) => btn.classList.remove(activeClass));
        watchedButton?.classList.add(activeClass);

        localStorage.setItem('profilePage', 'watched');

        const template = `
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

        entryPoint.innerHTML = template;

        if (userInfoWatched.total !== 0) {
            const watchedListDOM = document.querySelector('.profile__score-list') as HTMLElement;
            // TODO: ограничить массив, иначе будет вывод сразу всех 100 фильмов

            userInfoWatched.items.forEach(async (item) => {
                const movie = await this.controllerKP.searchMovie(`${item.filmID}`, 'id');
                const elem = document.createElement('article');
                elem.classList.add('profile__score');
                elem.innerHTML = `
                    <div class="profile__score-info-wrap">
                        <div class="profile__score-img-info-wrap">
                            <a href="#/movie/${item.filmID}">
                                <img class="profile__score-img" src="${movie?.poster?.previewUrl || movie?.poster?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Out_Of_Poster.jpg/450px-Out_Of_Poster.jpg'}" alt="">
                            </a>
                            <div class="profile__score-title-wrap">
                                <a href="#/movie/${item.filmID}">
                                    <h2 class="profile__score-title">${movie.name} (${movie.year})</h2>
                                </a>
                                <h3 class="profile__title-english">${movie.alternativeName || ''}</h3>
                                <p class="profile__score-timing">
                                    <span class="color-orange">${movie.rating.kp}</span> (${movie.votes.kp}) ${movie.movieLength} мин.
                                </p>
                            </div>
                        </div>
                        <div class="profile__score-btn-wrap profile__score-btn-wrap--${item.filmID}">
                            <p class="profile__score-your-mark">
                                Ваша оценка: <span class="profile__mark profile__mark--${item.filmID}">${item.score}</span>
                            </p>
                            <button class="profile__review-btn profile-change-score profile__review-btn--change-move-score" data-id="${item.filmID}">Изменить</button>
                            <button class="profile__review-btn profile-change-score profile-change-score--hidden profile__review-btn--save-move-score" data-id="${item.filmID}">Сохранить</button>
                        </div>
                    </div>
                `;
                watchedListDOM.prepend(elem);
            });

            const paginations = document.querySelectorAll('.movies__pagination');
            paginations.forEach((item) => item.classList.remove('movies__pagination--hidden'));

            const warningText = document.querySelector('.profile__score-list-warning-text') as HTMLElement;
            warningText.remove();
        }
    }

    async renderReviews() {
        const res = await this.firebaseStore.getCurrentUser();
        const userInfoReviews: ReviewsType = res[0].reviews;
        const entryPoint = document.querySelector('.profile__content') as HTMLElement;

        const activeClass = 'profile-page--active';
        const allNavButtons = document.querySelectorAll('.profile__link-page');
        const reviewsButton = document.querySelector('.profile--reviews');
        allNavButtons.forEach((btn) => btn.classList.remove(activeClass));
        reviewsButton?.classList.add(activeClass);

        localStorage.setItem('profilePage', 'reviews');

        const template = `
            <div class="profile__review">
                <div class="profile__review-wrap">
                    <h2 class="profile__title">Рецензии</h2>
                    <p class="profile__count-tick-movies">Отмечено фильмов(${userInfoReviews.total}):</p>
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
                    <div class="profile__review-list">
                        <span class="profile__score-list-warning-text">Вы еще не написали рецензии</span>
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

        entryPoint.innerHTML = template;

        if (userInfoReviews.total !== 0) {
            const reviewsListDOM = document.querySelector('.profile__review-list') as HTMLElement;
            // TODO: ограничить массив, иначе будет вывод сразу всех 100 фильмов

            userInfoReviews.items.forEach(async (item) => {
                const movie = await this.controllerKP.searchMovie(`${item.filmID}`, 'id');

                const elem = document.createElement('article');
                elem.classList.add('profile__user-review');
                elem.innerHTML = `
                    <div class="profile__review-info-wrap">
                        <div class="profile__review-img-info-wrap">
                            <a href="#/movie/${item.filmID}">
                                <img class="profile__review-img" src="${movie?.poster?.previewUrl || movie?.poster?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Out_Of_Poster.jpg/450px-Out_Of_Poster.jpg'}" alt="">
                            </a>
                            <div class="profile__review-title-wrap">
                                <a href="#/movie/${item.filmID}">
                                    <h2 class="profile__review-title">${movie.name} (${movie.year})</h2>
                                </a>
                                <h3 class="profile__title-english">${movie.alternativeName || ''}</h3>
                                <p class="profile__score-timing">
                                    <span class="color-orange">${movie.rating.kp}</span> (${movie.votes.kp}) ${movie.movieLength} мин.
                                </p>
                            </div>
                        </div>
                        <div class="profile__review-btn-wrap">
                            <button class="profile__review-btn profile__review-btn--change">Изменить</button>
                            <button class="profile__review-btn profile__review-btn--delete" data-id="${item.filmID}">Удалить</button>
                        </div>
                    </div>
                    <div class="profile__review-text-wrap">
                        <h2 class="profile__review-title">${item.title}</h2>
                        <p class="profile__review-text">
                            ${item.text}
                        </p>
                        <button class="profile__form-btn profile__view-review-btn">Посмотреть рецензию</button>
                    </div>
                `;
                reviewsListDOM.prepend(elem);
            });

            const paginations = document.querySelectorAll('.movies__pagination');
            paginations.forEach((item) => item.classList.remove('movies__pagination--hidden'));

            const warningText = document.querySelector('.profile__score-list-warning-text') as HTMLElement;
            warningText.remove();
        }

        const reviewsPageCount = document.querySelector('.profile--reviews-count') as HTMLElement;
        reviewsPageCount.textContent = `Рецензии (${userInfoReviews.total})`;
    }

    async renderWillWatch() {
        const res = await this.firebaseStore.getCurrentUser();
        const userInfoWillWatch: WillWatchType = res[0].willWatch;
        const entryPoint = document.querySelector('.profile__content') as HTMLElement;

        const activeClass = 'profile-page--active';
        const allNavButtons = document.querySelectorAll('.profile__link-page');
        const willWatchButton = document.querySelector('.profile--will-watch');
        allNavButtons.forEach((btn) => btn.classList.remove(activeClass));
        willWatchButton?.classList.add(activeClass);

        localStorage.setItem('profilePage', 'willWatch');

        const template = `
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

        entryPoint.innerHTML = template;

        if (userInfoWillWatch.total !== 0) {
            const willWatchListDOM = document.querySelector('.profile__will-watch-list') as HTMLElement;
            // TODO: ограничить массив, иначе будет вывод сразу всех 100 фильмов

            userInfoWillWatch.items.forEach(async (item) => {
                const movie = await this.controllerKP.searchMovie(`${item.filmID}`, 'id');

                const elem = document.createElement('article');
                elem.classList.add('profile__will-watch-card');
                elem.innerHTML = `
                    <a href="#/movie/${item.filmID}">
                        <img src="${movie?.poster?.previewUrl || movie?.poster?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Out_Of_Poster.jpg/450px-Out_Of_Poster.jpg'}" class="profile__will-watch-card-poster" alt="">
                    </a>
                    <div class="profile__will-watch-card-info">
                        <a href="#/movie/${item.filmID}" class="profile__will-watch-card-name-wrap">
                            <h3 class="profile__will-watch-card-name">${movie.name} (${movie.year})</h3>
                        </a>
                        <span class="profile__will-watch-card-original-name">${movie.alternativeName || ''}</span>
                        <div class="profile__will-watch-card-subinfo">
                            <span class="profile__will-watch-card-rate">${movie.rating.kp}</span>
                            <span class="profile__will-watch-card-rate-count">(${movie.votes.kp})</span>
                            <span class="profile__will-watch-card-time">${movie.movieLength} мин.</span>
                        </div>
                    </div>
                    <button class="profile__will-watch-card-delete" data-id="${item.filmID}" title="Удалить">
                        <svg class="profile__will-watch-card-delete-icon">
                            <use href="./assets/img/sprite.svg#icon_close"></use>
                        </svg>
                    </button>
                `;
                willWatchListDOM.prepend(elem);
            });

            const paginations = document.querySelectorAll('.movies__pagination');
            paginations.forEach((item) => item.classList.remove('movies__pagination--hidden'));

            const warningText = document.querySelector('.profile__score-list-warning-text') as HTMLElement;
            warningText.remove();
        }

        const willWatchPageCount = document.querySelector('.profile--will-watch-count') as HTMLElement;
        willWatchPageCount.textContent = `Моё (${userInfoWillWatch.total})`;
    }

    // eslint-disable-next-line class-methods-use-this
    async userProfileEvent(event: Event) {
        const target = event.target as HTMLButtonElement;
        if (target.closest('.profile-settings__save')) {
            const res = await this.firebaseStore.getCurrentUser();
            const userObj = res[0] as UserType;

            const inputs = Array.from(document.querySelectorAll('.profile-input')) as HTMLInputElement[];
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            inputs.map((input) => [input.name, input.value])
                .forEach(<T extends keyof UserType>(item: string[]) => {
                    const key = item[0] as T;
                    const value = item[1] as UserType[T];
                    userObj[key] = value;
                });
            target.disabled = true;
            await this.firebaseStore.updateUserInfo(userObj);

            const userAvatar = document.querySelector('.profile__photo-wrap-img') as HTMLElement;
            const userNickname = document.querySelector('.profile__user-name') as HTMLElement;
            const userCity = document.querySelector('.profile__city') as HTMLElement;
            const userCountry = document.querySelector('.profile__country') as HTMLElement;

            userAvatar.innerHTML = `<img src="${userObj.avatar}" alt="user">`;
            userNickname.textContent = userObj.nickname;
            userCity.textContent = userObj.city;
            userCountry.textContent = userObj.country;

            target.disabled = false;
        }

        if (target.closest('.profile__log-out')) {
            event.preventDefault();
            await this.firebaseAuthUser.signOut();
            window.location.href = '#/main';
        }

        if (target.closest('.profile__link--delete')) {
            event.preventDefault();
            await this.firebaseAuthUser.deleteUser();
            localStorage.setItem('isLogIn', 'false');
            localStorage.removeItem('userID');
            window.location.href = '#/main';
        }

        if (target.closest('.profile--watched')) {
            event.preventDefault();
            this.renderWatched();
        }

        if (target.closest('.profile--settings')) {
            event.preventDefault();
            this.renderSettings();
        }

        if (target.closest('.profile--reviews')) {
            event.preventDefault();
            this.renderReviews();
        }

        if (target.closest('.profile--will-watch')) {
            event.preventDefault();
            this.renderWillWatch();
        }

        if (target.closest('.profile__will-watch-card-delete')) {
            event.preventDefault();
            const delButton = target.closest('.profile__will-watch-card-delete') as HTMLButtonElement;
            const id = delButton.dataset.id as string;

            const response = await this.firebaseStore.getCurrentUser();
            const userInfo = response[0];

            const newUserInfo: UserType = JSON.parse(JSON.stringify(userInfo));
            const newWillWatchList = newUserInfo.willWatch.items.filter((x) => x.filmID !== id);
            newUserInfo.willWatch = {
                items: newWillWatchList,
                total: newWillWatchList.length,
            };
            await this.firebaseStore.updateUserInfo(newUserInfo);
            await this.renderWillWatch();
        }

        if (target.closest('.profile__review-btn--delete')) {
            event.preventDefault();
            const delButton = target.closest('.profile__review-btn--delete') as HTMLButtonElement;
            const id = delButton.dataset.id as string;

            const response = await this.firebaseStore.getCurrentUser();
            const userInfo = response[0];

            const newUserInfo: UserType = JSON.parse(JSON.stringify(userInfo));
            const newReviewsList = newUserInfo.reviews.items.filter((x) => x.filmID !== id);
            newUserInfo.reviews = {
                items: newReviewsList,
                total: newReviewsList.length,
            };
            await this.firebaseStore.updateUserInfo(newUserInfo);
            await this.renderReviews();
            const reviewsDOM = document.querySelector('.count-review') as HTMLElement;
            const reviewsCount = newReviewsList.length;
            reviewsDOM.textContent = `${reviewsCount}`;
        }

        if (target.classList.contains('profile__review-btn--change-move-score')) {
            const id = target.dataset.id as string;
            const score = document.querySelector(`.profile__mark--${id}`) as HTMLElement;

            const prevScore = score.textContent ?? '0';

            const inputElem = document.createElement('input');
            inputElem.type = 'number';
            inputElem.max = '10';
            inputElem.min = '1';
            inputElem.classList.add('profile__mark-change-input', `profile__mark-change-input--${id}`);
            inputElem.value = prevScore;

            score.innerHTML = '';
            score.append(inputElem);

            target.disabled = true;
            const saveBtn = document.querySelector(`.profile__review-btn--save-move-score[data-id="${id}"]`) as HTMLButtonElement;
            saveBtn.classList.remove('profile-change-score--hidden');
            saveBtn.disabled = false;
        }

        if (target.classList.contains('profile__review-btn--save-move-score')) {
            const id = target.dataset.id as string;
            const score = document.querySelector(`.profile__mark--${id}`) as HTMLElement;
            const input = document.querySelector(`.profile__mark-change-input--${id}`) as HTMLInputElement;
            const newScore = +input.value;

            const response = await this.firebaseStore.getCurrentUser();
            const userInfo = response[0];
            const newUserInfo: UserType = JSON.parse(JSON.stringify(userInfo));

            const newWatchedList = newUserInfo.watched.items.map((x) => (x.filmID === id
                ? { date: `${new Date().getTime()}`, filmID: x.filmID, score: newScore }
                : x));

            newUserInfo.watched.items = newWatchedList;

            await this.firebaseStore.updateUserInfo(newUserInfo);

            score.innerHTML = `${newScore || '0'}`;

            const changeBtn = document.querySelector(`.profile__review-btn--change-move-score[data-id="${id}"]`) as HTMLButtonElement;
            changeBtn.disabled = false;
            target.classList.add('profile-change-score--hidden');
            target.disabled = true;

            const newAvr = (newWatchedList.reduce((acc, x) => acc + (+(x?.score as number) ?? 0), 0)
            / newWatchedList.length) || 0;
            const averageDOM = document.querySelector('.profile__item-activity--average-score') as HTMLElement;
            averageDOM.textContent = `${newAvr}`;
        }
    }

    // eslint-disable-next-line class-methods-use-this
    async uploadAvatarEvent(event: Event) {
        const target = event.target as HTMLInputElement;

        if (target.closest('[name="uploadAvatar"]')) {
            const avatarInput = document.querySelector('[name="avatar"]') as HTMLInputElement;
            const files = target.files as FileList;
            await this.firebaseStore.uploadFile(files[0]);
            avatarInput.value = localStorage.getItem('downloadURL') ?? 'https://vjoy.cc/wp-content/uploads/2020/11/1-35.jpg';
        }
    }

    // eslint-disable-next-line class-methods-use-this
    validationMark(event: Event) {
        const target = event.target as HTMLInputElement;

        // TODO: изменить логику, можно менять только с помощью стрелок вверх\вниз
        if (target.closest('.profile__mark-change-input')) {
            target.value = `${Math.max(1, Math.min(10, +target.value))}`;
        }
    }

    async getWillWatchList() {
        const res = await this.firebaseStore.getCurrentUser();
        const userInfoWillWatch: WillWatchType = res[0].willWatch;
        return userInfoWillWatch.items.map((x) => x.filmID);
    }

    async saveWillWatch(target: HTMLButtonElement, targetClass: string, activeClass: string) {
        const btn = target.closest(targetClass) as HTMLButtonElement;
        const id = btn.dataset.id as string;

        btn.disabled = true;
        btn.classList.toggle(activeClass);
        const response = await this.firebaseStore.getCurrentUser();
        const userInfo = response[0];
        const newUserInfo: UserType = JSON.parse(JSON.stringify(userInfo));

        const userWillWatchList = await this.getWillWatchList();
        if (userWillWatchList.includes(id)) {
            const newWillWatchList = newUserInfo.willWatch.items.filter((x) => x.filmID !== id);
            newUserInfo.willWatch.items = newWillWatchList;
            newUserInfo.willWatch.total = newWillWatchList.length;
            await this.firebaseStore.updateUserInfo(newUserInfo);
            btn.disabled = false;
            return;
        }

        const newWillWatchFilm = {
            date: `${new Date().getTime()}`,
            filmID: id,
        };
        newUserInfo.willWatch.items.push(newWillWatchFilm);
        newUserInfo.willWatch.total = newUserInfo.willWatch.items.length;

        await this.firebaseStore.updateUserInfo(newUserInfo);
        btn.disabled = false;
    }
}
