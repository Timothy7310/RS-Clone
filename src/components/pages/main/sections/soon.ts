import Component from "../../Component";

export class Soon extends Component{
  constructor() {
    super('section', 'soon');
  }

  draw(): HTMLElement {
    this.container.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="container">
          <h2 class="soon__title">Календарь релизов</h2>
          <hr>
          <div class="soon__wrap">
              <div class="soon-cinema">
                  <a href="" class="soon-cinema__link">
                      <h3 class="soon-cinema__link-title">Скоро в кино</h3>
                      <svg class="soon-cinema__link-icon">
                          <use href="./assets/img/sprite.svg#icon_back"></use>
                      </svg>
                  </a>
                  <ol class="soon-cinema__list">
                      <li class="soon-cinema__item">
                          <a href="">
                              <img class="soon-cinema__item-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/4bddfb1b-e001-4292-ba26-1b12f5aec370/40x60" alt="">
                          </a>
                          <div class="soon-cinema__item-name-container">
                              <a href="">
                                  <span class="soon-cinema__item-name">Больше чем никогда</span>
                              </a>
                              <span class="soon-cinema__item-name-original">Plus que jamais</span>
                          </div>
                          <div class="soon-cinema__item-date">
                              <span class="soon-cinema__item-date-day">9</span>
                              <span class="soon-cinema__item-date-mounth">февраля</span>
                          </div>
                          <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                              <svg class="soon-cinema__item-marker-icon">
                                  <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                              </svg>
                          </button>
                      </li>
                      <li class="soon-cinema__item">
                          <a href="">
                              <img class="soon-cinema__item-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/4bddfb1b-e001-4292-ba26-1b12f5aec370/40x60" alt="">
                          </a>
                          <div class="soon-cinema__item-name-container">
                              <a href="">
                                  <span class="soon-cinema__item-name">Больше чем никогда</span>
                              </a>
                              <span class="soon-cinema__item-name-original">Plus que jamais</span>
                          </div>
                          <div class="soon-cinema__item-date">
                              <span class="soon-cinema__item-date-day">9</span>
                              <span class="soon-cinema__item-date-mounth">февраля</span>
                          </div>
                          <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                              <svg class="soon-cinema__item-marker-icon">
                                  <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                              </svg>
                          </button>
                      </li>
                      <li class="soon-cinema__item">
                          <a href="">
                              <img class="soon-cinema__item-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/4bddfb1b-e001-4292-ba26-1b12f5aec370/40x60" alt="">
                          </a>
                          <div class="soon-cinema__item-name-container">
                              <a href="">
                                  <span class="soon-cinema__item-name">Больше чем никогда</span>
                              </a>
                              <span class="soon-cinema__item-name-original">Plus que jamais</span>
                          </div>
                          <div class="soon-cinema__item-date">
                              <span class="soon-cinema__item-date-day">9</span>
                              <span class="soon-cinema__item-date-mounth">февраля</span>
                          </div>
                          <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                              <svg class="soon-cinema__item-marker-icon">
                                  <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                              </svg>
                          </button>
                      </li>
                      <li class="soon-cinema__item">
                          <a href="">
                              <img class="soon-cinema__item-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/4bddfb1b-e001-4292-ba26-1b12f5aec370/40x60" alt="">
                          </a>
                          <div class="soon-cinema__item-name-container">
                              <a href="">
                                  <span class="soon-cinema__item-name">Больше чем никогда</span>
                              </a>
                              <span class="soon-cinema__item-name-original">Plus que jamais</span>
                          </div>
                          <div class="soon-cinema__item-date">
                              <span class="soon-cinema__item-date-day">9</span>
                              <span class="soon-cinema__item-date-mounth">февраля</span>
                          </div>
                          <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                              <svg class="soon-cinema__item-marker-icon">
                                  <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                              </svg>
                          </button>
                      </li>
                      <li class="soon-cinema__item">
                          <a href="">
                              <img class="soon-cinema__item-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/4bddfb1b-e001-4292-ba26-1b12f5aec370/40x60" alt="">
                          </a>
                          <div class="soon-cinema__item-name-container">
                              <a href="">
                                  <span class="soon-cinema__item-name">Больше чем никогда</span>
                              </a>
                              <span class="soon-cinema__item-name-original">Plus que jamais</span>
                          </div>
                          <div class="soon-cinema__item-date">
                              <span class="soon-cinema__item-date-day">9</span>
                              <span class="soon-cinema__item-date-mounth">февраля</span>
                          </div>
                          <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                              <svg class="soon-cinema__item-marker-icon">
                                  <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                              </svg>
                          </button>
                      </li>
                  </ol>
              </div>
              <div class="soon-cinema">
                  <a href="" class="soon-cinema__link">
                      <h3 class="soon-cinema__link-title">Цифровые релизы</h3>
                      <svg class="soon-cinema__link-icon">
                          <use href="./assets/img/sprite.svg#icon_back"></use>
                      </svg>
                  </a>
                  <ol class="soon-cinema__list">
                      <li class="soon-cinema__item">
                          <a href="">
                              <img class="soon-cinema__item-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf197df2-d1ee-4121-a413-f7eebb78a1e9/40x60" alt="">
                          </a>
                          <div class="soon-cinema__item-name-container">
                              <a href="">
                                  <span class="soon-cinema__item-name">Отзвуки прошлого</span>
                              </a>
                              <span class="soon-cinema__item-name-original">The Old Way</span>
                          </div>
                          <div class="soon-cinema__item-date">
                              <span class="soon-cinema__item-date-day">9</span>
                              <span class="soon-cinema__item-date-mounth">февраля</span>
                          </div>
                          <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                              <svg class="soon-cinema__item-marker-icon">
                                  <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                              </svg>
                          </button>
                      </li>
                      <li class="soon-cinema__item">
                          <a href="">
                              <img class="soon-cinema__item-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf197df2-d1ee-4121-a413-f7eebb78a1e9/40x60" alt="">
                          </a>
                          <div class="soon-cinema__item-name-container">
                              <a href="">
                                  <span class="soon-cinema__item-name">Отзвуки прошлого</span>
                              </a>
                              <span class="soon-cinema__item-name-original">The Old Way</span>
                          </div>
                          <div class="soon-cinema__item-date">
                              <span class="soon-cinema__item-date-day">9</span>
                              <span class="soon-cinema__item-date-mounth">февраля</span>
                          </div>
                          <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                              <svg class="soon-cinema__item-marker-icon">
                                  <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                              </svg>
                          </button>
                      </li>
                      <li class="soon-cinema__item">
                          <a href="">
                              <img class="soon-cinema__item-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf197df2-d1ee-4121-a413-f7eebb78a1e9/40x60" alt="">
                          </a>
                          <div class="soon-cinema__item-name-container">
                              <a href="">
                                  <span class="soon-cinema__item-name">Отзвуки прошлого</span>
                              </a>
                              <span class="soon-cinema__item-name-original">The Old Way</span>
                          </div>
                          <div class="soon-cinema__item-date">
                              <span class="soon-cinema__item-date-day">9</span>
                              <span class="soon-cinema__item-date-mounth">февраля</span>
                          </div>
                          <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                              <svg class="soon-cinema__item-marker-icon">
                                  <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                              </svg>
                          </button>
                      </li>
                      <li class="soon-cinema__item">
                          <a href="">
                              <img class="soon-cinema__item-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf197df2-d1ee-4121-a413-f7eebb78a1e9/40x60" alt="">
                          </a>
                          <div class="soon-cinema__item-name-container">
                              <a href="">
                                  <span class="soon-cinema__item-name">Отзвуки прошлого</span>
                              </a>
                              <span class="soon-cinema__item-name-original">The Old Way</span>
                          </div>
                          <div class="soon-cinema__item-date">
                              <span class="soon-cinema__item-date-day">9</span>
                              <span class="soon-cinema__item-date-mounth">февраля</span>
                          </div>
                          <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                              <svg class="soon-cinema__item-marker-icon">
                                  <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                              </svg>
                          </button>
                      </li>
                      <li class="soon-cinema__item">
                          <a href="">
                              <img class="soon-cinema__item-poster" src="//avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf197df2-d1ee-4121-a413-f7eebb78a1e9/40x60" alt="">
                          </a>
                          <div class="soon-cinema__item-name-container">
                              <a href="">
                                  <span class="soon-cinema__item-name">Отзвуки прошлого</span>
                              </a>
                              <span class="soon-cinema__item-name-original">The Old Way</span>
                          </div>
                          <div class="soon-cinema__item-date">
                              <span class="soon-cinema__item-date-day">9</span>
                              <span class="soon-cinema__item-date-mounth">февраля</span>
                          </div>
                          <button class="soon-cinema__item-marker" aria-label="Добавить в список">
                              <svg class="soon-cinema__item-marker-icon">
                                  <use href="./assets/img/sprite.svg#icon_add_watch"></use>
                              </svg>
                          </button>
                      </li>
                  </ol>
              </div>
          </div>
      </div>
    `
    );
    return this.container;
  }
}