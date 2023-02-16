import { TMovie } from './typesMovie';

function newUrl(url: string) {
    return url.replace('/watch?v=', '/embed/');
}

const basicColumn = (movie: TMovie): string => `
<div class="basic__column">
    <div class="basic__column_content">
        <div class="basic__column_content_poster">
            <img class="basic__column_poster_img"
            src=${movie.poster.previewUrl} alt="movie poster">
        </div>
        <div class="basic__column_content_trailer">
            <iframe width="302" height="170" src=${newUrl(movie.videos.trailers[0].url)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="basic__column_content_title">
            ${movie.videos.trailers[0].name}
        </div>
    </div>
</div>
<div class="delimiter"></div>`;

export default basicColumn;
