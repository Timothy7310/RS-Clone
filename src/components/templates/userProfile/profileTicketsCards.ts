import { TMovie } from '../movie/typesMovie';

const profileTicketsCardsTemplate = (movie: TMovie, item: {
    date: string;
    filmID: string;
    places: string;
    day: string;
    time: string;
    hall: string;
}): string => `
<div class="profile__tickets-info-wrap">
    <div class="profile__tickets-img-info-wrap">
        <a href="#/movie/${item.filmID}" class="profile__tickets-img-wrap">
            <img class="profile__tickets-img" src="${movie?.poster?.previewUrl || movie?.poster?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Out_Of_Poster.jpg/450px-Out_Of_Poster.jpg'}" alt="">
        </a>
        <div class="profile__tickets-title-wrap">
            <a href="#/movie/${item.filmID}">
                <h2 class="profile__tickets-title">${movie.name} (${movie.year})</h2>
            </a>
            <h3 class="profile__title-english">${movie.alternativeName || ''}</h3>
            <p class="profile__tickets-timing">
                <span class="color-orange">${movie.rating.kp}</span> (${movie.votes.kp}) ${movie.movieLength} мин.
            </p>
        </div>
        <div class="profile__tickets-seance-info">
            <span class="profile__tickets-seance-time">
                ${item.day}. ${item.time}
            </span>
            <span class="profile__tickets-seance-places">Зал: №${item.hall || ''}</span>
            <span class="profile__tickets-seance-places">Ваши места: ${item.places}</span>
        </div>
    </div>
</div>
`;

export default profileTicketsCardsTemplate;
