import { ImagesType } from '../types/types';
import ApiNum from '../utils/apiCount';
import API_TOKEN from '../../configApi';

class ControllerTestKP {
    baseURL;

    movieURL;

    personURL;

    reviewURL;

    imageURL;

    seasonURL;

    randomMovieURL;

    tokenNum;

    constructor() {
        this.tokenNum = '8DD8D2R-BSJ4163-KC3DTSV-2ZWA2AM';
        this.tokenNum = API_TOKEN;
        this.baseURL = 'https://api.kinopoisk.dev/v1';
        this.movieURL = `${this.baseURL}/movie`;
        this.randomMovieURL = `${this.baseURL}/movie/random`;
        this.personURL = `${this.baseURL}/person`;
        this.reviewURL = `${this.baseURL}/review`;
        this.imageURL = `${this.baseURL}/image`;
        this.seasonURL = `${this.baseURL}/season`;
    }

    async getRandomMovieFrame(id: string) {
        ApiNum();
        const response = await fetch(`${this.imageURL}?page=1&limit=10&movieId=${id}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const images: ImagesType = await response.json();

        const frames = images.docs.filter((x) => x.type === 'frame');

        const randomFrame = frames[Math.floor(Math.random() * frames.length)];
        return randomFrame;
    }

    async getRandomFilm() {
        ApiNum();
        const response = await fetch(`${this.randomMovieURL}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const movie = await response.json();

        return movie;
    }

    async searchMovie(name: string, page = 1, limit = 10) {
        ApiNum();
        const response = await fetch(`${this.movieURL}?page=${page}&limit:${limit}&name=${name}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const movies = await response.json();
        return movies;
    }

    async getMoviesBoxOffice(id: number[], country: string, limit = 5) {
        ApiNum();
        const response = await fetch(`${this.movieURL}?selectFields=id%20name%20fees%20poster&sortField=fees.${country}.value&sortType=-1&page=1&limit=${limit}&${id.map((x) => `id=${x}`).join('&')}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const movies = await response.json();
        return movies;
    }

    async getMovies(page: number, limit = 10) {
        ApiNum();
        const input = document.querySelector('.header__search-input') as HTMLInputElement;

        if (input.value.length === 0) {
            const movies = await this.getTop250(page, limit);
            return movies;
        }

        const movies = await this.searchMovie(input.value, page, limit);
        return movies;
    }

    async getMovieByID(id: string) {
        ApiNum();
        const response = await fetch(`${this.baseURL}/movie/${id}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const movie = await response.json();
        return movie;
    }

    async getTop250(page: number, limit = 10) {
        const response = await fetch(`${this.movieURL}?selectFields=id%20poster%20name%20rating%20countries%20genres%20persons%20votes&page=${page}&limit=${limit}&top250=%21null`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const movie = await response.json();
        return movie;
    }
}

export default ControllerTestKP;
