const userProfileTemplates = `
    <section class="profile">
            <div class="container display-flex">
                <ul class="profile__user">
                    <li class="profile__photo">
                        <div class="profile__photo-wrap-img">
                            <img src="assets/img/user.png" alt="user">
                        </div>
                    </li>
                    <li class="profile__user-name">Имя пользователя</li>
                    <li class="profile__location">
                        <span class="profile__city">Город</span>,
                        <span class="profile__country">страна</span>
                    </li>
                    <li class="profile__email">primer_email@mail.com</li>
                    <li class="profile__line"></li>
                    <li class="profile__delete">
                        <a href="" class="profile__link">
                            <img src="assets/img/delete-logo.svg" alt="delete">
                            <span class="profile__link-text">Удалить аккаунт</span>
                        </a>
                    </li>
                    <li class="profile__line"></li>
                    <li class="profile__list">
                        <a href="" class="profile__link">
                            <img src="assets/img/user-logo.svg" alt="#">
                            <span class="profile__link-text">Настройки профиля</span>
                        </a>
                    </li>
                    <li class="profile__list">
                        <a href="" class="profile__link">
                            <img src="assets/img/list-logo.svg" alt="#">
                            <span class="profile__link-text">Оценки (456)</span>
                        </a>
                    </li>
                    <li class="profile__list">
                        <a href="" class="profile__link">
                            <img src="assets/img/review-logo.svg" alt="#">
                            <span class="profile__link-text">Рецензии (4)</span>
                        </a>
                    </li>
                    <li class="profile__list">
                        <a href="" class="profile__link">
                            <img class="profile__logo" src="assets/img/movie-logo.svg" alt="#">
                            <span class="profile__link-text">Фильмы (2)</span>
                        </a>
                    </li>
                </ul>
                <div class="profile__content">
                <input type="email" placeholder="email">
                <input type="password" placeholder="password">
                <button>submit</button>
                </div>
                <div class="profile__activity">
                    <h3 class="profile__title-activity">Ваша активность:</h3>
                    <h4 class="profile__category-activity">вы оценили:</h4>
                    <p class="profile__item-activity">
                        фильмы <span class="count-movies count">431</span>
                    </p>
                    <p class="profile__item-activity">
                        сериалы <span class="count-serials count">15</span>
                    </p>
                    <p class="profile__item-activity">
                        короткометражки <span class="count-short-movies count">10</span>
                    </p>
                    <h4 class="profile__category-activity">вы написали:</h4>
                    <p class="profile__item-activity">рецензий
                        <span class="count-review count">4</span>
                    </p>
                    <h4 class="profile__category-activity">ваша средняя оценка:</h4>
                    <p class="profile__item-activity count">7.88</p>
                </div>
            </div>
        </section>`;

export default userProfileTemplates;
