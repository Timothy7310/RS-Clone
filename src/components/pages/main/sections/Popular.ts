import Component from '../../Component';

export default class Popular {
    component: Component;

    container: HTMLElement;

    constructor() {
        this.component = new Component('section', 'popular');
        this.container = this.component.draw();
    }

    draw(): HTMLElement {
        this.container.insertAdjacentHTML(
            'afterbegin',
            `
      <h2 class="visually-hidden">Популярное сейчас</h2>
      <div class="container">
          <div class="popular__wrap">
              <div class="popular__info">
                  <img src="https://avatars.mds.yandex.net/get-bunker/998550/1e48e69639b2609a530c881bd92ac990546b16e6/800x124"
                      class="popular__logo" alt="">
                  <p class="popular__story">
                      Всё смешалось в доме вампиров. Казалось, все проблемы
                      решены и можно жить вечно, но нет — семью поджидают новые
                      трудности
                  </p>
                  <p class="popular__cast">
                      В главных ролях: Юрий Стоянов, Татьяна Догилева, Екатерина Кузнецова,
                      Анастасия Стежко, Мартин Герохинович, Артём Ткаченко, Ольга Медынич
                  </p>
                  <p class="popular__directors">
                      Режиссер: Антон Маслов, Андрей Богатырев, Дмитрий Грибанов
                  </p>
                  <button class="popular__btn">
                      <svg class="popular__btn-icon">
                          <use href="./assets/img/sprite.svg#icon_play"></use>
                      </svg>
                      <span class="popular__btn-text">Смотреть</span>
                  </button>
              </div>
              <div class="popular__bg"></div>
              <div class="popular__trailer-container">
                 <img class="popular__trailer-back" src="http://avatars.mds.yandex.net/get-bunker/128809/2338ca99dc9f4cd91a430012b5d73480f4f0fa64/940x400" alt="">
              </div>
          </div>
      </div>
    `,
        );
        return this.container;
    }
}
