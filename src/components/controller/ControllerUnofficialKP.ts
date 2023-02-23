import { Premieres, BoxOffice, FeesType } from '../types/types';

class ControllerUnofficialKP {
    rootURL;

    apiKey;

    premieresURL;

    moviesURL;

    boxOffice: BoxOffice[];

    constructor() {
        this.rootURL = 'https://kinopoiskapiunofficial.tech/api/v2.2';
        // this.apiKey = '1257d22f-c214-4d2a-bb6a-99ea6c1c66d5';
        this.apiKey = '1081c1fd-9b5b-43b4-905b-878e960e39ca'; // еще один ключ, на всякий случай
        this.premieresURL = 'films/premieres';
        this.moviesURL = 'films';
        this.boxOffice = [];
    }

    async getPremieres() {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        let monthStr;
        switch (month) {
            case 0:
                monthStr = 'JANUARY';
                break;
            case 1:
                monthStr = 'FEBRUARY';
                break;
            case 2:
                monthStr = 'MARCH';
                break;
            case 3:
                monthStr = 'APRIL';
                break;
            case 4:
                monthStr = 'MAY';
                break;
            case 5:
                monthStr = 'JUNE';
                break;
            case 6:
                monthStr = 'JULY';
                break;
            case 7:
                monthStr = 'AUGUST';
                break;
            case 8:
                monthStr = 'SEPTEMBER';
                break;
            case 9:
                monthStr = 'OCTOBER';
                break;
            case 10:
                monthStr = 'NOVEMBER';
                break;
            case 11:
                monthStr = 'DECEMBER';
                break;
            default:
                console.log('error with month');
        }
        try {
            const response = await fetch(`${this.rootURL}/${this.premieresURL}?year=${year}&month=${monthStr}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': this.apiKey,
                    'Content-Type': 'application/json',
                },
            });
            const movies = await response.json();
            return movies.items;
        } catch (error) {
            console.log(`Пока что нельзя получить премьеры из API. ${error}`);
            return null;
        }
    }

    async getPremiereIDs() {
        try {
            const ids: number[] = [];
            const movies = await this.getPremieres();
            movies.forEach((item: Premieres) => {
                ids.push(item.kinopoiskId);
            });
            return ids;
        } catch (error) {
            console.log(`Пока что нельзя получить id премьер из API. ${error}`);
            return null;
        }
    }

    async getMovieByID(id: number) {
        try {
            const response = await fetch(`${this.rootURL}/${this.moviesURL}/${id}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': this.apiKey,
                    'Content-Type': 'application/json',
                },
            });
            const movie = await response.json();
            return movie;
        } catch (error) {
            console.log(`Пока что нельзя получить фильм из API. ${error}`);
            return null;
        }
    }

    async getFees(id: number) {
        try {
            const response = await fetch(`${this.rootURL}/films/${id}/box_office`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': this.apiKey,
                    'Content-Type': 'application/json',
                },
            });
            const fees = await response.json();
            return fees.items;
        } catch (error) {
            console.log(`Пока что нельзя получить сборы по странам из API. ${error}`);
            return null;
        }
    }

    async getBoxOffice(type: FeesType) {
        const boxOffice: BoxOffice[][] = [];
        const movies = await this.getPremieres();
        movies.forEach(async (movie: Premieres, index: number) => {
            if (index < 5) {
                const fees = await this.getFees(movie.kinopoiskId);
                console.log(fees);

                boxOffice.push(fees);
            }
        });
        console.log(type);

        console.log(boxOffice.flat());

        return boxOffice;
    }
}

export default ControllerUnofficialKP;
