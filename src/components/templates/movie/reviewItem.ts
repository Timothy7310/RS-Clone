import { TReview } from './typesMovie';

// eslint-disable-next-line consistent-return
function className(review: TReview) {
    if (review.type === 'Позитивный') {
        return 'reviews__content_items_item_positive';
    } if (review.type === 'Негативный') {
        return 'reviews__content_items_item_negative';
    } if (review.type === 'Нейтральный') {
        return 'reviews__content_items_item_neutral';
    }
}

const reviewItem = (review: TReview): string => `
        <div class=${className(review)}>
            <div class="reviews__content_items_item_head">
                <div class="reviews__content_items_item_head_user">
                    <p class="reviews__content_items_item_head_user_name">${review.author ? review.author : ''}</p>
                </div>
                <div class="reviews__content_items_item_head_date">
                    ${new Date(review.date).toLocaleDateString()} в ${(new Date(review.date).toTimeString()).slice(0, 5)}
                </div>
            </div>
            <div class="reviews__content_items_item_body">
                <div class="reviews__content_items_item_body_title">${review.title ?? ''}</div>
                <div class="reviews__content_items_item_body_text">
                    <span>${review.review}</span>
                </div>
                <div class="reviews__content_items_item_body_view">
                    <button class="reviews__content_items_item_body_view_button">показать всю рецензию</button>
                </div>
                <div class="reviews__content_items_item_body_likes">
                    <button class="reviews__content_items_item_body_likes_like">
                        <svg class="tickets__link-icon">
                            <use href="./assets/img/sprite.svg#like"></use>
                        </svg>
                        <span class="reviews__content_items_item_body_likes_like_title">Полезно</span>
                        <span class="reviews__content_items_item_body_likes_like_count">${review.reviewLikes ?? ''}</span>
                    </button>
                    <button class="reviews__content_items_item_body_likes_like">
                        <svg class="tickets__link-icon">
                            <use href="./assets/img/sprite.svg#dislike"></use>
                        </svg>
                        <span class="reviews__content_items_item_body_likes_like_title">Нет</span>
                        <span class="reviews__content_items_item_body_likes_like_count">${review.reviewDislikes ?? ''}</span>
                    </button>
                </div>
            </div>
        </div>`;

export default reviewItem;
