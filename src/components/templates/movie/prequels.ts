import prequelsTile from './prequelsContent';
import { TMovie } from './typesMovie';

const prequels = (movies: TMovie[]): string => `
<h3 class="prequels__title">
    <a href="#">Сиквелы и приквелы</a>
    <svg class="tickets__link-icon">
        <use href="./assets/img/sprite.svg#icon_back"></use>
    </svg>
</h3>
<div class="prequels__content">
${movies.map((movie) => prequelsTile(movie)).join('')}
</div>`;

export default prequels;
