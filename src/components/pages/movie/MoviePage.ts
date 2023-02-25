import Page from '../Page';
import Basic from './section/basic';
import Description from './section/description';
import Facts from './section/facts';
import Prequels from './section/prequels';
import Rating from './section/raiting';
import Reviews from './section/reviews';
import Trailers from './section/trailers';
import FirebaseStore from '../../server/firebaseStore';
import { UserType } from '../../types/types';

export default class Movie {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    basic: Basic;

    prequels: Prequels;

    description: Description;

    rating: Rating;

    trailers: Trailers;

    facts: Facts;

    reviews: Reviews;

    id?: string;

    firebaseStore;

    constructor(path?: string, id?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.basic = new Basic();
        this.prequels = new Prequels();
        this.description = new Description();
        this.rating = new Rating();
        this.trailers = new Trailers();
        this.facts = new Facts();
        this.reviews = new Reviews();
        this.id = id;
        this.firebaseStore = new FirebaseStore();
    }

    draw(): HTMLElement {
        if (this.id !== undefined) {
            this.basic.draw(this.container, this.id);
            this.prequels.draw(this.container, this.id);
            this.description.draw(this.container, this.id);
            this.rating.draw(this.container, this.id);
            this.trailers.draw(this.container, this.id);
            this.facts.draw(this.container, this.id);
            this.reviews.draw(this.container, this.id);
        }
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }

    // eslint-disable-next-line class-methods-use-this
    async moviePageEvents(e: Event) {
        const target = e.target as HTMLElement;

        if (target.closest('.raiting__score_stars_elements_label')) {
            const label = target.closest('.raiting__score_stars_elements_label') as HTMLElement;
            const score = label.dataset.value as string;
            const id = label.dataset.id as string;

            const response = await this.firebaseStore.getCurrentUser();
            const userInfo = response[0];

            const newUserInfo: UserType = JSON.parse(JSON.stringify(userInfo));
            let newWatchedList = newUserInfo.watched.items;
            if (newWatchedList.map((x) => x.filmID).includes(id)) {
                newWatchedList = newWatchedList.map((x) => {
                    if (x.filmID === id) {
                        return {
                            date: x.date,
                            filmID: x.filmID,
                            score: +score,
                        };
                    }
                    return x;
                });

                newUserInfo.watched = {
                    items: newWatchedList,
                    total: newWatchedList.length,
                };
                await this.firebaseStore.updateUserInfo(newUserInfo);
                return;
            }

            const newWatchedFilm = {
                date: `${new Date().getTime()}`,
                filmID: id,
                score: +score,
            };

            newWatchedList.push(newWatchedFilm);

            newUserInfo.watched = {
                items: newWatchedList,
                total: newWatchedList.length,
            };
            await this.firebaseStore.updateUserInfo(newUserInfo);
        }

        if (target.closest('.raiting__score_button')) {
            const form = document.querySelector('.review-form-wrap') as HTMLElement;
            form.classList.remove('review-form--hidden');
        }

        if (target.closest('.review-form__submit')) {
            const btn = target.closest('.review-form__submit') as HTMLButtonElement;
            e.preventDefault();
            const select = document.querySelector('.review-form__select') as HTMLSelectElement;
            const title = document.querySelector('.review-form__input') as HTMLInputElement;
            const text = document.querySelector('.review-form__textarea') as HTMLTextAreaElement;
            const id = target.dataset.id as string;

            if (this.validateReviewForm(title, text).includes(false)) {
                return;
            }
            btn.disabled = true;
            const response = await this.firebaseStore.getCurrentUser();
            const userInfo = response[0];

            const newUserInfo: UserType = JSON.parse(JSON.stringify(userInfo));
            const newReviewsList = newUserInfo.reviews.items;

            const newReview = {
                date: `${new Date().getTime()}`,
                filmID: id,
                text: text.value,
                title: title.value,
                type: select.value,
            };

            newReviewsList.push(newReview);
            newUserInfo.reviews = {
                items: newReviewsList,
                total: newReviewsList.length,
            };
            await this.firebaseStore.updateUserInfo(newUserInfo);
            btn.disabled = false;
            title.value = '';
            text.value = '';
            const form = document.querySelector('.review-form-wrap') as HTMLElement;
            form.classList.add('review-form--hidden');
        }
    }

    // eslint-disable-next-line class-methods-use-this
    validateReviewForm(title: HTMLInputElement, text: HTMLTextAreaElement) {
        const checker = [];
        if (title.value.replace(/\s{2,}/g, ' ').trim().length < 4) {
            title.classList.add('review-form__input-warning');
            checker.push(false);
        } else {
            title.classList.remove('review-form__input-warning');
            checker.push(true);
        }

        if (text.value.replace(/\s{2,}/g, ' ').trim().length < 20) {
            text.classList.add('review-form__input-warning');
            checker.push(false);
        } else {
            text.classList.remove('review-form__input-warning');
            checker.push(true);
        }

        return checker;
    }
}
