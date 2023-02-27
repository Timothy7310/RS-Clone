import ControllerKP from '../../controller/controllerKP';
import gamePageTemplate from '../../templates/game/gamePageTemplate';
import { TMovieTop, TQuestionData } from '../../types/types';

export default class Quiz {
    controller: ControllerKP;

    container: HTMLElement;

    currentPage;

    pages: {
        [page: number]: TQuestionData
    };

    constructor(container: HTMLElement) {
        this.container = container;
        this.controller = new ControllerKP();
        this.pages = [];
        this.currentPage = 1;
        this.loadFilms(250)
            .then((result) => {
                const pages = Object.values(result).map((page) => this.generateQuestion(page));
                return Promise.all(pages);
            })
            .then((pages) => {
                this.pages = pages.reduce((acc: {
                    [page: number]: TQuestionData
                }, page, index) => {
                    acc[index + 1] = page;
                    return acc;
                }, {});
            })
            .then(() => {
                this.drawQuestion();
            });
    }

    changePage() {
        this.currentPage += 1;
        this.drawQuestion();
    }

    drawQuestion() {
        const page = this.pages[this.currentPage];
        if (page) {
            this.container.insertAdjacentHTML('afterbegin', gamePageTemplate(page, this.currentPage));
        }
    }

    async loadFilms(count: number): Promise<{
        [pageNumber: number]: TMovieTop[];
    }> {
        const movies = await this.controller.getTop250(1, count);
        const pages: { [pageNumber: number]: TMovieTop[] } = {};
        let page = 1;
        (movies?.docs as TMovieTop[] ?? []).forEach((movie) => {
            if (Math.random() > 0.3 && movie.imagesInfo?.framesCount > 0) {
                if (pages[page]?.length > 3) {
                    page += 1;
                }
                if (page < 11) {
                    if (!pages[page]) {
                        pages[page] = [];
                    }
                    pages[page].push(movie);
                }
            }
        });
        return pages;
    }

    async generateQuestion(movies: TMovieTop[]): Promise<TQuestionData> {
        const question = {
            movies,
            picture: '',
            answerId: 0,
        };
        const ids = movies.map((movie) => movie.id);
        question.answerId = this.generateRandomId(ids);
        const frame = await this.controller.getImageFromMovie(question.answerId.toString());
        question.picture = frame.url;
        return question;
    }

    // eslint-disable-next-line class-methods-use-this
    generateRandomId(ids: number[]): number {
        const min = 0;
        const max = ids.length - 1;
        const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        return ids[randomIndex];
    }
}
