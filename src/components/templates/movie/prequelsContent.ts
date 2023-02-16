import { TMovie } from './typesMovie';

function checkPoster(urlToPoster: {
    _id: string;
    url: string;
    previewUrl: string;
}) {
    if (urlToPoster) {
        return urlToPoster.previewUrl;
    }
    return 'https://yastatic.net/s3/kinopoisk-frontend/common-static/img/projector-logo/placeholder.svg';
}

const prequelsTile = (movie: TMovie): string => `
<div class="prequels__content_tile">
<div class="prequels__content_tile_cover">
    <a href="#/movie/${movie.id}" class="prequels__content_tile_cover_movie">
        <img class="prequels__content_tile_cover_movie_img" src=${checkPoster(movie.poster)}>
    </a>
</div>
<div class="prequels__content_tile_text">
    <a href="#/movie/${movie.id}" class="prequels__content_tile_text_movie">${movie.name}</a>
</div>
<div class="prequels__content_tile_subtitle">${movie.year}, ${movie.genres.map((x: { name: string; }) => x.name)[0]}</div>

</div>`;

export default prequelsTile;
