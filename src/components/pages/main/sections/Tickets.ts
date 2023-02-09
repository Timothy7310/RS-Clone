import Component from '../../Component';

export default class Tickets {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('section', 'tickets');
        this.container = this.component.draw();
    }

    draw(): HTMLElement {
        this.container.insertAdjacentHTML(
            'afterbegin',
            `
      <div class="container">
          <div class="tickets__wrap">
              <a href="" class="tickets__link">
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
                  <ul class="tickets__slider">
                      <li class="tickets__slide">
                          <a href="" class="tickets__slide-link">
                              <div class="tickets__slide-img-wrap">
                                  <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                              </div>
                              <div class="tickets__slide-rate rate--gold">7.5</div>
                              <h3 class="tickets__slide-name">Чебурашка</h3>
                              <span class="tickets__slide-genres">2022, семейный</span>
                          </a>
                      </li>
                      <li class="tickets__slide">
                          <a href="" class="tickets__slide-link">
                              <div class="tickets__slide-img-wrap">
                                  <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                              </div>
                              <div class="tickets__slide-rate rate--common">7.5</div>
                              <h3 class="tickets__slide-name">Чебурашка</h3>
                              <span class="tickets__slide-genres">2022, семейный</span>
                          </a>
                      </li>
                      <li class="tickets__slide">
                          <a href="" class="tickets__slide-link">
                              <div class="tickets__slide-img-wrap">
                                  <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                              </div>
                              <div class="tickets__slide-rate rate--good">7.5</div>
                              <h3 class="tickets__slide-name">Чебурашка</h3>
                              <span class="tickets__slide-genres">2022, семейный</span>
                          </a>
                      </li>
                      <li class="tickets__slide">
                          <a href="" class="tickets__slide-link">
                              <div class="tickets__slide-img-wrap">
                                  <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                              </div>
                              <div class="tickets__slide-rate rate--good">7.5</div>
                              <h3 class="tickets__slide-name">Чебурашка</h3>
                              <span class="tickets__slide-genres">2022, семейный</span>
                          </a>
                      </li>
                      <li class="tickets__slide">
                          <a href="" class="tickets__slide-link">
                              <div class="tickets__slide-img-wrap">
                                  <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                              </div>
                              <div class="tickets__slide-rate rate--good">7.5</div>
                              <h3 class="tickets__slide-name">Чебурашка</h3>
                              <span class="tickets__slide-genres">2022, семейный</span>
                          </a>
                      </li>
                      <li class="tickets__slide">
                          <a href="" class="tickets__slide-link">
                              <div class="tickets__slide-img-wrap">
                                  <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                              </div>
                              <div class="tickets__slide-rate rate--good">7.5</div>
                              <h3 class="tickets__slide-name">Чебурашка</h3>
                              <span class="tickets__slide-genres">2022, семейный</span>
                          </a>
                      </li>
                      <li class="tickets__slide">
                          <a href="" class="tickets__slide-link">
                              <div class="tickets__slide-img-wrap">
                                  <img class="tickets__slide-img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/150x225" alt="">
                              </div>
                              <div class="tickets__slide-rate rate--good">7.5</div>
                              <h3 class="tickets__slide-name">Чебурашка</h3>
                              <span class="tickets__slide-genres">2022, семейный</span>
                          </a>
                      </li>
                  </ul>
                  <button class="tickets__slider-btn tickets__slider-btn--next" aria-label="Следующий слайд">
                      <svg class="tickets__slider-btn-icon">
                          <use href="./assets/img/sprite.svg#next_slide"></use>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
    `,
        );
        return this.container;
    }
}
