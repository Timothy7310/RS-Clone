import ControllerTestKP from '../controller/controllerTestKP';

class Search {
    controllerTestKP;

    constructor() {
        this.controllerTestKP = new ControllerTestKP();
    }

    async searchEvent(event: Event) {
        const target = event.target as HTMLInputElement;

        if (target.closest('.header__search-input')) {
            const { value } = target;
            const res = await this.controllerTestKP.searchMovie(value);
            console.log(res);
            const searchResultsDOM = document.querySelector('.header__search-results') as HTMLElement;

            searchResultsDOM.classList.remove('header__search-results--hidden');
        }
    }
}

export default Search;
