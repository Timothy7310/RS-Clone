import Page from '../Page';
import seancesTemplates from '../../templates/seances';
import ControllerKP from '../../controller/controllerKP';
import Cinema from '../cinema/Cinema';

export default class Seances {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    id?: string;

    controllerKP;

    cinema;

    constructor(path?: string, id?: string) {
        this.page = new Page(path);
        this.id = id;
        this.controllerKP = new ControllerKP();
        this.cinema = new Cinema();
        this.container = this.page.draw();
    }

    draw(): HTMLElement {
        this.renderSeance();
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }

    async renderSeance() {
        const movie = await this.controllerKP.getMovieForId(this.id as string);

        this.container.innerHTML = seancesTemplates(movie);
        this.cinema.renderCalendar('.seances__days-calendar');
    }

    static seanceDayBtnLogic(target: HTMLElement, btn: HTMLElement) {
        const seanceBtns = document.querySelectorAll('.seances__days-btn');
        const activeClass = 'seances__days-btn--active';
        const calendar = document.querySelector('.seances__days-calendar') as HTMLElement;
        const calendarActiveClass = 'seances__days-calendar--active';
        const calendarBtns = document.querySelectorAll('.seances__days-calendar-btn');
        const calendarBtnActiveClass = 'seances__days-calendar-btn--active';

        seanceBtns.forEach((item) => item.classList.remove(activeClass));
        calendarBtns.forEach((item) => item.classList.remove(calendarBtnActiveClass));
        if (btn.classList.contains(activeClass)) {
            btn.classList.remove(activeClass);
        } else {
            btn.classList.add(activeClass);
        }
        calendar.classList.remove(calendarActiveClass);
    }

    // eslint-disable-next-line class-methods-use-this
    seanceEvent(target: HTMLElement) {
        const activeClass = 'seances__days-btn--active';
        const chooseBtn = document.querySelector('.seances__days-btn-choose') as HTMLElement;
        const calendar = document.querySelector('.seances__days-calendar') as HTMLElement;
        const calendarActiveClass = 'seances__days-calendar--active';
        const calendarBtns = document.querySelectorAll('.seances__days-calendar-btn');
        const calendarBtnActiveClass = 'seances__days-calendar-btn--active';

        if (target.closest(`.${activeClass}`)) {
            target.classList.remove(activeClass);
            chooseBtn.classList.remove(activeClass);
            calendar.classList.remove(calendarActiveClass);
            calendarBtns.forEach((btn) => btn.classList.remove(calendarBtnActiveClass));
            return;
        }

        if (target.closest('#seances-today')) {
            const btn = target.closest('#seances-today') as HTMLElement;
            Seances.seanceDayBtnLogic(target, btn);
        }

        if (target.closest('#seances-tomorrow')) {
            const btn = target.closest('#seances-tomorrow') as HTMLElement;
            Seances.seanceDayBtnLogic(target, btn);
        }

        if (target.closest('#seances-choose')) {
            const btn = target.closest('#seances-choose') as HTMLElement;
            Seances.seanceDayBtnLogic(target, btn);
            calendar.classList.toggle(calendarActiveClass);
        }

        if (target.closest('.seances__days-calendar-btn')) {
            calendarBtns.forEach((btn) => btn.classList.remove(calendarBtnActiveClass));
            const day = target.closest('.seances__days-calendar-btn') as HTMLElement;
            day.classList.add(calendarBtnActiveClass);
        }
    }
}
