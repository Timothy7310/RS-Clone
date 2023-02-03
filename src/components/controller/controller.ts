class Controller {
    token;

    baseURL;

    movieURL;

    personURL;

    reviewURL;

    imageURL;

    seasonURL;

    constructor() {
        this.token = '?token=W0QWBBA-C83483K-GYKVDAT-GTSVVSJ';
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
}

export default Controller;
