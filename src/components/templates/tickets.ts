const ticketsTemplate = `
    <section class="tickets">
    <div class="container">
        <div class="tickets__wrap">
            <a href="#/cinema" class="tickets__link">
                <h2 class="tickets__link-title">Билеты в кино</h2>
                <svg class="tickets__link-icon">
                    <use href="./assets/img/sprite.svg#icon_back"></use>
                </svg>
            </a>
            <div class="tickets__slider-container">
                <button class="tickets__slider-btn tickets__slider-btn--prev" aria-label="Предыдущий слайд">
                    <svg class="tickets__slider-btn-icon">
                        <use href="./assets/img/sprite.svg#prev_slide"></use>
                    </svg>
                </button>
                <div class="tickets__slider-wrap">
                    <ul class="tickets__slider" style="transform: translateX(0px);">
                        <li class="tickets__slide">
                            <a href="#/cinema/seances" class="tickets__slide-link">
                                <div class="tickets__slide-img-wrap">
                                    <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                                </div>
                                <div class="tickets__slide-rate rate--gold">7.5</div>
                                <h3 class="tickets__slide-name">Чебурашка</h3>
                                <span class="tickets__slide-genres">2022, семейный</span>
                            </a>
                        </li>
                        <li class="tickets__slide">
                            <a href="#/cinema/seances" class="tickets__slide-link">
                                <div class="tickets__slide-img-wrap">
                                    <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                                </div>
                                <div class="tickets__slide-rate rate--common">7.5</div>
                                <h3 class="tickets__slide-name">Чебурашка</h3>
                                <span class="tickets__slide-genres">2022, семейный</span>
                            </a>
                        </li>
                        <li class="tickets__slide">
                            <a href="#/cinema/seances" class="tickets__slide-link">
                                <div class="tickets__slide-img-wrap">
                                    <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                                </div>
                                <div class="tickets__slide-rate rate--good">7.5</div>
                                <h3 class="tickets__slide-name">Чебурашка</h3>
                                <span class="tickets__slide-genres">2022, семейный</span>
                            </a>
                        </li>
                        <li class="tickets__slide">
                            <a href="#/cinema/seances" class="tickets__slide-link">
                                <div class="tickets__slide-img-wrap">
                                    <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                                </div>
                                <div class="tickets__slide-rate rate--good">7.5</div>
                                <h3 class="tickets__slide-name">Чебурашка</h3>
                                <span class="tickets__slide-genres">2022, семейный</span>
                            </a>
                        </li>
                        <li class="tickets__slide">
                            <a href="#/cinema/seances" class="tickets__slide-link">
                                <div class="tickets__slide-img-wrap">
                                    <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                                </div>
                                <div class="tickets__slide-rate rate--good">7.5</div>
                                <h3 class="tickets__slide-name">Чебурашка</h3>
                                <span class="tickets__slide-genres">2022, семейный</span>
                            </a>
                        </li>
                        <li class="tickets__slide">
                            <a href="#/cinema/seances" class="tickets__slide-link">
                                <div class="tickets__slide-img-wrap">
                                    <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                                </div>
                                <div class="tickets__slide-rate rate--good">7.5</div>
                                <h3 class="tickets__slide-name">Чебурашка</h3>
                                <span class="tickets__slide-genres">2022, семейный</span>
                            </a>
                        </li>
                        <li class="tickets__slide">
                            <a href="#/cinema/seances" class="tickets__slide-link">
                                <div class="tickets__slide-img-wrap">
                                    <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                                </div>
                                <div class="tickets__slide-rate rate--good">7.5</div>
                                <h3 class="tickets__slide-name">Чебурашка</h3>
                                <span class="tickets__slide-genres">2022, семейный</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <button class="tickets__slider-btn tickets__slider-btn--next" aria-label="Следующий слайд">
                    <svg class="tickets__slider-btn-icon">
                        <use href="./assets/img/sprite.svg#next_slide"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    </section>
`;

export default ticketsTemplate;
