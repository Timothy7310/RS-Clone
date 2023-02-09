import Component from '../../Component';
import cashTemplate from '../../../templates/cash';

export default class Cash {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('section', 'cash');
        this.container = this.component.draw();
    }

    draw(): HTMLElement {
        this.container.insertAdjacentHTML('afterbegin', cashTemplate);
        return this.container;
    }
}
