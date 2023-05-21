import { TPersons } from './typesMovie';

const actorsTile = (actor: TPersons): string => `
<li class="actors__card-item">
    <a href="" class="actors__card-item-poster">
        <img src=${actor.photo} alt="" class="actors__card-item-poster-img">
    </a>
<div class="actors__card-item-info">
            <a href="" class="actors__card-item-info-head">${actor.name}</a>
            <div class="actors__card-item-info-text">Актёр</div>
</div>
</li>`;

export default actorsTile;
