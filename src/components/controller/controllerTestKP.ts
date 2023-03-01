import { ImagesType } from '../types/types';
import ControllerKP from './controllerKP';

class ControllerTestKP {
    token;

    baseURL;

    movieURL;

    personURL;

    reviewURL;

    imageURL;

    seasonURL;

    randomMovieURL;

    tokenNum;

    constructor() {
        // this.token = '?token=QFCANVB-YJK4011-KXBRXVA-652J551';
        // this.token = '?token=XS0Q84W-5ZR44A8-J7FWVZK-MK81GJ5'; // еще один
        // this.token = '?token=YJJQ1XT-DNJMT7J-PTA5KZF-WWP9ANR'; // еще один
        // this.tokenNum = '2RGX017-HSV4RZN-MS2TY91-XHEQ1R5';
        this.tokenNum = 'QFCANVB-YJK4011-KXBRXVA-652J551';
        this.token = `?token=${this.tokenNum}`; // еще один
        // this.token = '?token=238H0SS-904MAP9-NHE1XTM-1FVVPQR'; // еще один
        this.baseURL = 'https://api.kinopoisk.dev/v1';
        this.movieURL = `${this.baseURL}/movie${this.token}`;
        this.randomMovieURL = `${this.baseURL}/movie/random${this.token}`;
        this.personURL = `${this.baseURL}/person${this.token}`;
        this.reviewURL = `${this.baseURL}/review${this.token}`;
        this.imageURL = `${this.baseURL}/image${this.token}`;
        this.seasonURL = `${this.baseURL}/season${this.token}`;
    }

    async getRandomMovieFrame(id: string) {
        const response = await fetch(`${this.imageURL}&page=1&limit=10&movieId=${id}`);
        const images: ImagesType = await response.json();

        const frames = images.docs.filter((x) => x.type === 'frame');

        const randomFrame = frames[Math.floor(Math.random() * frames.length)];
        return randomFrame;
    }

    async getRandomFilm() {
        const response = await fetch(`${this.randomMovieURL}`);
        const movie = await response.json();

        return movie;
    }

    async searchMovie(name: string, page = 1, limit = 10) {
        const response = await fetch(`${this.movieURL}&page=${page}&limit:${limit}&name=${name}`);
        const movies = await response.json();
        return movies;
    }

    async getMoviesBoxOffice(id: number[], country: string, limit = 5) {
        const response = await fetch(`${this.movieURL}&selectFields=id%20name%20fees%20poster&sortField=fees.${country}.value&sortType=-1&page=1&limit=${limit}&${id.map((x) => `id=${x}`).join('&')}`);
        const movies = await response.json();
        return movies;
    }

    async getMovies(page: number, limit = 10) {
        const input = document.querySelector('.header__search-input') as HTMLInputElement;

        if (input.value.length === 0) {
            const movies = await new ControllerKP().getTop250(page, limit);
            return movies;
        }

        const movies = await this.searchMovie(input.value, page, limit);
        return movies;
    }

    async getMovieByID(id: string) {
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
}

export default ControllerTestKP;
