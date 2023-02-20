import { TMovie } from '../movie/typesMovie';
import movieCard from './movieCard';

export function generateHeader(count: number): HTMLSpanElement {
    const span = document.createElement('span');
    span.classList.add('movies__count');
    span.textContent = `Найдено (${count})`;
    return span;
}

export function generateBody(movies: TMovie[]) {
    const list = document.createElement('ul');
    list.insertAdjacentHTML(
        'afterbegin',
        movies.map((item: TMovie) => movieCard(item)).join(''),
    );
    list.classList.add('movies__list');

    return list;
}

export function prepareLine(page: number, total: number): number[] {
    const set = new Set([page - 1, page, page + 1].filter((x) => x > 0 && x <= total));
    set.add(1);
    set.add(total);
    if (page === 1) {
        set.add(3);
    } else if (page === total) {
        set.add(page - 2);
    }

    return Array.from(set).sort((a, b) => a - b).reduce((acc: number[], x: number) => {
        if (acc.length && x !== acc[acc.length - 1] + 1) {
            acc.push(0);
        }
        acc.push(x);
        return acc;
    }, []);
}

export function getDotsItem(): HTMLSpanElement {
    const span = document.createElement('span');
    span.classList.add('movies__pagination-item-dots');
    span.textContent = '...';
    return span;
}

export const PREV_PAGE = `
    <svg class="movies__pagination-btn-icon">
        <use href="./assets/img/sprite.svg#icon_back"></use>
    </svg>
`;

export const FIRST_PAGE = `
    <div class="movies__pagination-btn-icon-wrap">
        ${PREV_PAGE}
        ${PREV_PAGE}
    </div>
`;

export const NEXT_PAGE = `
    <svg class="movies__pagination-btn-icon">
        <use href="./assets/img/sprite.svg#icon_back"></use>
    </svg>
`;

export const LAST_PAGE = `
    <div class="movies__pagination-btn-icon-wrap">
        ${NEXT_PAGE}
        ${NEXT_PAGE}
    </div>
`;
