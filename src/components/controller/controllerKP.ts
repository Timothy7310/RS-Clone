import { Top250PageData } from '../templates/movie/typesMovie';
import { TFrameImage } from '../types/types';
import ApiNum from '../utils/apiCount';
import API_TOKEN from '../../configApi';

class ControllerKP {
    tokenNum;

    baseURL;

    movieURL;

    personURL;

    reviewURL;

    imageURL;

    seasonURL;

    constructor() {
        // this.tokenNum = '8DD8D2R-BSJ4163-KC3DTSV-2ZWA2AM'; // еще один
        this.tokenNum = API_TOKEN; // еще один

        this.baseURL = 'https://api.kinopoisk.dev/v1';
        this.movieURL = `${this.baseURL}/movie`;
        this.personURL = `${this.baseURL}/person`;
        this.reviewURL = `${this.baseURL}/review`;
        this.imageURL = `${this.baseURL}/image`;
        this.seasonURL = `${this.baseURL}/season`;
    }

    async getImageFromMovie(id: string): Promise<TFrameImage> {
        ApiNum();
        const response = await fetch(`${this.imageURL}?page=1&limit=10&movieId=${id}&type=frame`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const result = await response.json();
        const frames = result.docs.filter((x: TFrameImage) => x.type === 'frame');
        const randomFrame = frames[Math.floor(Math.random() * frames.length)];
        return randomFrame;
    }

    async getMovies(page: number, limit = 10) {
        ApiNum();
        const response = await fetch(`${this.movieURL}?page=${page}&limit=${limit}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const movies = await response.json();
        return movies;
    }

    async getMoviesTop250(page: number, limit = 10): Promise<Top250PageData | null> {
        ApiNum();
        try {
            const response = await fetch(`${this.movieURL}?field=top250&search=!null&sortField=top250&field=type&search=movie&movies&page=${page}&limit=${limit}&selectFields=id name top250 type`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': this.tokenNum,
                    accept: 'application/json',
                },
            });
            const movies = await response.json();
            return movies;
        } catch (e) {
            console.log(`Something wrong with getting top 250 ${e}`);
            return null;
        }
    }

    async searchMovie(value: string, field: string) {
        ApiNum();
        const response = (await fetch(`${this.movieURL}?search=${value}&field=${field}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        })).json();
        return response;
    }

    async searchPerson(value: string, field: string) {
        ApiNum();
        const response = await fetch(`${this.personURL}?search=${value}&field=${field}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const persons = await response.json();
        return persons;
    }

    async searchReview(value: string, field: string) {
        ApiNum();
        const response = await fetch(`${this.reviewURL}?search=${value}&field=${field}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const review = await response.json();
        return review;
    }

    async searchReviewCount(value: string, field: string, count: string) {
        ApiNum();
        const response = await fetch(`${this.reviewURL}?search=${value}&field=${field}&limit=${count}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const review = await response.json();
        return review;
    }

    async searchImage(value: string, field: string) {
        ApiNum();
        const response = await fetch(`${this.imageURL}?search=${value}&field=${field}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const image = await response.json();
        return image;
    }

    async searchSeasons(value: string, field: string) {
        ApiNum();
        const response = await fetch(`${this.seasonURL}?search=${value}&field=${field}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const seasons = await response.json();
        return seasons;
    }

    async getRandom() {
        ApiNum();
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
        ApiNum();
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
        ApiNum();
        try {
            const selectedFiels = [
                'id',
                'name',
                'rating.kp',
                'imagesInfo.framesCount',
            ];
            const select = selectedFiels.map((field) => `selectFields=${field}`).join('&');
            const response = await fetch(`${this.baseURL}/movie?${select}?sortField=rating.kp&sortType=-1&page=${page}&limit=${limit}&top250=%21null`, {
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
        ApiNum();
        const response = await fetch(`${this.movieURL}?page=1&limit=10&${id.map((x) => `movieId=${x}`).join('&')}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': this.tokenNum,
                accept: 'application/json',
            },
        });
        const movies = await response.json();
        return movies;
    }
}

export default ControllerKP;
