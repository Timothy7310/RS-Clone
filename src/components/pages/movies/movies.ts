import ControllerKP from '../../controller/controllerKP';
import { TMovie, Top250FilmItem, Top250PageData } from '../../templates/movie/typesMovie';
import {
    generateBody,
    generateHeader,
    getDotsItem,
    prepareLine,
    FIRST_PAGE,
    LAST_PAGE,
    NEXT_PAGE,
    PREV_PAGE,
} from '../../templates/movies/movies';
// import ticketsTemplate from '../../templates/tickets';
import Component from '../Component';
import FirebaseStore from '../../server/firebaseStore';

import { UserType } from '../../types/types';
import UserProfile from '../user_profile/userProfile';
import CardGenerator from '../../templates/movies/movieCard';

export default class MoviesTop {
    component: Component;

    container: HTMLElement;

    controller: ControllerKP;

    firebaseStore;

    userProfile;

    constructor() {
        this.component = new Component('section', 'movies');
        this.container = this.component.draw();
        this.controller = new ControllerKP();
        this.firebaseStore = new FirebaseStore();
        this.userProfile = new UserProfile();
    }

    draw(parentContainer: HTMLElement): void {
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }

    // eslint-disable-next-line class-methods-use-this
    async moviesEvent(event: Event) {
        const target = event.target as HTMLButtonElement;

        if (target.closest('.movies__card-rates-will-watch')) {
            this.userProfile.saveWillWatch(target, '.movies__card-rates-will-watch', 'movies__card-rates-will-watch--active');
        }

        // if (target.closest('.movies__card-rates-will-watch')) {
        //     await this.toggleWatchFilmState(target);
        // }
    }

    generatePageButton(page: number, isActive = false): HTMLLIElement {
        const li = document.createElement('li');
        li.classList.add('movies__pagination-item');
        if (page) {
            const button = document.createElement('button');
            button.classList.add('movies__pagination-btn');
            if (isActive) {
                button.classList.add('movies__pagination-btn--active');
            } else {
                button.addEventListener('click', () => {
                    this.changePage(page);
                });
            }
            button.textContent = page.toString();
            li.append(button);
        } else {
            li.append(getDotsItem());
        }
        return li;
    }

    createPagination(pageData: Top250PageData): HTMLDivElement {
        const container = document.createElement('div');
        container.classList.add('movies__pagination', 'movies__pagination--bottom');
        container.append(this.generateGoToFirstPage(pageData.page === 1));
        container.append(this.generateGoPrev(pageData.page, pageData.page === 1));
        const line = prepareLine(pageData.page, pageData.pages);
        const paginationContainer = document.createElement('ul');
        paginationContainer.classList.add('movies__pagination-list');
        line.forEach((page) => {
            const li = this.generatePageButton(page, page === pageData.page);
            paginationContainer.append(li);
        });
        container.append(paginationContainer);

        container.append(this.generateGoNext(pageData.page, pageData.page === pageData.pages));
        container.append(
            this.generateGoToFLastPage(pageData.pages, pageData.page === pageData.pages),
        );
        return container;
    }

    generateGoToFirstPage(isFirst = false): HTMLButtonElement {
        const button = document.createElement('button');
        button.classList.add('movies__pagination-btn', 'movies__pagination-btn--first');
        if (isFirst) {
            button.disabled = true;
        }
        button.insertAdjacentHTML('afterbegin', FIRST_PAGE);
        button.addEventListener('click', () => this.changePage(1));

        return button;
    }

    generateGoPrev(page: number, isFirst = false): HTMLButtonElement {
        const button = document.createElement('button');
        button.classList.add('movies__pagination-btn', 'movies__pagination-btn--prev');
        if (isFirst) {
            button.disabled = true;
        }

        button.insertAdjacentHTML('afterbegin', PREV_PAGE);
        button.addEventListener('click', () => this.changePage(page - 1));
        return button;
    }

