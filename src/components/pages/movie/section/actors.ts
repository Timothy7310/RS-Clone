import Controller from '../../../controller/controllerKP';
import actors from '../../../templates/movie/actors';
import { TPersons } from '../../../templates/movie/typesMovie';
import Component from '../../Component';

export default class Actors {
    component: Component;

    container: HTMLElement;

    controller: Controller;

    constructor() {
        this.component = new Component('section', 'actors');
        this.container = this.component.draw();
        this.controller = new Controller();
    }

    async draw(parentContainer: HTMLElement, idNumber: string): Promise<void> {
        const movie = await this.controller.getMovieForId(idNumber);
        const actorsAll = this.getPersons(movie.persons);

        this.container.insertAdjacentHTML('afterbegin', actors(actorsAll));
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }

    // eslint-disable-next-line class-methods-use-this
    getPersons(persons: TPersons[]): TPersons[] {
        const personAll = persons.filter(
            (person: TPersons) => person.enProfession === 'actor',
        );
        const personArr = personAll.slice(0, 12);
        return personArr;
    }
}
