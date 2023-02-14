import trailerVideo from './trailersVideo';
import { TMovie } from './typesMovie';

const trailers = (movie: TMovie): string => `
<div class="trailers">
    <h3 class="trailers__title">
        <a href="#">Трейлеры и тизеры</a>
        <svg class="tickets__link-icon">
            <use href="./assets/img/sprite.svg#icon_back"></use>
        </svg>
    </h3>
    <div class="trailers__video">
        <div class="trailers__video_item">
            ${trailerVideo(movie.videos.trailers[0].url)}
        </div>
    </div>
</div> 
`;

export default trailers;
