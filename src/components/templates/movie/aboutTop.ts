import { TMovie } from './typesMovie';
import UserProfile from '../../pages/user_profile/userProfile';

const userProfile = new UserProfile();
const userWillWatchList = await userProfile.getWillWatchList();

const aboutTop = (movie: TMovie): string => ` 
<div class="about__top">
    <div class="about__top_name">
        <div class="about__top_name_titles">
            <h1 class="about__top_name_titles_title">${movie.name}</h1>
            <div class="about__top_name_titles_alternative">${movie.alternativeName ?? ''}</div>
        </div>
        <button class="movies__card-rates-will-watch ${userWillWatchList.includes(`${movie.id}`) ? 'movies__card-rates-will-watch--active' : ''}" data-id="${movie.id}" ${localStorage.getItem('isLogIn') === 'true' ? '' : 'disabled=""'}>
            <svg class="movies__card-rates-will-watch-icon">
                <use href="./assets/img/sprite.svg#icon_add_watch"></use>
            </svg>
            <span class="movies__card-rates-will-watch-text">Буду смотреть</span>
        </button>
    </div>
    <div class="about__top_score">
        <div class="about__top_score_raiting">
            <div class="about__top_score_raiting_value">${movie.rating.kp.toFixed(1)}</div>
            <div class="about__top_score_raiting_count">${movie.votes.kp} оценок</div>
        </div>
        <button class="about__top_score_estimate" ${localStorage.getItem('isLogIn') === 'true' ? '' : 'disabled=""'}>
            <span class="about__top_score_estimate_text">Оценить</span>
        </button>
    </div>
</div>`;

export default aboutTop;
