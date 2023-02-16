import trailerVideo from './trailersVideo';

const trailers = (urls: string[]): string => `
<div class="trailers">
    <h3 class="trailers__title">
        <a href="#">Трейлеры и тизеры</a>
        <svg class="tickets__link-icon">
            <use href="./assets/img/sprite.svg#icon_back"></use>
        </svg>
    </h3>
    <div class="trailers__video">
        ${urls.map((url) => trailerVideo(url)).join('')}
    </div>
</div> 
`;

export default trailers;
