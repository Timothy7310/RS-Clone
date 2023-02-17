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

    id?: string;

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
}
