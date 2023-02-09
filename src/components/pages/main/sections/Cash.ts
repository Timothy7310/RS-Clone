import Component from '../../Component';

export default class Cash {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('section', 'cash');
        this.container = this.component.draw();
    }

    draw(): HTMLElement {
        this.container.insertAdjacentHTML(
            'afterbegin',
            `
      <div class="container">
          <h2 class="cash__title">Кассовые сборы за уик-энд</h2>
          <hr>
          <div class="cash__wrap">
              <div class="cash__card">
                  <a href="" class="cash__card-link">
                      <h3 class="cash__card-link-title">Россия и СНГ</h3>
                      <svg class="cash__card-link-icon">
                          <use href="./assets/img/sprite.svg#icon_back"></use>
                      </svg>
                  </a>
                  <ol class="cash__card-list">
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Чебурашка</span>
                                  </a>
                                  <span class="cash__card-item-total">761.5 млн ₽</span>
                              </div>
                              <span class="cash__card-item-time">4.3 млрд  ₽ за 5 недель</span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Чебурашка</span>
                                  </a>
                                  <span class="cash__card-item-total">761.5 млн ₽</span>
                              </div>
                              <span class="cash__card-item-time">4.3 млрд  ₽ за 5 недель</span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Чебурашка</span>
                                  </a>
                                  <span class="cash__card-item-total">761.5 млн ₽</span>
                              </div>
                              <span class="cash__card-item-time">4.3 млрд  ₽ за 5 недель</span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Чебурашка</span>
                                  </a>
                                  <span class="cash__card-item-total">761.5 млн ₽</span>
                              </div>
                              <span class="cash__card-item-time">4.3 млрд  ₽ за 5 недель</span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/a9f04abf-a08f-4633-84c3-a818d75a4daa/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Чебурашка</span>
                                  </a>
                                  <span class="cash__card-item-total">761.5 млн ₽</span>
                              </div>
                              <span class="cash__card-item-time">4.3 млрд  ₽ за 5 недель</span>
                         </div>
                      </li>
                  </ol>
              </div>
              <div class="cash__card">
                  <a href="" class="cash__card-link">
                      <h3 class="cash__card-link-title">Мир</h3>
                      <svg class="cash__card-link-icon">
                          <use href="./assets/img/sprite.svg#icon_back"></use>
                      </svg>
                  </a>
                  <ol class="cash__card-list">
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/2e51cb8b-fd51-4166-84a2-63559733baac/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Аватар: Путь воды</span>
                                  </a>
                                  <span class="cash__card-item-total">$76 млн</span>
                              </div>
                              <span class="cash__card-item-time">$2 млрд  за 6 недель </span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/2e51cb8b-fd51-4166-84a2-63559733baac/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Аватар: Путь воды</span>
                                  </a>
                                  <span class="cash__card-item-total">$76 млн</span>
                              </div>
                              <span class="cash__card-item-time">$2 млрд  за 6 недель </span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/2e51cb8b-fd51-4166-84a2-63559733baac/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Аватар: Путь воды</span>
                                  </a>
                                  <span class="cash__card-item-total">$76 млн</span>
                              </div>
                              <span class="cash__card-item-time">$2 млрд  за 6 недель </span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/2e51cb8b-fd51-4166-84a2-63559733baac/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Аватар: Путь воды</span>
                                  </a>
                                  <span class="cash__card-item-total">$76 млн</span>
                              </div>
                              <span class="cash__card-item-time">$2 млрд  за 6 недель </span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/6201401/2e51cb8b-fd51-4166-84a2-63559733baac/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Аватар: Путь воды</span>
                                  </a>
                                  <span class="cash__card-item-total">$76 млн</span>
                              </div>
                              <span class="cash__card-item-time">$2 млрд  за 6 недель </span>
                         </div>
                      </li>
                  </ol>
              </div>
              <div class="cash__card">
                  <a href="" class="cash__card-link">
                      <h3 class="cash__card-link-title">США и Канада</h3>
                      <svg class="cash__card-link-icon">
                          <use href="./assets/img/sprite.svg#icon_back"></use>
                      </svg>
                  </a>
                  <ol class="cash__card-list">
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Кот в сапогах 2: 
                                      Последнее желание</span>
                                  </a>
                                  <span class="cash__card-item-total">$11.8 млн</span>
                              </div>
                              <span class="cash__card-item-time">$126.8 млн  за 5 недель</span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Кот в сапогах 2: 
                                      Последнее желание</span>
                                  </a>
                                  <span class="cash__card-item-total">$11.8 млн</span>
                              </div>
                              <span class="cash__card-item-time">$126.8 млн  за 5 недель</span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Кот в сапогах 2: 
                                      Последнее желание</span>
                                  </a>
                                  <span class="cash__card-item-total">$11.8 млн</span>
                              </div>
                              <span class="cash__card-item-time">$126.8 млн  за 5 недель</span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Кот в сапогах 2: 
                                      Последнее желание</span>
                                  </a>
                                  <span class="cash__card-item-total">$11.8 млн</span>
                              </div>
                              <span class="cash__card-item-time">$126.8 млн  за 5 недель</span>
                         </div>
                      </li>
                      <li class="cash__card-item">
                          <a href="" class="cash__card-item-poster-wrap">
                              <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/19b2a831-d81b-4364-a82a-dc6ca779023f/40x60" alt="" class="cash__card-item-poster">
                          </a>
                         <div class="cash__card-item-info">
                              <div class="cash__card-item-info-head">
                                  <a href="" class="cash__card-item-name-wrap">
                                      <span class="cash__card-item-name">Кот в сапогах 2: 
                                      Последнее желание</span>
                                  </a>
                                  <span class="cash__card-item-total">$11.8 млн</span>
                              </div>
                              <span class="cash__card-item-time">$126.8 млн  за 5 недель</span>
                         </div>
                      </li>
                  </ol>
              </div>
          </div>
      </div>
    `,
        );
        return this.container;
    }
}
