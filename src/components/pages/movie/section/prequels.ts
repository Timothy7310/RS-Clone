import Controller from '../../../controller/controller';
import prequels from '../../../templates/movie/prequels';
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

    async draw(parentContainer: HTMLElement): Promise<void> {
        const movie = await this.controller.searchMovie('505898', 'id');
        const prequelsId = this.getPrequelsId(movie.sequelsAndPrequels);

        const movies: TMovie[] = await Promise.all(prequelsId.map((id) => this.controller.searchMovie(id.toString(), 'id')));

        this.container.insertAdjacentHTML('beforeend', prequels(movies));

        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }

    // eslint-disable-next-line class-methods-use-this
    getPrequelsId(sequelsAndPrequels: TPrequels[]): number[] {
        return sequelsAndPrequels.map((prequel: TPrequels) => prequel.id);
    }
}
