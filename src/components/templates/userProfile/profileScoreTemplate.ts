import { TMovie } from '../movie/typesMovie';

const profileScoreTemplate = (movie: TMovie, item: {
    date: string;
    filmID: string;
    score: number | null;
}): string => `
<div class="profile__score-info-wrap">
    <div class="profile__score-img-info-wrap">
        <a href="#/movie/${item.filmID}">
            <img class="profile__score-img" src="${movie?.poster?.previewUrl || movie?.poster?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Out_Of_Poster.jpg/450px-Out_Of_Poster.jpg'}" alt="">
        </a>
        <div class="profile__score-title-wrap">
            <a href="#/movie/${item.filmID}">
                <h2 class="profile__score-title">${movie.name} (${movie.year})</h2>
            </a>
            <h3 class="profile__title-english">${movie.alternativeName || ''}</h3>
            <p class="profile__score-timing">
                <span class="color-orange">${movie.rating.kp}</span> (${movie.votes.kp}) ${movie.movieLength} мин.
            </p>
        </div>
    </div>
    <div class="profile__score-btn-wrap profile__score-btn-wrap--${item.filmID}">
        <p class="profile__score-your-mark">
            Ваша оценка: <span class="profile__mark profile__mark--${item.filmID}">${item.score}</span>
        </p>
        <button class="profile__review-btn profile-change-score profile__review-btn--change-move-score" data-id="${item.filmID}">Изменить</button>
        <button class="profile__review-btn profile-change-score profile-change-score--hidden profile__review-btn--save-move-score" data-id="${item.filmID}">Сохранить</button>
    </div>
</div>
`;

export default profileScoreTemplate;
