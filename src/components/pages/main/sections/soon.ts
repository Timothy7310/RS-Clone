import Component from '../../Component';
import soonTemplate from '../../../templates/soon';

export default class Soon {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('section', 'soon');
        this.container = this.component.draw();
    }

    draw(): HTMLElement {
        this.container.insertAdjacentHTML('afterbegin', soonTemplate);
        return this.container;
    }
}
