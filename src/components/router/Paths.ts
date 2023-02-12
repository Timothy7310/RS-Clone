import Cinema from '../pages/cinema/Cinema';
import Main from '../pages/main/Main';
import Movie from '../pages/movie/MoviePage';
import MoviesPage from '../pages/movies/MoviesPage';
import Page from '../pages/Page';
import UserProfile from '../pages/user_profile/user_profile';

export interface IPath {
    path: string;
    getPage: (path?: string) => Page;
}

export const enum PagePaths {
    firstPage = '#/',
    mainPage = '#/main',
    moviesPage = '#/movies',
    moviePage = '#/movie',
    cinemaPage = '#/cinema',
    cinemaSeancesPage = '/cinema/seances',
    ticketsPage = 'cinema/tickets',
    userProfilePage = '#/profile',
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
        getPage: (path?: string) => new Movie(path),
    },
    {
        path: PagePaths.moviesPage,
        getPage: (path?: string) => new MoviesPage(path),
    },
    {
        path: PagePaths.cinemaPage,
        getPage: (path?: string) => new Cinema(path),
    },
    {
        path: PagePaths.userProfilePage,
        getPage: (path?: string) => new UserProfile(path),
    },
];
