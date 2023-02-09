import Component from '../Component';

interface IErrorComponent {
    getRandomInteger: (min: number, max: number) => number,
    draw:() => HTMLElement,
}

export default class ErrorContent extends Component implements IErrorComponent {
    constructor() {
        super('section', 'error');
    }

    // eslint-disable-next-line class-methods-use-this
    getRandomInteger(min: number, max: number): number {
        const minInteger = Math.ceil(min);
        const maxInteger = Math.floor(max);
        return Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;
    }

    draw(): HTMLElement {
        const errorContent = document.createElement('div');
        errorContent.classList.add('error__textContentError');
        this.container.appendChild(errorContent);

        const title = document.createElement('p');
        title.textContent = '404. Страница не найдена';
        title.classList.add('error__textContentError_title');
        errorContent.appendChild(title);

        const message = document.createElement('p');
        message.textContent = 'Возможно, она была перемещена, или вы просто неверно указали адрес страницы.';
        message.classList.add('error__textContentError_message');
        errorContent.appendChild(message);

        const videoNumber = this.getRandomInteger(1, 5); // we have 5 movies mp4

        const video = document.createElement('video');
        video.classList.add('error__videoContentError');
        video.setAttribute('autoplay', '');
        video.setAttribute('loop', '');
        video.setAttribute('playsinline', '');

        // TODO add video from assets folder, so far mp4 and webpack don't interact
        video.src = `https://www.kinopoisk.ru/public/videos/errors/desktop/404/${videoNumber}.mp4`;

        video.setAttribute('width', '500');
        this.container.appendChild(video);

        return this.container;
    }
}
