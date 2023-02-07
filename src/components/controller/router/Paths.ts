import { Main } from "../../pages/main/Main"
import { Movie } from "../../pages/movie/movie_test";
import Page from "../../pages/Page";

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
];