import actorsTile from './actorsTile';
import { TPersons } from './typesMovie';

const actors = (actorsAll: TPersons[]): string => `
<div class="actors__wrap">
    <h3 class="actors__title">
        <a href="#">Актеры</a>
        <svg class="tickets__link-icon">
            <use href="./assets/img/sprite.svg#icon_back"></use>
        </svg>
    </h3>
    <div class="actors__card">
        <ul class="actors__card-list">
        ${actorsAll.map((actor: TPersons) => actorsTile(actor)).join('')}
        </ul>
    </div>
</div>
`;

export default actors;
