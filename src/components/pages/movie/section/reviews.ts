import Controller from '../../../controller/controller';
import reviews from '../../../templates/movie/review';
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

        this.container.insertAdjacentHTML('afterbegin', reviews(reviewsAll));

        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }
}
