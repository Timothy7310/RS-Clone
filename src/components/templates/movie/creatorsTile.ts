import { TPersons } from './typesMovie';

const creatorsTile = (person: TPersons): string => `
<li class="creators__card-item">
    <a href="" class="creators__card-item-poster">
        <img src=${person.photo} alt="" class="creators__card-item-poster-img">
    </a>
<div class="actors__card-item-info">
            <a href="" class="creators__card-item-info-head">${person.name}</a>
            <div class="creators__card-item-info-text">${person.enProfession}</div>
</div>
</li>`;

export default creatorsTile;
