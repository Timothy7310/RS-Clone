import reviewItem from './reviewItem';
import { TReviews } from './typesMovie';

const reviews = (reviewsAll: TReviews): string => `
<div class="reviews">
<h3 class="reviews__title">
    <a href="#">Рецензии зрителей</a>
</h3>
<button class="reviews__button">
    <span class="reviews__button_text">Написать рецензию</span>
</button>
<div class="reviews__content">
    <div class="reviews__content_items">
        ${reviewsAll.docs.map((item) => reviewItem(item)).join('')}
    </div>
    <div class="reviews__content_statistic">
        <nav class="reviews__content_statistic_nav">
            <div class="reviews__content_statistic_nav_total">
                <span class="reviews__content_statistic_nav_total_count">${reviewsAll.total}</span>
                <span class="reviews__content_statistic_nav_total_text">Всего</span>
            </div>
            <div class="reviews__content_statistic_nav_positive">
                <div class="reviews__content_statistic_nav_positive_title">
                    <span class="reviews__content_statistic_nav_positive_title_count">42</span>
                    <span class="reviews__content_statistic_nav_positive_title_percent">41,58%</span>
                </div>
                <span class="reviews__content_statistic_nav_positive_text">Положительные</span>
            </div>
            <div class="reviews__content_statistic_nav_negative">
                <div class="reviews__content_statistic_nav_negative_title">
                    <span class="reviews__content_statistic_nav_negative_title_count">32</span>
                    <span class="reviews__content_statistic_nav_negative_title_percent">31,68%</span>
                </div>
                <span class="reviews__content_statistic_nav_negative_text">Отрицательные</span>
            </div>
            <div class="reviews__content_statistic_nav_neutral">
                <div class="reviews__content_statistic_nav_neutral_title">
                    <span class="reviews__content_statistic_nav_neutral_title_count">27</span>
                    <span class="reviews__content_statistic_nav_neutral_title_percent">26,73%</span>
                </div>
                <span class="reviews__content_statistic_nav_neutral_text">Нейтральные</span>
            </div>
        </nav>
    </div>
</div>
</div> `;

export default reviews;
