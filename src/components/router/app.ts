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
    }

    start() {
        this.drawContent();
        this.initEvent();
        this.burger.listen();
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
            const src = user[0].avatar;
            header.innerHTML = logInHeader;
            const headerAvatar = document.querySelector('.header__profile-avatar') as HTMLImageElement;
            headerAvatar.src = src;
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
        });

        bodyDOM.addEventListener('change', (e) => {
            this.userProfile.uploadAvatarEvent(e);
        });

        bodyDOM.addEventListener('input', (e) => {
            this.search.searchEvent(e);
        });

        window.addEventListener('popstate', () => {
            const isAuth = localStorage.getItem('isLogIn') === 'true';
            const location = window.location.href;
            if (isAuth && location.includes('#/login')) {
                window.location.href = '#/404';
            }

            if (!isAuth && location.includes('#/profile')) {
                window.location.href = '#/404';
            }
            this.swapHeader();
        });

        window.addEventListener('load', async () => {
            this.swapHeader();
        });
    }
}
