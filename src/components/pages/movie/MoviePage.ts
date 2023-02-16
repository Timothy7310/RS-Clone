import Page from '../Page';
import Basic from './section/basic';
import Description from './section/description';
import Facts from './section/facts';
import Prequels from './section/prequels';
import Rating from './section/raiting';
import Reviews from './section/reviews';
import Trailers from './section/trailers';

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

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.basic = new Basic();
        this.prequels = new Prequels();
        this.description = new Description();
        this.rating = new Rating();
        this.trailers = new Trailers();
        this.facts = new Facts();
        this.reviews = new Reviews();
    }

    draw(): HTMLElement {
        this.basic.draw(this.container);
        this.prequels.draw(this.container);
        this.description.draw(this.container);
        this.rating.draw(this.container);
        this.trailers.draw(this.container);
        this.facts.draw(this.container);
        this.reviews.draw(this.container);
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }
}
