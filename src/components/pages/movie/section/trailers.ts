import Controller from '../../../controller/controller';
import trailers from '../../../templates/movie/trailers';
import Component from '../../Component';

export default class Trailers {
    component: Component;

    container: HTMLElement;

    controller: Controller;

    constructor() {
        this.component = new Component('section', 'trailer');
        this.container = this.component.draw();
        this.controller = new Controller();
    }

    async draw(parentContainer: HTMLElement): Promise<void> {
        const movie = await this.controller.searchMovie('505898', 'id');
        const video = movie.videos.trailers;
        const urlsVideo = video.map((x: { url: string; }) => x.url).slice(0, 3);

        this.container.insertAdjacentHTML('beforeend', trailers(urlsVideo));

        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }
}
