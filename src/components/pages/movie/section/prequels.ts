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
        const movie = await this.controller.getMovieForId(idNumber);
        const prequelsId = this.getPrequelsId(movie.sequelsAndPrequels);
        if (prequelsId[0] === undefined) {
            this.container.insertAdjacentHTML('afterbegin', noPrequels);
        } else {
            const movies: TMovie[] = await Promise.all(prequelsId.map((id) => this.controller.getMovieForId(`${id}`)).slice(0, 6));
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
