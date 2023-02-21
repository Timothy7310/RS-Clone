import ControllerKP from '../../controller/controllerKP';
import { TMovie } from '../../templates/movie/typesMovie';
import moviesTemplates from '../../templates/movies/movies';
import Component from '../Component';
import FirebaseStore from '../../server/firebaseStore';
import UserProfile from '../user_profile/userProfile';

export default class MoviesTop {
    component: Component;

    container: HTMLElement;

    controller: ControllerKP;

    firebaseStore;

    userProfile;

    constructor() {
        this.component = new Component('section', 'movies');
        this.container = this.component.draw();
        this.controller = new ControllerKP();
        this.firebaseStore = new FirebaseStore();
        this.userProfile = new UserProfile();
    }

    async draw(parentContainer: HTMLElement): Promise<void> {
        const topId = ['435', '329', '326', '448', '679486', '3498', '258687', '476', '342', '328'];
        const movies: TMovie[] = await Promise.all(topId.map((id) => this.controller.searchMovie(id, 'id')));

        this.container.insertAdjacentHTML('afterbegin', moviesTemplates(movies));
        parentContainer.appendChild(this.container);
        parentContainer.classList.add('movie', 'container');
    }

    // eslint-disable-next-line class-methods-use-this
    async moviesEvent(event: Event) {
        const target = event.target as HTMLButtonElement;

        if (target.closest('.movies__card-rates-will-watch')) {
            this.userProfile.saveWillWatch(target, '.movies__card-rates-will-watch', 'movies__card-rates-will-watch--active');
        }
    }
}
