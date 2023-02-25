const reviewFormTemplates = `
<div class="review-form__overlay"></div>
<div class="review-form__content">
    <form class="review-form__content-form">
        <select placeholder="Тип рецензии" class="review-form__content-select">
            <option>Положительна</option>
            <option>Отрицательная</option>
            <option>Нейтральная</option>
        </select>
        <input placeholder="Заголовок" type="text" class="review-form__content-input">
        <textarea placeholder="Текст" class="review-form__content-textarea"></textarea>

        <button type="submit" class="review-form__content-submit">Опубликовать рецензию</button>
    </form>
</div>
`;

export default reviewFormTemplates;
