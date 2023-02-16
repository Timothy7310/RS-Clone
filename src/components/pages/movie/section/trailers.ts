import Controller from '../../../controller/controllerKP';
import trailers from '../../../templates/movie/trailers';
import { TTrailer } from '../../../templates/movie/typesMovie';
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

    async draw(parentContainer: HTMLElement, idNumber: string): Promise<void> {
        const movie = await this.controller.searchMovie(idNumber, 'id');
        const video = movie.videos.trailers;
        const trailersYoutube = video.filter(
            (trailer: TTrailer) => trailer.site === 'youtube',
        );
        const urlsVideo = trailersYoutube.map((x: { url: string; }) => x.url).slice(0, 3);

        this.container.insertAdjacentHTML('beforeend', trailers(urlsVideo));

        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }
}
