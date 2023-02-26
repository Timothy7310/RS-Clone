// import { debounce } from 'ts-debounce';
// import _ from 'lodash';
// import { debounce } from 'lodash';
// import debounceAsync from '../utils/test';
import Router, { IRouter } from './Router';
import Cinema from '../pages/cinema/Cinema';
import Burger from '../utils/burger';
import Login from '../pages/login/Login';
import UserProfile from '../pages/user_profile/userProfile';

import logInHeader from '../templates/log-in-header';
import notLogInHeader from '../templates/not-log-in-header';
import FirebaseAuthUser from '../server/firebaseAuthUser';
import FirebaseStore from '../server/firebaseStore';

import Search from '../utils/search';

import MoviesTop from '../pages/movies/movies';
import Main from '../pages/main/Main';
import Movie from '../pages/movie/MoviePage';

const rootElement = document.querySelector('#content');

export default class App {
    router!: IRouter;

    cinema;

    burger;

    login;

    userProfile;

    firebaseAuthUser;

    firebaseStore;

    search;

    moviesTop;

    main;

    movie;

    constructor() {
        if (rootElement) {
            this.router = new Router(rootElement);
        }
        this.cinema = new Cinema();
        this.burger = new Burger();
        this.login = new Login();
        this.userProfile = new UserProfile();
        this.firebaseAuthUser = new FirebaseAuthUser();
        this.firebaseStore = new FirebaseStore();
        this.search = new Search();
        this.moviesTop = new MoviesTop();
        this.main = new Main();
        this.movie = new Movie();
    }

    start() {
        this.drawContent();
        this.initEvent();
        this.swapHeader();
        this.burger.listen();
        this.swapHeader();
    }

    drawContent() {
        this.router.listen();
        this.router.navigateToPage();
    }

    async swapHeader() {
        const isAuth = await this.firebaseAuthUser.isUserAuth();
        const header = document.querySelector('header') as HTMLElement;

        if (isAuth) {
            const user = await this.firebaseStore.getCurrentUser();
            if (user) {
                const src = user.avatar;
                header.innerHTML = logInHeader;
                const headerAvatar = document.querySelector('.header__profile-avatar') as HTMLImageElement;
                headerAvatar.src = src;
            }
        } else {
            header.innerHTML = notLogInHeader;
        }
    }

    initEvent() {
        const bodyDOM = document.querySelector('body') as HTMLElement;

        bodyDOM.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;

            this.cinema.cinemaEvent(target);
            this.login.loginEvent(target, e);
            this.userProfile.userProfileEvent(e);
            this.moviesTop.moviesEvent(e);
            this.main.mainPageEvent(e);
            this.movie.moviePageEvents(e);
        });

        bodyDOM.addEventListener('change', (e) => {
            this.userProfile.uploadAvatarEvent(e);
        });

        bodyDOM.addEventListener('input', (e) => {
            this.search.searchEvent(e);
            this.userProfile.validationMark(e);
        });

        bodyDOM.addEventListener('submit', (e) => {
            this.search.renderSearchPage(e);
        });

        window.addEventListener('popstate', async () => {
            const isAuth = localStorage.getItem('isLogIn') === 'true';
            const location = window.location.href;
            if (isAuth && location.includes('#/login')) {
                window.location.href = '#/404';
            }

            if (!isAuth && location.includes('#/profile')) {
                window.location.href = '#/404';
            }
            await this.swapHeader();
        });
    }
}
