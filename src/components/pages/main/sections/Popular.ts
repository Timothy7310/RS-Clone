import Component from '../../Component';
import popularTemplates from '../../../templates/popular';

export default class Popular {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('section', 'popular');
        this.container = this.component.draw();
    }

    draw(): HTMLElement {
        this.container.insertAdjacentHTML('afterbegin', popularTemplates);
        return this.container;
    }
}
