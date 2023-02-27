import Page from '../Page';
import userProfileTemplate from '../../templates/userProfile/userProfile';
import FirebaseStore from '../../server/firebaseStore';
import FirebaseAuthUser from '../../server/firebaseAuthUser';
import {
    UserType, WatchedType, ReviewsType, WillWatchType, TicketsProfileType,
} from '../../types/types';
import ControllerKP from '../../controller/controllerKP';
import settingsPageTemplates from '../../templates/userProfile/settingsPage';
import userProfileReviewsTemplates from '../../templates/userProfile/reviewsPage';
import userProfileWatchedTemplates from '../../templates/userProfile/watchedPage';
import profileTemplate from '../../templates/userProfile/profileTemplate';
import profileScoreTemplate from '../../templates/userProfile/profileScoreTemplate';
import profileReviewInfoTemplate from '../../templates/userProfile/profileReviewInfo';
import profileWillWatchTemplate from '../../templates/userProfile/profileWillWatch';
import profileWillWatchCard from '../../templates/userProfile/profileWillWatchCard';
import profileTicketsTemplates from '../../templates/userProfile/profileTickets';
import profileTicketsCardsTemplate from '../../templates/userProfile/profileTicketsCards';

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
            case 'tickets':
                await this.renderPage();
                await this.renderTickets();
                break;
            default:
                await this.renderPage();
                await this.renderSettings();
                break;
        }
    }

    async renderPage() {
        const userInfo = await this.firebaseStore.getCurrentUser(true);

        const moviesTypes = {
            movie: 0,
            tvShows: 0,
            shortMovie: 0,
        };
        const moviesList = userInfo.watched.items.map((x) => x.filmID)
            .map(async (id) => {
                const response = await this.controllerKP.getMovieForId(id);
                return response;
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

        const result = profileTemplate(userInfo, moviesTypes, average);

        this.container.innerHTML = result;
    }

    async renderSettings() {
        const userInfo = await this.firebaseStore.getCurrentUser();
        const entryPoint = document.querySelector('.profile__content') as HTMLElement;

        const activeClass = 'profile-page--active';
        const allNavButtons = document.querySelectorAll('.profile__link-page');
        const settingsButton = document.querySelector('.profile--settings');
        allNavButtons.forEach((btn) => btn.classList.remove(activeClass));
        settingsButton?.classList.add(activeClass);

        localStorage.setItem('profilePage', 'settings');

        const result = settingsPageTemplates(userInfo);
        entryPoint.innerHTML = result;
    }

    async renderWatched() {
        const res = await this.firebaseStore.getCurrentUser();
        const userInfoWatched: WatchedType = res.watched;

        const entryPoint = document.querySelector('.profile__content') as HTMLElement;

        const activeClass = 'profile-page--active';
        const allNavButtons = document.querySelectorAll('.profile__link-page');
        const watchedButton = document.querySelector('.profile--watched');
        allNavButtons.forEach((btn) => btn.classList.remove(activeClass));
        watchedButton?.classList.add(activeClass);

        localStorage.setItem('profilePage', 'watched');

        const template = userProfileWatchedTemplates(userInfoWatched);

        entryPoint.innerHTML = template;

        if (userInfoWatched.total !== 0) {
            const watchedListDOM = document.querySelector('.profile__score-list') as HTMLElement;
            // TODO: ограничить массив, иначе будет вывод сразу всех 100 фильмов

            userInfoWatched.items.forEach(async (item) => {
                const movie = await this.controllerKP.getMovieForId(`${item.filmID}`);
                const elem = document.createElement('article');
                elem.classList.add('profile__score');
                elem.innerHTML = profileScoreTemplate(movie, item);
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
        const userInfoReviews: ReviewsType = res.reviews;
        const entryPoint = document.querySelector('.profile__content') as HTMLElement;

        const activeClass = 'profile-page--active';
        const allNavButtons = document.querySelectorAll('.profile__link-page');
        const reviewsButton = document.querySelector('.profile--reviews');
        allNavButtons.forEach((btn) => btn.classList.remove(activeClass));
        reviewsButton?.classList.add(activeClass);

        localStorage.setItem('profilePage', 'reviews');

        const template = userProfileReviewsTemplates(userInfoReviews);

        entryPoint.innerHTML = template;

        if (userInfoReviews.total !== 0) {
            const reviewsListDOM = document.querySelector('.profile__review-list') as HTMLElement;
            // TODO: ограничить массив, иначе будет вывод сразу всех 100 фильмов

            userInfoReviews.items.forEach(async (item) => {
                const movie = await this.controllerKP.getMovieForId(`${item.filmID}`);

                const elem = document.createElement('article');
                elem.classList.add('profile__user-review');
                elem.innerHTML = profileReviewInfoTemplate(item, movie);
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
        const userInfoWillWatch: WillWatchType = res.willWatch;
        const entryPoint = document.querySelector('.profile__content') as HTMLElement;

        const activeClass = 'profile-page--active';
        const allNavButtons = document.querySelectorAll('.profile__link-page');
        const willWatchButton = document.querySelector('.profile--will-watch');
        allNavButtons.forEach((btn) => btn.classList.remove(activeClass));
        willWatchButton?.classList.add(activeClass);

        localStorage.setItem('profilePage', 'willWatch');

        const template = profileWillWatchTemplate(userInfoWillWatch);
        entryPoint.innerHTML = template;

        if (userInfoWillWatch.total !== 0) {
            const willWatchListDOM = document.querySelector('.profile__will-watch-list') as HTMLElement;
            // TODO: ограничить массив, иначе будет вывод сразу всех 100 фильмов

            userInfoWillWatch.items.forEach(async (item) => {
                const movie = await this.controllerKP.getMovieForId(`${item.filmID}`);

                const elem = document.createElement('article');
                elem.classList.add('profile__will-watch-card');
                elem.innerHTML = profileWillWatchCard(item, movie);
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

    async renderTickets() {
        const res = await this.firebaseStore.getCurrentUser();
        const userInfoTickets: TicketsProfileType = res.tickets;
        const entryPoint = document.querySelector('.profile__content') as HTMLElement;

        const activeClass = 'profile-page--active';
        const allNavButtons = document.querySelectorAll('.profile__link-page');
        const ticketsButton = document.querySelector('.profile--tickets');
        allNavButtons.forEach((btn) => btn.classList.remove(activeClass));
        ticketsButton?.classList.add(activeClass);

        localStorage.setItem('profilePage', 'tickets');

        const template = profileTicketsTemplates(userInfoTickets);
        entryPoint.innerHTML = template;

        if (userInfoTickets.total !== 0) {
            const willWatchListDOM = document.querySelector('.profile__tickets-list') as HTMLElement;
            // TODO: ограничить массив, иначе будет вывод сразу всех 100 фильмов

            userInfoTickets.items.forEach(async (item) => {
                const movie = await this.controllerKP.getMovieForId(`${item.filmID}`);

                const elem = document.createElement('article');
                elem.classList.add('profile__tickets-card');
                elem.innerHTML = profileTicketsCardsTemplate(movie, item);
                willWatchListDOM.prepend(elem);
            });

            const paginations = document.querySelectorAll('.movies__pagination');
            paginations.forEach((item) => item.classList.remove('movies__pagination--hidden'));

            const warningText = document.querySelector('.profile__score-list-warning-text') as HTMLElement;
            warningText.remove();
        }

        const willWatchPageCount = document.querySelector('.profile--tickets-count') as HTMLElement;
        willWatchPageCount.textContent = `Билеты (${userInfoTickets.total})`;
    }

    // eslint-disable-next-line class-methods-use-this
    async userProfileEvent(event: Event) {
        const target = event.target as HTMLButtonElement;
        if (target.closest('.profile-settings__save')) {
            const userObj = await this.firebaseStore.getCurrentUser();

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

        if (target.closest('.profile--tickets')) {
            event.preventDefault();
            this.renderTickets();
        }

        if (target.closest('.profile__will-watch-card-delete')) {
            event.preventDefault();
            const delButton = target.closest('.profile__will-watch-card-delete') as HTMLButtonElement;
            const id = delButton.dataset.id as string;

            const userInfo = await this.firebaseStore.getCurrentUser();

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

            const userInfo = await this.firebaseStore.getCurrentUser();

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

            const userInfo = await this.firebaseStore.getCurrentUser();

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

    async getWillWatchList(isForce = false) {
        const res = await this.firebaseStore.getCurrentUser(isForce);
        const userInfoWillWatch: WillWatchType = res?.willWatch ?? { items: [] };

        return userInfoWillWatch.items
            .filter((item) => item.date && item.filmID)
            .map((item) => item.filmID);
    }

    async saveWillWatch(target: HTMLButtonElement, targetClass: string, activeClass: string) {
        const btn = target.closest(targetClass) as HTMLButtonElement;
        const id = btn.dataset.id as string;

        btn.disabled = true;
        btn.classList.toggle(activeClass);

        const userInfo = await this.firebaseStore.getCurrentUser();

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
