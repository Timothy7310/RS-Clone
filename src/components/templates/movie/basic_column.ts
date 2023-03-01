import { TMovie, TTrailer } from './typesMovie';

function getYoutubeTrailers(trailers: TTrailer[]) {
    const trailersYoutube = trailers.filter(
        (trailer: TTrailer) => trailer.site === 'youtube',
    );
    return trailersYoutube;
}

function newUrl(url: string) {
    return url.replace('/watch?v=', '/embed/');
}

// eslint-disable-next-line consistent-return
function checkTrailer(trailer: TTrailer[]) {
    if (trailer.length === 0) {
        return '';
    }
    if (trailer.length !== 0) {
        const youtube = getYoutubeTrailers(trailer);
        return `
        <div class="basic__column_content_trailer">
            <iframe class="basic__column_content_trailer_size" src=${newUrl(youtube[0].url)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="basic__column_content_title">
            ${youtube[0].name}
        </div>`;
    }
}

const basicColumn = (movie: TMovie): string => `
<div class="basic__column">
    <div class="basic__column_content">
        <div class="basic__column_content_poster">
            <img class="basic__column_poster_img"
            src=${movie.poster.previewUrl} alt="movie poster">
        </div>
    ${checkTrailer(movie.videos.trailers)}
    </div>
</div>
<div class="delimiter"></div>`;

export default basicColumn;
