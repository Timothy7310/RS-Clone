import { TMovie } from './typesMovie';

const description = (movie: TMovie): string => `
<h3 class="description__title">Обзор</h3>
<p class="description__text">
    ${movie.description}
</p>
`;

export default description;
