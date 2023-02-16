import Router, { IRouter } from './Router';
import Cinema from '../pages/cinema/Cinema';
import Login from '../pages/login/Login';
import UserProfile from '../pages/user_profile/userProfile';

const rootElement = document.querySelector('#content');

export default class App {
    router!: IRouter;

    cinema;

    login;

    userProfile;

    constructor() {
        if (rootElement) {
            this.router = new Router(rootElement);
        }
        this.cinema = new Cinema();
        this.login = new Login();
        this.userProfile = new UserProfile();
    }

    start() {
        this.drawContent();
        this.initEvent();
    }

    drawContent() {
        this.router.listen();
        this.router.navigateToPage();
    }

    initEvent() {
        const bodyDOM = document.querySelector('body') as HTMLElement;

        bodyDOM.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;

            this.cinema.cinemaEvent(target);
            this.login.loginEvent(target, e);
            this.userProfile.userProfileEvent(e);
        });
    }
}
