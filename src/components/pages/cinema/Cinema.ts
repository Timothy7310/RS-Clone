import Page from '../Page';
import billboardTemplate from '../../templates/billboard';
import ControllerUnofficialKP from '../../controller/ControllerUnofficialKP';
import { Premieres } from '../../types/types';

export default class Cinema {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    controllerUnofficialKP;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.controllerUnofficialKP = new ControllerUnofficialKP();
    }

    draw(): HTMLElement {
        this.container.classList.add('cinema');
        this.container.innerHTML = billboardTemplate;
        this.renderMovies();
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }

    async renderMovies() {
        const movies = await this.controllerUnofficialKP.getPremieres();
        const listDOM = document.querySelector('.billboard__list') as HTMLElement;
        let result = '';
        movies.forEach(async (movie: Premieres) => {
            const genres: string = movie.genres.reduce((acc: string[], x) => {
                acc.push(x.genre);
                return acc;
            }, []).join(', ');
            const time = movie.duration;
            // TODO: добавить рейтинг в .billboard__item-rate
            result += `
                <li class="billboard__item">
                    <a href="#/cinema/seances/${movie.kinopoiskId}" class="billboard__item-link">
                        <div class="billboard__item-tickets">
                            <svg class="billboard__item-tickets-icon">
                                <use href="./assets/img/sprite.svg#icon_tickets"></use>
                            </svg>
                            <span class="billboard__item-tickets-text">Билеты</span>
                        </div>
                        <div class="billboard__item-poster-wrap">
                            <img src="${movie.posterUrl}" alt="" class="billboard__item-poster">
                        </div>
                        <h3 class="billboard__item-name">
                            ${movie.nameRu ?? movie.nameEn}
                        </h3>
                        <span class="billboard__item-info">${movie.year}, ${genres}</span>
                        <span class="billboard__item-info">(${time}&nbsp;мин)</span>
                    </a>
                </li>
            `;
        });
        listDOM.innerHTML = result;
        await this.renderCalendar();
    }

    // eslint-disable-next-line class-methods-use-this
    cinemaEvent(target: HTMLElement) {
        const activeClass = 'billboard__days-btn--active';
        const chooseBtn = document.querySelector('.billboard__days-btn-choose') as HTMLElement;
        const calendar = document.querySelector('.billboard__days-calendar') as HTMLElement;
        const calendarActiveClass = 'billboard__days-calendar--active';
        const calendarBtns = document.querySelectorAll('.billboard__days-calendar-btn');
        const calendarBtnActiveClass = 'billboard__days-calendar-btn--active';

        if (target.closest(`.${activeClass}`)) {
            target.classList.remove(activeClass);
            chooseBtn.classList.remove(activeClass);
            calendar.classList.remove(calendarActiveClass);
            calendarBtns.forEach((btn) => btn.classList.remove(calendarBtnActiveClass));
            return;
        }

        if (target.closest('#billboard-today')) {
            const btn = target.closest('#billboard-today') as HTMLElement;
            Cinema.cinemaDayBtnLogic(target, btn);
        }

        if (target.closest('#billboard-tomorrow')) {
            const btn = target.closest('#billboard-tomorrow') as HTMLElement;
            Cinema.cinemaDayBtnLogic(target, btn);
        }

        if (target.closest('#billboard-choose')) {
            const btn = target.closest('#billboard-choose') as HTMLElement;
            Cinema.cinemaDayBtnLogic(target, btn);
            calendar.classList.toggle(calendarActiveClass);
        }

        if (target.closest('.billboard__days-calendar-btn')) {
            calendarBtns.forEach((btn) => btn.classList.remove(calendarBtnActiveClass));
            const day = target.closest('.billboard__days-calendar-btn') as HTMLElement;
            day.classList.add(calendarBtnActiveClass);
        }
    }

    static cinemaDayBtnLogic(target: HTMLElement, btn: HTMLElement) {
        const cinemaBtns = document.querySelectorAll('.billboard__days-btn');
        const activeClass = 'billboard__days-btn--active';
        const calendar = document.querySelector('.billboard__days-calendar') as HTMLElement;
        const calendarActiveClass = 'billboard__days-calendar--active';
        const calendarBtns = document.querySelectorAll('.billboard__days-calendar-btn');
        const calendarBtnActiveClass = 'billboard__days-calendar-btn--active';

        cinemaBtns.forEach((item) => item.classList.remove(activeClass));
        calendarBtns.forEach((item) => item.classList.remove(calendarBtnActiveClass));
        if (btn.classList.contains(activeClass)) {
            btn.classList.remove(activeClass);
        } else {
            btn.classList.add(activeClass);
        }
        calendar.classList.remove(calendarActiveClass);
    }

    // eslint-disable-next-line class-methods-use-this
    renderCalendar(days = 7) {
        const listDOM = document.querySelector('.billboard__days-calendar') as HTMLElement;
        let result = '';
        const date = new Date();
        let dateArr = [];
        for (let i = 1; i <= days; i += 1) {
            const d = new Date();
            d.setDate(date.getDate() + i);
            dateArr.push(d.toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric' }));
        }
        dateArr = dateArr.map((x) => x.split(', '));
        console.log(dateArr);
        dateArr.forEach((day) => {
            result += Cinema.calendarDay(day[0], day[1]);
        });
        listDOM.innerHTML = result;
    }

    static calendarDay(dayWeek: string, day: string) {
        switch (dayWeek) {
            case 'понедельник':
                return `
                <button class="billboard__days-calendar-btn">
                    <span class="billboard__days-calendar--day-week">пн</span>
                    <span class="billboard__days-calendar--day-month">${day}</span>
                </button>`;
            case 'вторник':
                return `
                <button class="billboard__days-calendar-btn">
                    <span class="billboard__days-calendar--day-week">вт</span>
                    <span class="billboard__days-calendar--day-month">${day}</span>
                </button>`;
            case 'среда':
                return `
                <button class="billboard__days-calendar-btn">
                    <span class="billboard__days-calendar--day-week">ср</span>
                    <span class="billboard__days-calendar--day-month">${day}</span>
                </button>`;
            case 'четверг':
                return `
                <button class="billboard__days-calendar-btn">
                    <span class="billboard__days-calendar--day-week">чт</span>
                    <span class="billboard__days-calendar--day-month">${day}</span>
                </button>`;
            case 'пятница':
                return `
                <button class="billboard__days-calendar-btn">
                    <span class="billboard__days-calendar--day-week">пт</span>
                    <span class="billboard__days-calendar--day-month">${day}</span>
                </button>`;
            case 'суббота':
                return `
                <button class="billboard__days-calendar-btn billboard__days-calendar-btn--holiday">
                    <span class="billboard__days-calendar--day-week">сб</span>
                    <span class="billboard__days-calendar--day-month">${day}</span>
                </button>`;
            case 'воскресенье':
                return `
                <button class="billboard__days-calendar-btn billboard__days-calendar-btn--holiday">
                    <span class="billboard__days-calendar--day-week">вс</span>
                    <span class="billboard__days-calendar--day-month">${day}</span>
                </button>`;
            default:
                console.log('Ошибка с датой');
                return '';
        }
    }
}
