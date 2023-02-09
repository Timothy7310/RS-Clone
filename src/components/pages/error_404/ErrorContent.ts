import Component from '../Component';
import errorPageTemplate from '../../templates/errorPage';

interface IErrorComponent {
    getRandomInteger: (min: number, max: number) => number,
    draw:() => HTMLElement,
}

export default class ErrorContent implements IErrorComponent {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('section', 'error');
        this.container = this.component.draw();
    }

    // eslint-disable-next-line class-methods-use-this
    getRandomInteger(min: number, max: number): number {
        const minInteger = Math.ceil(min);
        const maxInteger = Math.floor(max);
        return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
    }

    draw(): HTMLElement {
        const videoNumber = this.getRandomInteger(1, 5); // we have 5 movies mp4
        this.container.innerHTML = errorPageTemplate(videoNumber);

        return this.container;
    }

    clear(): void {
        this.container.remove();
    }
}
