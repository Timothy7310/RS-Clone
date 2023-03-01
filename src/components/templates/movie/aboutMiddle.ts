import GenerateTables from './generateTables';
import { TMovie } from './typesMovie';

const informationTable = new GenerateTables();

const aboutMiddle = (movie: TMovie): string => `
<div class="about__middle">
    <div class="about__middle_movie">
        <h3 class="about__middle_movie_title">О фильме</h3>
        <div class="about__middle_movie_table">
            ${informationTable.getMovieTable(movie)}
        </div>
        <div class="about__middle_movie_alternative">
            ${informationTable.getAlternativeTable(movie)}
        </div>
    </div>
    <div class="about__middle_actors">
        <div class="about__middle_actors_roles">
            <div class="about__middle_actors_roles_main">
                <h4 class="about__middle_actors_roles_main_title">
                    <a href="#">В главных ролях</a>
                    <svg class="tickets__link-icon">
                        <use href="./assets/img/sprite.svg#icon_back"></use>
                    </svg>
                </h4>
                <ul class="about__middle_actors_roles_main_content">
                    ${informationTable.getActors(movie.persons)}
                </ul>
                <a href="#" class="about__middle_actors_roles_main_count">${informationTable.getCountActors(movie.persons)} актеров</a>
            </div>
            <div class="about__middle_actors_roles_main">
                <h4 class="about__middle_actors_roles_main_title">
                    <a href="#">Роли дублировали</a>
                    <svg class="tickets__link-icon">
                        <use href="./assets/img/sprite.svg#icon_back"></use>
                    </svg>
                </h4>
                <ul class="about__middle_actors_roles_main_content">
                    ${informationTable.getVoiceActors(movie.persons)}
                </ul>
                <a href="#" class="about__middle_actors_roles_main_count">${informationTable.getCountVoiceActors(movie.persons)} актеров</a>
            </div>
        </div>
    </div>
</div>
`;

export default aboutMiddle;
