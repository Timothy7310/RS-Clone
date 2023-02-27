import { TMovieTop } from '../../types/types';

const answerGameTemplate = (movie: TMovieTop): string => `
    <div class="quiz__content_questions_item">
        <input type="radio" class="quiz__content_questions_item_answer" name="answer" id="radio-${movie.id}" value="${movie.id}">
        <label for="radio-${movie.id}" id="label-${movie.id}">${movie.name}</label>
    </div>
`;

export default answerGameTemplate;
