import { ImagesType } from '../types/types';

class ControllerTestKP {
    token;

    baseURL;

    movieURL;

    personURL;

    reviewURL;

    imageURL;

    seasonURL;

    randomMovieURL;

    constructor() {
        this.token = '?token=QFCANVB-YJK4011-KXBRXVA-652J551';
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
        console.log(images);

        const frames = images.docs.filter((x) => x.type === 'frame');

        const randomFrame = frames[Math.floor(Math.random() * frames.length)];
        return randomFrame;
    }

    async getRandomFilm() {
        const response = await fetch(`${this.randomMovieURL}`);
        const movie = await response.json();

        return movie;
    }

    async getMoviesBoxOffice(id: number[], country: string, limit = 5) {
        const response = await fetch(`${this.movieURL}&selectFields=id%20name%20fees%20poster&sortField=fees.${country}.value&sortType=-1&page=1&limit=${limit}&${id.map((x) => `id=${x}`).join('&')}`);
        const movies = await response.json();
        return movies;
    }
}

export default ControllerTestKP;
