import { TMovie } from '../movie/typesMovie';

const profileWillWatchCard = (item: { date: string; filmID: string }, movie: TMovie): string => `
<a href="#/movie/${item.filmID}">
    <img src="${movie?.poster?.previewUrl || movie?.poster?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Out_Of_Poster.jpg/450px-Out_Of_Poster.jpg'}" class="profile__will-watch-card-poster" alt="">
</a>
<div class="profile__will-watch-card-info">
    <a href="#/movie/${item.filmID}" class="profile__will-watch-card-name-wrap">
        <h3 class="profile__will-watch-card-name">${movie.name} (${movie.year})</h3>
    </a>
    <span class="profile__will-watch-card-original-name">${movie.alternativeName || ''}</span>
    <div class="profile__will-watch-card-subinfo">
        <span class="profile__will-watch-card-rate">${movie.rating.kp}</span>
        <span class="profile__will-watch-card-rate-count">(${movie.votes.kp})</span>
        <span class="profile__will-watch-card-time">${movie.movieLength} мин.</span>
    </div>
</div>
<button class="profile__will-watch-card-delete" data-id="${item.filmID}" title="Удалить">
    <svg class="profile__will-watch-card-delete-icon">
        <use href="./assets/img/sprite.svg#icon_close"></use>
    </svg>
</button>
`;

export default profileWillWatchCard;
