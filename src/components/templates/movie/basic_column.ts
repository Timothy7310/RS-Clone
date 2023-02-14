import { TMovie } from './typesMovie';

const basicColumn = (movie: TMovie): string => `
<div class="basic__column">
    <div class="basic__column_content">
        <div class="basic__column_poster">
            <img class="basic__column_poster_img"
            src=${movie.poster.previewUrl} alt="movie poster">
        </div>
    </div>
</div>
<div class="delimiter"></div>`;

export default basicColumn;
