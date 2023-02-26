/* eslint-disable max-len */
import Page from '../Page';
import Cash from './sections/Cash';
import Popular from './sections/Popular';
import Soon from './sections/soon';
import Tickets from './sections/Tickets';
import { Premieres, CountryBoxOfficeType } from '../../types/types';
import ControllerUnofficialKP from '../../controller/ControllerUnofficialKP';
import ControllerKP from '../../controller/controllerKP';
import ControllerTestKP from '../../controller/controllerTestKP';

export default class Main {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    popular: Popular;

    tickets: Tickets;

    soon: Soon;

    cash: Cash;

    controllerUnofficialKP;

    controllerKP;

    controllerTestKP;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.popular = new Popular();
        this.tickets = new Tickets();
        this.soon = new Soon();
        this.cash = new Cash();
        this.controllerUnofficialKP = new ControllerUnofficialKP();
        this.controllerKP = new ControllerKP();
        this.controllerTestKP = new ControllerTestKP();
    }

    draw(): HTMLElement {
        this.drawPage();
        return this.container;
    }

    async drawPage() {
        this.container.appendChild(this.popular.draw());
        this.container.appendChild(this.tickets.draw());
        this.container.appendChild(this.soon.draw());
        this.container.appendChild(this.cash.draw());
        await this.renderPremiereSlider();
        await this.renderSoonInCinema(5);
        await this.renderBoxOffice('russia');
        await this.renderBoxOffice('world');
        await this.renderBoxOffice('usa');
        this.container.classList.add('main');
    }

    clear(): void {
        this.page.clear();
    }

    async renderPremiereSlider() {
        let result = '';
        const movies = await (await this.controllerUnofficialKP.getPremieres());
        const listDOM = document.querySelector('.tickets__slider') as HTMLElement;
        // TODO: add rating logic to .tickets__slide-rate
        movies.forEach(async (movie: Premieres) => {
            result += `
                <li class="tickets__slide">
                    <a href="#/cinema/seances/${movie.kinopoiskId}" class="tickets__slide-link">
                        <div class="tickets__slide-img-wrap">
                          <img class="tickets__slide-img" src="${movie.posterUrlPreview}" alt="">
                        </div>
            <h3 class="tickets__slide-name">${movie.nameRu ? movie.nameRu : movie.nameEn}</h3>
            <span class="tickets__slide-genres">${movie.year}, ${movie.genres[0].genre}</span>
                    </a>
                </li>
            `;
        });
        listDOM.innerHTML = result;
    }

    async renderSoonInCinema(count: number) {
        const premiers = await this.controllerUnofficialKP.getPremieres();
        const movies = premiers.filter((movie: Premieres) => new Date(movie.premiereRu).getTime()).slice(0, count);
        // Почему-то не работает, видимо нет обновленой инфо о релизах в апишке
        // const movies = premiers.filter((movie: Premieres) => new Date(movie.premiereRu).getTime() > new Date().getTime()).slice(0, count);
        let result = '';
        const listDOM = document.querySelector('.soon-cinema__list') as HTMLElement;
        movies.forEach((movie: Premieres) => {
            // TODO: добавить склонения февраль -> февраля
            const day = new Date(movie.premiereRu).toLocaleDateString('ru-RU', { day: 'numeric' });
            const month = new Date(movie.premiereRu).toLocaleDateString('ru-RU', { month: 'long' });
            result += `
                <li class="soon-cinema__item">
                    <a href="#/cinema/seances/${movie.kinopoiskId}">
                        <img class="soon-cinema__item-poster" src="${movie.posterUrlPreview}" alt="">
                    </a>
                    <div class="soon-cinema__item-name-container">
                        <a href="#/cinema/seances/${movie.kinopoiskId}">
                            <span class="soon-cinema__item-name">${movie.nameRu}</span>
                        </a>
                        <span class="soon-cinema__item-name-original">${movie.nameEn ?? ''}</span>
                    </div>
                    <div class="soon-cinema__item-date">
                        <span class="soon-cinema__item-date-day">${day}</span>
                        <span class="soon-cinema__item-date-mounth">${month}</span>
                    </div>
                    <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                        <svg class="soon-cinema__item-marker-icon">
                            <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                        </svg>
                    </button>
                </li>
            `;
        });
        listDOM.innerHTML = result;
    }

    // eslint-disable-next-line class-methods-use-this
    async renderBoxOffice(type: 'world' | 'russia' | 'usa') {
        const listDOM = document.querySelector(`.cash__card-list--${type}`) as HTMLElement;
        let result = '';
        const ids = await this.controllerUnofficialKP.getPremiereIDs() as number[];
        const movies: CountryBoxOfficeType = await this.controllerTestKP.getMoviesBoxOffice(ids, type, 5);

        movies.docs.forEach((movie) => {
            const value = movie.fees?.[type]?.value ?? 0;
            const currency = movie.fees?.[type]?.currency ?? '$';

            result += `
            <li class="cash__card-item">
                    <a href="#/movie/${movie.id}" class="cash__card-item-poster-wrap">
                        <img src="${movie?.poster?.previewUrl || movie?.poster?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Out_Of_Poster.jpg/450px-Out_Of_Poster.jpg'}" alt="" class="cash__card-item-poster">
                    </a>
                <div class="cash__card-item-info">
                        <div class="cash__card-item-info-head">
                            <a href="#/cinema/seances/${movie.id}" class="cash__card-item-name-wrap">
                                <span class="cash__card-item-name">${movie.name}</span>
                            </a>
                            <span class="cash__card-item-total">${(value / 1000000).toFixed(2)} млн ${currency}</span>
                        </div>
                </div>
            </li>
            `;
        });
        listDOM.innerHTML = result ?? '';
    }
}
