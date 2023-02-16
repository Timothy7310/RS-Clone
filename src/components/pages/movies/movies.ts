import ControllerKP from '../../controller/controllerKP';
import { TMovie } from '../../templates/movie/typesMovie';
import moviesTemplates from '../../templates/movies/movies';
import Component from '../Component';

export default class MoviesTop {
    component: Component;

    container: HTMLElement;

    controller: ControllerKP;

    constructor() {
        this.component = new Component('section', 'movies');
        this.container = this.component.draw();
        this.controller = new ControllerKP();
    }

    async draw(parentContainer: HTMLElement): Promise<void> {
        const topId = ['435', '329', '326', '448', '679486', '3498', '258687', '476', '342', '328'];
        const movies: TMovie[] = await Promise.all(topId.map((id) => this.controller.searchMovie(id, 'id')));

        this.container.insertAdjacentHTML('afterbegin', moviesTemplates(movies));
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }
}
