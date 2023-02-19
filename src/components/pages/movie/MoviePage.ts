import Page from '../Page';
import Actors from './section/actors';
import Basic from './section/basic';
import Creators from './section/creators';
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

    actors: Actors;

    creators: Creators;

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
        this.actors = new Actors();
        this.creators = new Creators();
    }

    draw(): HTMLElement {
        if (this.id !== undefined) {
            this.basic.draw(this.container, this.id);
            this.actors.draw(this.container, this.id);
            this.creators.draw(this.container, this.id);
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
