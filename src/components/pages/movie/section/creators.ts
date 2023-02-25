import Controller from '../../../controller/controllerKP';
import creators from '../../../templates/movie/creators';
import { TPersons } from '../../../templates/movie/typesMovie';
import Component from '../../Component';

export default class Creators {
    component: Component;

    container: HTMLElement;

    controller: Controller;

    constructor() {
        this.component = new Component('section', 'creators');
        this.container = this.component.draw();
        this.controller = new Controller();
    }

    async draw(parentContainer: HTMLElement, idNumber: string): Promise<void> {
        const movie = await this.controller.searchMovie(idNumber, 'id');
        const creatorAll = this.getPersons(movie.persons);
        console.log(creatorAll);

        this.container.insertAdjacentHTML('afterbegin', creators(creatorAll));
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }

    getPersons(persons: TPersons[]): TPersons[] {
        const director = this.getCreator(persons, 'director');
        const writer = this.getCreator(persons, 'writer');
        const producer = this.getCreator(persons, 'producer');
        const operator = this.getCreator(persons, 'operator');
        const composer = this.getCreator(persons, 'composer');
        const designer = this.getCreator(persons, 'designer');
        const editor = this.getCreator(persons, 'editor');

        const all = [
            ...director,
            ...writer,
            ...producer,
            ...operator,
            ...composer,
            ...designer,
            ...editor,
        ];

        return all.slice(0, 12);
    }

    // eslint-disable-next-line class-methods-use-this
    getCreator(persons: TPersons[], profession: string): TPersons[] {
        const creator = persons.filter(
            (person: TPersons) => person.enProfession === profession,
        ).slice(0, 2);
        return creator;
    }
}
