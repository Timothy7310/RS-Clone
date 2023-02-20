import { Top250PageData } from '../templates/movie/typesMovie';

class ControllerKP {
    token;

    baseURL;

    movieURL;

    personURL;

    reviewURL;

    imageURL;

    seasonURL;

    constructor() {
        this.token = '?token=QFCANVB-YJK4011-KXBRXVA-652J551';
        this.baseURL = 'https://api.kinopoisk.dev';
        this.movieURL = `${this.baseURL}/movie${this.token}`;
        this.personURL = `${this.baseURL}/person${this.token}`;
        this.reviewURL = `${this.baseURL}/review${this.token}`;
        this.imageURL = `${this.baseURL}/image${this.token}`;
        this.seasonURL = `${this.baseURL}/season${this.token}`;
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
            console.log(e);
            alert('Something wrong with getting top 250');
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

    // TODO: не загружается previewUrl
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

    // eslint-disable-next-line class-methods-use-this
    async getRandom() {
        const response = await fetch('https://test-api.kinopoisk.dev/movie/random', {
            method: 'GET',
            headers: {
                'X-API-KEY': 'QFCANVB-YJK4011-KXBRXVA-652J551',
                accept: 'application/json',
            },
        });
        const randomMovie = await response.json();
        return randomMovie;
    }
}

export default ControllerKP;
