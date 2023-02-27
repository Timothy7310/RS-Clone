import { TQuestionData } from '../../types/types';
import answerGameTemplate from './answerGameTemplate';

const gamePageTemplate = (question: TQuestionData, page: number): string => `
        <h2 class="quiz__title">
            Викторина
        </h2>
        <div class="quiz__content">
            <div class="quiz__content_conf">
                <div class="quiz__content_conf_counts">вопрос ${page}/10</div>
                <a href="#/main" class="quiz__content_conf_exit">Выйти из игры</a>
            </div>
            <div class="quiz__content_image">
                <img src="${question.picture}" alt="frame for movie">
            </div>
            <form class="quiz__content_questions">
                ${question.movies.map((movie) => answerGameTemplate(movie)).join('')}
            </form>
        </div>
    `;

export default gamePageTemplate;
