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
        this.token = '?token=XS0Q84W-5ZR44A8-J7FWVZK-MK81GJ5';
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

    async searchMovie(name: string, page = 1, total = 10) {
        const response = await fetch(`${this.movieURL}&page=${page}&total:${total}&name=${name}`);
        const movies = await response.json();
        return movies;
    }
}

export default ControllerTestKP;
