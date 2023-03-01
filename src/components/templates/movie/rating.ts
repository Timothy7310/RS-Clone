import { TMovie } from './typesMovie';

const rating = (movie: TMovie): string => `
<div class="raiting">
<h3 class="raiting__title">Рейтинг фильма</h3>
<div class="raiting__score">
    <div class="raiting__score_stars">
        <form action="" class="raiting__score_stars_elements">
            <input id="raiting_10" type="radio" value="10" class="raiting__score_stars_elements_item" name="raiting">
            <label for="raiting_10" class="raiting__score_stars_elements_label" data-value="10" data-id="${movie.id}"></label>
            <input id="raiting_9" type="radio" value="10" class="raiting__score_stars_elements_item" name="raiting">
            <label for="raiting_9" class="raiting__score_stars_elements_label" data-value="9" data-id="${movie.id}"></label>
            <input id="raiting_8" type="radio" value="10" class="raiting__score_stars_elements_item" name="raiting">
            <label for="raiting_8" class="raiting__score_stars_elements_label" data-value="8" data-id="${movie.id}"></label>
            <input id="raiting_7" type="radio" value="10" class="raiting__score_stars_elements_item" name="raiting">
            <label for="raiting_7" class="raiting__score_stars_elements_label" data-value="7" data-id="${movie.id}"></label>
            <input id="raiting_6" type="radio" value="10" class="raiting__score_stars_elements_item" name="raiting">
            <label for="raiting_6" class="raiting__score_stars_elements_label" data-value="6" data-id="${movie.id}"></label>
            <input id="raiting_5" type="radio" value="10" class="raiting__score_stars_elements_item" name="raiting">
            <label for="raiting_5" class="raiting__score_stars_elements_label" data-value="5" data-id="${movie.id}"></label>
            <input id="raiting_4" type="radio" value="10" class="raiting__score_stars_elements_item" name="raiting">
            <label for="raiting_4" class="raiting__score_stars_elements_label" data-value="4" data-id="${movie.id}"></label>
            <input id="raiting_3" type="radio" value="10" class="raiting__score_stars_elements_item" name="raiting">
            <label for="raiting_3" class="raiting__score_stars_elements_label" data-value="3" data-id="${movie.id}"></label>
            <input id="raiting_2" type="radio" value="10" class="raiting__score_stars_elements_item" name="raiting">
            <label for="raiting_2" class="raiting__score_stars_elements_label" data-value="2" data-id="${movie.id}"></label>
            <input id="raiting_1" type="radio" value="10" class="raiting__score_stars_elements_item" name="raiting">
            <label for="raiting_1" class="raiting__score_stars_elements_label" data-value="1" data-id="${movie.id}"></label>
        </form>
    </div>
    <div class="raiting__score_container">
        <p class="raiting__score_container_value">${movie.rating.kp.toFixed(1)}</p>
        <div class="raiting__score_container_count">
            <span class="raiting__score_container_count_kp">${movie.votes.kp} оценок </span>
            <span class="raiting__score_container_count_imdb">IMDb: ${movie.rating.imdb} ${movie.votes.imdb} оценок</span>
        </div>
    </div>
</div>
<button class="raiting__score_button" ${localStorage.getItem('isLogIn') === 'true' ? '' : 'disabled=""'} data-id="${movie.id}">
    <span class="raiting__score_button_text">Написать рецензию</span>
</button>
<div class="review-form-wrap review-form--hidden">
    <form class="review-form">
        <select placeholder="Тип рецензии" class="review-form__select" required="">
            <option>Положительна</option>
            <option>Отрицательная</option>
            <option>Нейтральная</option>
        </select>
        <input placeholder="Заголовок" type="text" class="review-form__input" required="">
        <textarea placeholder="Текст" class="review-form__textarea" required=""></textarea>

        <button type="submit" class="review-form__submit" data-id="${movie.id}">Опубликовать рецензию</button>
    </form>
</div>
</div>
`;

export default rating;
