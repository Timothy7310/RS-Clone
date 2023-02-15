import Controller from '../../../controller/controller';
import reviews from '../../../templates/movie/review';
import { TReview } from '../../../templates/movie/typesMovie';
import Component from '../../Component';

export default class Reviews {
    component: Component;

    container: HTMLElement;

    controller: Controller;

    constructor() {
        this.component = new Component('section', 'review');
        this.container = this.component.draw();
        this.controller = new Controller();
    }

    async draw(parentContainer: HTMLElement): Promise<void> {
        const reviewsAll = await this.controller.searchReview('505898', 'movieId');
        const reviewAllItems = await this.controller.searchReviewCount('505898', 'movieId', reviewsAll.total);
        const positive = this.getCountPositive(reviewAllItems.docs);
        console.log(positive);
        const negative = this.getCountNegative(reviewAllItems.docs);
        console.log(negative);
        const neutral = this.getCountNeutral(reviewAllItems.docs);
        console.log(neutral);

        this.container.insertAdjacentHTML('afterbegin', reviews(reviewsAll, positive, negative, neutral));

        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }

    getCountPositive(reviewsAll: TReview[]): number {
        const reviewsItem = this.getCountReview(reviewsAll, 'Позитивный');
        const count = reviewsItem.length;
        return count;
    }

    getCountNegative(reviewsAll: TReview[]): number {
        const reviewsItem = this.getCountReview(reviewsAll, 'Негативный');
        const count = reviewsItem.length;
        return count;
    }

    getCountNeutral(reviewsAll: TReview[]): number {
        const reviewsItem = this.getCountReview(reviewsAll, 'Нейтральный');
        const count = reviewsItem.length;
        return count;
    }

    // eslint-disable-next-line class-methods-use-this
    getCountReview(docs: TReview[], typeReview: string) {
        return docs.filter((item: TReview) => item.type === typeReview);
    }
}
