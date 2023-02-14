import Controller from '../../../controller/controller';
import facts from '../../../templates/movie/facts';
import { TFacts } from '../../../templates/movie/typesMovie';
import Component from '../../Component';

export default class Facts {
    component: Component;

    container: HTMLElement;

    controller: Controller;

    constructor() {
        this.component = new Component('section', 'facts');
        this.container = this.component.draw();
        this.controller = new Controller();
    }

    async draw(parentContainer: HTMLElement): Promise<void> {
        const movie = await this.controller.searchMovie('505898', 'id');
        const factsArray = this.getFacts(movie.facts);
        const noFacts = ['Фактов об этом фильме у нас пока еще нет'];
        if (factsArray === undefined) {
            this.container.insertAdjacentHTML('beforeend', facts(factsArray));
        } else {
            this.container.insertAdjacentHTML('beforeend', facts(noFacts));
        }
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }

    // eslint-disable-next-line @typescript-eslint/no-shadow, class-methods-use-this
    getFacts(facts: TFacts[]): string[] {
        return facts.map((fact: TFacts) => fact.value);
    }
}
