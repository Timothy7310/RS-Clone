import creatorsTile from './creatorsTile';
import { TPersons } from './typesMovie';

const creators = (persons: TPersons[]): string => `
<div class="creators__wrap">
    <h3 class="creators__title">
        <a href="#">Создатели</a>
        <svg class="tickets__link-icon">
            <use href="./assets/img/sprite.svg#icon_back"></use>
        </svg>
    </h3>
    <div class="creators__card">
        <ul class="creators__card-list">
        ${persons.map((actor: TPersons) => creatorsTile(actor)).join('')}
        </ul>
    </div>
</div>
`;

export default creators;
