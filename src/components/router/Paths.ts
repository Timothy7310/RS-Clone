import Cinema from '../pages/cinema/Cinema';
import Main from '../pages/main/Main';
import Movie from '../pages/movie/MoviePage';
import MoviesPage from '../pages/movies/MoviesPage';
import Page from '../pages/Page';
import UserProfile from '../pages/user_profile/userProfile';
import Seances from '../pages/session/Seances';
import Login from '../pages/login/Login';
import GameStart from '../pages/game/gameStartPage';
import GamePage from '../pages/game/gamePage';
import GameFinish from '../pages/game/gameFinishPage';

export interface IPath {
    path: string;
    getPage: (path?: string, id?: string) => Page;
}

export const enum PagePaths {
    firstPage = '#/',
    mainPage = '#/main',
    moviesPage = '#/movies',
    moviePage = '#/movie',
    cinemaPage = '#/cinema',
    cinemaSeancesPage = '#/seances',
    ticketsPage = 'cinema/tickets',
    userProfilePage = '#/profile',
    loginPage = '#/login',
    startGame = '#/gamestart',
    game = '#/game',
    finishGame = '#/gamefinish',
}

export const Paths = [
    {
        path: PagePaths.firstPage,
        getPage: (path?: string) => new Main(path),
    },
    {
        path: PagePaths.mainPage,
        getPage: (path?: string) => new Main(path),
    },
    {
        path: PagePaths.moviePage,
        getPage: (path?: string, id?: string) => new Movie(path, id),
    },
    {
        path: PagePaths.moviesPage,
        getPage: (path?: string) => new MoviesPage(path),
    },
    {
        path: PagePaths.cinemaSeancesPage,
        getPage: (path?: string, id?: string) => new Seances(path, id),
    },
    {
        path: PagePaths.cinemaPage,
        getPage: (path?: string) => new Cinema(path),
    },
    {
        path: PagePaths.userProfilePage,
        getPage: (path?: string) => new UserProfile(path),
    },
    {
        path: PagePaths.loginPage,
        getPage: (path?: string) => new Login(path),
    },
    {
        path: PagePaths.startGame,
        getPage: (path?: string) => new GameStart(path),
    },
    {
        path: PagePaths.game,
        getPage: (path?: string) => new GamePage(path),
    },
    {
        path: PagePaths.finishGame,
        getPage: (path?: string) => new GameFinish(path),
    },
];
