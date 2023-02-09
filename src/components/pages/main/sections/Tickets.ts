import Component from '../../Component';
import ticketsTemplate from '../../../templates/tickets';

export default class Tickets {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('section', 'tickets');
        this.container = this.component.draw();
    }

    draw(): HTMLElement {
        this.container.insertAdjacentHTML('afterbegin', ticketsTemplate);
        return this.container;
    }
}
