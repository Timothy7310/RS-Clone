import Page from '../Page';
import seancesTemplates from '../../templates/seances';
import ControllerKP from '../../controller/controllerKP';
import Cinema from '../cinema/Cinema';
import modalTicketTemplates from '../../templates/modal-ticket';
import FirebaseStore from '../../server/firebaseStore';

export default class Seances {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    id?: string;

    controllerKP;

    cinema;

    price;

    firebaseStore;

    constructor(path?: string, id?: string) {
        this.page = new Page(path);
        this.id = id;
        this.controllerKP = new ControllerKP();
        this.cinema = new Cinema();
        this.firebaseStore = new FirebaseStore();
        this.container = this.page.draw();
        this.price = 0;
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

    async seanceEvent(target: HTMLElement) {
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

        if (target.closest('.seances__item-time-option-btn')) {
            const body = document.querySelector('body') as HTMLElement;
            const btn = target.closest('.seances__item-time-option-btn') as HTMLButtonElement;

            const modal = document.createElement('div');
            const dateBtn = document.querySelector('.billboard__days-calendar-btn--active') as HTMLElement ?? document.querySelector('.seances__days-btn--active') as HTMLElement ?? document.querySelector('#seances-today') as HTMLElement;
            const date = dateBtn.dataset.date as string;
            const time = btn.textContent as string;
            const nameElem = document.querySelector('.seances__movie-name') as HTMLElement;
            const name = nameElem.textContent as string;

            modal.innerHTML = modalTicketTemplates(time, date, name);
            modal.classList.add('modal-ticket-wrap');
            body.classList.add('lock');
            body.append(modal);
        }

        if (target.closest('.modal-ticket__close')) {
            const body = document.querySelector('body') as HTMLElement;
            const modal = document.querySelector('.modal-ticket-wrap') as HTMLElement;

            modal.remove();
            body.classList.remove('lock');
        }

        if (target.closest('.modal-ticket__spot-sofa-warp')) {
            const priceContainer = document.querySelector('.modal-ticket__content-buy-total-num') as HTMLElement;
            const btnWrap = target.closest('.modal-ticket__spot-sofa-warp') as HTMLElement;
            console.log(btnWrap.children);

            Array.from(btnWrap.children).forEach((x) => x.classList.toggle('modal-ticket__spot--active'));
            btnWrap.classList.toggle('modal-ticket__spot-sofa-warp--active');

            if (btnWrap.classList.contains('modal-ticket__spot-sofa-warp--active')) {
                this.price += 36;
                priceContainer.innerHTML = `${this.price} BYN`;
                return;
            }
            console.log(this.price);

            this.price -= 36;
            priceContainer.innerHTML = `${this.price} BYN`;
            return;
        }

        if (target.closest('.modal-ticket__spot')) {
            const priceContainer = document.querySelector('.modal-ticket__content-buy-total-num') as HTMLElement;
            const btn = target.closest('.modal-ticket__spot') as HTMLButtonElement;
            btn.classList.toggle('modal-ticket__spot--active');
            if (btn.classList.contains('modal-ticket__spot--active')) {
                if (btn.classList.contains('modal-ticket__spot--low-cost')) {
                    this.price += 10;
                } else if (btn.classList.contains('modal-ticket__spot--common')) {
                    this.price += 15;
                }
                priceContainer.innerHTML = `${this.price} BYN`;
                return;
            }
            if (btn.classList.contains('modal-ticket__spot--low-cost')) {
                this.price -= 10;
            } else if (btn.classList.contains('modal-ticket__spot--common')) {
                this.price -= 15;
            }
            priceContainer.innerHTML = `${this.price} BYN`;
        }

        if (target.closest('.modal-ticket__content-buy-btn')) {
            if (this.price === 0) {
                return;
            }
            const modalContent = document.querySelector('.modal-ticket__content-bottom') as HTMLElement;
            const selectPlace = document.querySelectorAll('.modal-ticket__spot--active');
            let places = '';
            const dateElem = document.querySelector('.modal-ticket__content-date-date') as HTMLElement;
            const date = dateElem.textContent;
            const timeElem = document.querySelector('.modal-ticket__content-date-time') as HTMLElement;
            const time = timeElem.textContent;
            const totalPrice = `${this.price} BYN`;
            const id = window.location.hash.split('/').at(-1);
            selectPlace.forEach((x) => {
                places += `${x.getAttribute('aria-label')}, `;
            });

            modalContent.innerHTML = `
                <span>Спасибо за покупку!</span>
                <p>Выши места: ${places.trim().slice(0, -1)}</p>
                <p>Сумма покупки: ${totalPrice}</p>
            `;

            const userInfo = await this.firebaseStore.getCurrentUser();
            const newUserInfo = JSON.parse(JSON.stringify(userInfo));
            const newTickets = {
                date: `${new Date().getTime()}`,
                filmID: id,
                places: places.trim().slice(0, -1),
                day: date,
                time,
            };
            newUserInfo.tickets.items.push(newTickets);
            newUserInfo.tickets.total = newUserInfo.tickets.items.length;

            console.log(newUserInfo);
            await this.firebaseStore.updateUserInfo(newUserInfo);
        }
    }
}
