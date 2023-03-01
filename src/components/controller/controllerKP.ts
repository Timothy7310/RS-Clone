import { Top250PageData } from '../templates/movie/typesMovie';
import { TFrameImage } from '../types/types';

class ControllerKP {
    tokenNum;

    token;

    baseURL;

    movieURL;

    personURL;

    reviewURL;

    imageURL;

    seasonURL;

    constructor() {
        this.tokenNum = '8DD8D2R-BSJ4163-KC3DTSV-2ZWA2AM';
        // this.tokenNum = '4ZKP5GE-A9D47VB-HQ3453N-8WCS1CM'; // запасной
        // this.tokenNum = 'QFCANVB-YJK4011-KXBRXVA-652J551';
        // this.tokenNum = 'XS0Q84W-5ZR44A8-J7FWVZK-MK81GJ5'; // еще один
        // this.tokenNum = 'YJJQ1XT-DNJMT7J-PTA5KZF-WWP9ANR'; // еще один
        // this.tokenNum = '2RGX017-HSV4RZN-MS2TY91-XHEQ1R5'; // еще один
        // this.tokenNum = 'QFCANVB-YJK4011-KXBRXVA-652J551'; // еще один
        // this.tokenNum = '238H0SS-904MAP9-NHE1XTM-1FVVPQR'; // еще один
        this.token = `?token=${this.tokenNum}`;
        this.baseURL = 'https://api.kinopoisk.dev/v1';
        this.movieURL = `${this.baseURL}/movie${this.token}`;
        this.personURL = `${this.baseURL}/person${this.token}`;
        this.reviewURL = `${this.baseURL}/review${this.token}`;
        this.imageURL = `${this.baseURL}/image${this.token}`;
        this.seasonURL = `${this.baseURL}/season${this.token}`;
    }

    async getImageFromMovie(id: string): Promise<TFrameImage> {
        const response = await fetch(`${this.imageURL}&page=1&limit=10&movieId=${id}&type=frame`);
        const result = await response.json();
        const frames = result.docs.filter((x: TFrameImage) => x.type === 'frame');
        const randomFrame = frames[Math.floor(Math.random() * frames.length)];
        return randomFrame;
    }

    async getMovies(page: number, limit = 10) {
        const response = await fetch(`${this.movieURL}&page=${page}&limit=${limit}`);
        const movies = await response.json();
        return movies;
    }

    async getMoviesTop250(page: number, limit = 10): Promise<Top250PageData | null> {
        try {
            const response = await fetch(`${this.movieURL}&field=top250&search=!null&sortField=top250&field=type&search=movie&movies&page=${page}&limit=${limit}&selectFields=id name top250 type`);
            const movies = await response.json();
            return movies;
        } catch (e) {
            console.log(`Something wrong with getting top 250 ${e}`);
            return null;
        }
    }

    async searchMovie(value: string, field: string) {
        const response = (await fetch(`${this.movieURL}&search=${value}&field=${field}`)).json();
        return response;
    }

    async searchPerson(value: string, field: string) {
        const response = await fetch(`${this.personURL}&search=${value}&field=${field}`);
        const persons = await response.json();
        return persons;
    }

    async searchReview(value: string, field: string) {
        const response = await fetch(`${this.reviewURL}&search=${value}&field=${field}`);
        const review = await response.json();
        return review;
    }

    async searchReviewCount(value: string, field: string, count: string) {
        const response = await fetch(`${this.reviewURL}&search=${value}&field=${field}&limit=${count}`);
        const review = await response.json();
        return review;
    }

    async searchImage(value: string, field: string) {
        const response = await fetch(`${this.imageURL}&search=${value}&field=${field}`);
        const image = await response.json();
        return image;
    }

    async searchSeasons(value: string, field: string) {
        const response = await fetch(`${this.seasonURL}&search=${value}&field=${field}`);
        const seasons = await response.json();
        return seasons;
    }

    async getRandom() {
        try {
            const response = await fetch('https://api.kinopoisk.dev/v1/movie/random', {
                method: 'GET',
                headers: {
                    'X-API-KEY': this.tokenNum,
                    accept: 'application/json',
                },
            });
            const randomMovie = await response.json();
            return randomMovie;
        } catch (err) {
            console.log(`Не получается добыть рандомный фильм из API. ${err}`);
            return null;
        }
    }

    async getMovieForId(id: string) {
        try {
            const response = await fetch(`${this.baseURL}/movie/${id}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': this.tokenNum,
                    accept: 'application/json',
                },
            });
            const randomMovie = await response.json();
            return randomMovie;
        } catch (err) {
            console.log(`Не получается найти фильм по id. ${err}`);
            return null;
        }
    }

    async getTop250(page: number, limit = 10) {
        try {
            const selectedFiels = [
                'id',
                'name',
                'rating.kp',
                'imagesInfo.framesCount',
            ];
            const select = selectedFiels.map((field) => `selectFields=${field}`).join('&');
            const response = await fetch(`${this.baseURL}/movie?${select}&sortField=rating.kp&sortType=-1&page=${page}&limit=${limit}&top250=%21null`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': this.tokenNum,
                    accept: 'application/json',
                },
            });
            const randomMovie = await response.json();
            return randomMovie;
        } catch (err) {
            console.log(`Не получается найти топ 250. ${err}`);
            return null;
        }
    }

    async getMoviesByIDs(id: number[]) {
        const response = await fetch(`${this.movieURL}&page=1&limit=10&${id.map((x) => `movieId=${x}`).join('&')}`);
        const movies = await response.json();
        return movies;
    }
}

export default ControllerKP;
