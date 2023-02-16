import Controller from '../../../controller/controllerKP';
import prequels from '../../../templates/movie/prequels';
import noPrequels from '../../../templates/movie/prequelsNon';
import { TMovie, TPrequels } from '../../../templates/movie/typesMovie';
import Component from '../../Component';

export default class Prequels {
    component: Component;

    container: HTMLElement;

    controller: Controller;

    constructor() {
        this.component = new Component('section', 'prequels');
        this.container = this.component.draw();
        this.controller = new Controller();
    }

    async draw(parentContainer: HTMLElement, idNumber: string): Promise<void> {
        const movie = await this.controller.searchMovie(idNumber, 'id');
        const prequelsId = this.getPrequelsId(movie.sequelsAndPrequels);
        console.log(prequelsId);
        if (prequelsId[0] === undefined) {
            console.log('hello');
            this.container.insertAdjacentHTML('afterbegin', noPrequels);
        } else {
            const movies: TMovie[] = await Promise.all(prequelsId.map((id) => this.controller.searchMovie(id.toString(), 'id')));
            this.container.insertAdjacentHTML('beforeend', prequels(movies));
        }

        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }

    // eslint-disable-next-line class-methods-use-this
    getPrequelsId(sequelsAndPrequels: TPrequels[]): number[] {
        return sequelsAndPrequels.map((prequel: TPrequels) => prequel.id);
    }
}
