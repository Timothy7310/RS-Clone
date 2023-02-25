import Page from '../Page';
import Basic from './section/basic';
import Description from './section/description';
import Facts from './section/facts';
import Prequels from './section/prequels';
import Rating from './section/raiting';
import Reviews from './section/reviews';
import Trailers from './section/trailers';
import UserProfile from '../user_profile/userProfile';
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

    userProfile;

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
        this.userProfile = new UserProfile();
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
            const newWatchedList = newUserInfo.watched.items;
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
    }
}
