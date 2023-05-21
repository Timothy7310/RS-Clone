import { TMovie } from '../movie/typesMovie';

type Item = {
    date: string;
    filmID: string;
    score: number | null;
    text: string;
    title: string;
};

const profileReviewInfoTemplate = (item: Item, movie: TMovie): string => `
<div class="profile__review-info-wrap">
    <div class="profile__review-img-info-wrap">
        <a href="#/movie/${item.filmID}">
            <img class="profile__review-img" src="${movie?.poster?.previewUrl || movie?.poster?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Out_Of_Poster.jpg/450px-Out_Of_Poster.jpg'}" alt="">
        </a>
        <div class="profile__review-title-wrap">
            <a href="#/movie/${item.filmID}">
                <h2 class="profile__review-title">${movie.name} (${movie.year})</h2>
            </a>
            <h3 class="profile__title-english">${movie.alternativeName || ''}</h3>
            <p class="profile__score-timing">
                <span class="color-orange">${movie.rating.kp}</span> (${movie.votes.kp}) ${movie.movieLength} мин.
            </p>
        </div>
    </div>
    <div class="profile__review-btn-wrap">
        <button class="profile__review-btn profile__review-btn--change">Изменить</button>
        <button class="profile__review-btn profile__review-btn--delete" data-id="${item.filmID}">Удалить</button>
    </div>
</div>
<div class="profile__review-text-wrap">
    <h2 class="profile__review-title">${item.title}</h2>
    <p class="profile__review-text">
        ${item.text}
    </p>
    <button class="profile__form-btn profile__view-review-btn">Посмотреть рецензию</button>
</div>
`;

export default profileReviewInfoTemplate;