    generateGoToFLastPage(lastPage: number, isLast = false): HTMLButtonElement {
        const button = document.createElement('button');
        button.classList.add('movies__pagination-btn', 'movies__pagination-btn--last');
        if (isLast) {
            button.disabled = true;
        }

        button.insertAdjacentHTML('afterbegin', LAST_PAGE);
        button.addEventListener('click', () => this.changePage(lastPage));
        return button;
    }

    generateGoNext(page: number, isLast = false): HTMLButtonElement {
        const button = document.createElement('button');
        button.classList.add('movies__pagination-btn', 'movies__pagination-btn--next');
        if (isLast) {
            button.disabled = true;
        }

        button.insertAdjacentHTML('afterbegin', NEXT_PAGE);
        button.addEventListener('click', () => this.changePage(page + 1));
        return button;
    }

    drawPage(movies: TMovie[], pageData: Top250PageData, id: number, generator: CardGenerator) {
        this.clearContainer();

        const mainHeader = this.mainHeader(id);
        const paginationHeaderNumbers = this.createPagination(pageData);
        const paginationFooterNumbers = this.createPagination(pageData);
        const header = generateHeader(pageData.total);
        const body = generateBody(movies, generator);

        this.container.insertAdjacentHTML('afterbegin', mainHeader);
        this.container.append(header);
        this.container.append(paginationHeaderNumbers);
        this.container.append(body);
        this.container.append(paginationFooterNumbers);
    }

    // eslint-disable-next-line class-methods-use-this
    mainHeader(id: number) {
        return `                
        <div class="movies__head">
        <h2 class="movies__title">
            Фильмы
        </h2>
        <a href=#/movie/${id} id="random">
            <button class="movies__random">
                Показать случайный фильм
            </button>
        </a>
    </div>`;
    }

    clearContainer() {
        let delChild = this.container.lastChild;
        while (delChild) {
            this.container.removeChild(delChild);
            delChild = this.container.lastChild;
        }
    }

    async getMoviesFromPageData(docs: Top250FilmItem[]): Promise<TMovie[]> {
        try {
            const movies = await Promise.all(
                docs.map((doc) => this.controller.getMovieForId(`${doc.id}`)),
            );
            return movies;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    async changePage(page = 1): Promise<void> {
        const pageData = await this.controller.getTop250(page);
        const id = await this.getRandomeId();
        if (pageData) {
            const movies = await this.getMoviesFromPageData(pageData.docs);
            const generator = new CardGenerator();
            await generator.reloadWatchList();
            this.drawPage(movies, pageData, id, generator);
        }
    }

    async getRandomeId() {
        const randomMovie = await this.controller.getRandom();
        const randomMovieId = randomMovie.id;
        return randomMovieId;
    }

    async toggleWatchFilmState(target: HTMLElement) {
        const filmButton = target.closest('.movies__card-rates-will-watch') as HTMLButtonElement;
        const id = filmButton.dataset.id as string;
        filmButton.disabled = true;
        filmButton.classList.toggle('movies__card-rates-will-watch--active');
        const userInfo = await this.firebaseStore.getCurrentUser(true);
        const newUserInfo: UserType = JSON.parse(JSON.stringify(userInfo));
        const userWillWatchLisIds = await this.userProfile.getWillWatchList();
        if (userWillWatchLisIds.includes(id)) {
            const newWillWatchList = newUserInfo.willWatch.items
                .filter((x) => x.filmID !== id);
            newUserInfo.willWatch.items = newWillWatchList;
            newUserInfo.willWatch.total = newWillWatchList.length;
        } else {
            const newWillWatchFilm = {
                date: `${new Date().getTime()}`,
                filmID: id,
            };
            newUserInfo.willWatch.items = newUserInfo.willWatch.items
                .filter((x) => x.date && x.filmID);
            newUserInfo.willWatch.items.push(newWillWatchFilm);
            newUserInfo.willWatch.total = newUserInfo.willWatch.items.length;
        }
        try {
            await this.firebaseStore.updateUserInfo(newUserInfo);
        } catch (e) {
            console.log(e);
        }
        filmButton.disabled = false;
    }
}
