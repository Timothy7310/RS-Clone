const modalTicketTemplates = (time: string, date: string, name: string) => `
    <div class="modal-ticket modal-ticket--active">
        <div class="modal-ticket__overlay"></div>
        <div class="modal-ticket__content">
            <button class="modal-ticket__close" aria-label="Закрыть">
                <svg class="modal-ticket__close-icon">
                    <use href="./assets/img/sprite.svg#icon_close"></use>
                </svg>
            </button>
            <span class="modal-ticket__content-name">
                ${name}
            </span>
            <span class="modal-ticket__content-date">
                ${date}. ${time} Кинотеатр RSSchool Cinema
            </span>
            <div class="modal-ticket__content-splitter"></div>
            <div class="modal-ticket__content-prices">
                <div class="modal-ticket__content-price-wrap">
                    <div class="modal-ticket__content-price-color modal-ticket__content-price-color--low-cost"></div>
                    <span class="modal-ticket__content-price-num">10 BYN</span>
                </div>
                <div class="modal-ticket__content-price-wrap">
                    <div class="modal-ticket__content-price-color modal-ticket__content-price-color--common-cost"></div>
                    <span class="modal-ticket__content-price-num">15 BYN</span>
                </div>
                <div class="modal-ticket__content-price-wrap">
                    <div class="modal-ticket__content-price-color modal-ticket__content-price-color--high-cost"></div>
                    <span class="modal-ticket__content-price-num">18 BYN (диван)</span>
                </div>
                <div class="modal-ticket__content-price-wrap">
                    <div class="modal-ticket__content-price-color modal-ticket__content-price-color--disable"></div>
                    <span class="modal-ticket__content-price-num">Занято</span>
                </div>
            </div>
            <svg class="modal-ticket__content-monitor">
                <use href="./assets/img/sprite.svg#monitor"></use>
            </svg>
            <div class="modal-ticket__content-hall-wrap">
                <ol class="modal-ticket__content-hall-rows modal-ticket__content-hall-rows--left">
                    <li class="modal-ticket__content-hall-row">1</li>
                    <li class="modal-ticket__content-hall-row">2</li>
                    <li class="modal-ticket__content-hall-row">3</li>
                    <li class="modal-ticket__content-hall-row">4</li>
                    <li class="modal-ticket__content-hall-row">5</li>
                    <li class="modal-ticket__content-hall-row">6</li>
                    <li class="modal-ticket__content-hall-row">7</li>
                    <li class="modal-ticket__content-hall-row">8</li>
                    <li class="modal-ticket__content-hall-row">9</li>
                </ol>
                <div class="modal-ticket__content-hall">
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 1 место">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 2 место">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 3 место">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 4 место">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 5 место">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 6 место">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 7 место">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 8 место">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 9 место">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 10 место">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 11 место">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 12 место">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 13 место">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 14 место">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 15 место">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 16 место">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 17 место">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 18 место">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 19 место">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 20 место">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 21 место">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 22 место">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 23 место">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" aria-label="1 ряд 24 место">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 1 место">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 2 место">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 3 место">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 4 место">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 5 место">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 6 место">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 7 место">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 8 место">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 9 место">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 10 место">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 11 место">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 12 место">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 13 место">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 14 место">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 15 место">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 16 место">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 17 место">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 18 место">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 19 место">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 20 место">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 21 место">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 22 место">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 23 место">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="2 ряд 24 место">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 1 место">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 2 место">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 3 место">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 4 место">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 5 место">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 6 место">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 7 место">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 8 место">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 9 место">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 10 место">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 11 место">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 12 место">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 13 место">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 14 место">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 15 место">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 16 место">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 17 место">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 18 место">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 19 место">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 20 место">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 21 место">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 22 место">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 23 место">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="3 ряд 24 место">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 1 место">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 2 место">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 3 место">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 4 место">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 5 место">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 6 место">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 7 место">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 8 место">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 9 место">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 10 место">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 11 место">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 12 место">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 13 место">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 14 место">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 15 место">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 16 место">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 17 место">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 18 место">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 19 место">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 20 место">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 21 место">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 22 место">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 23 место">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="4 ряд 24 место">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 1 место">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 2 место">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 3 место">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 4 место">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 5 место">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 6 место">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 7 место">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 8 место">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 9 место">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 10 место">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 11 место">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 12 место">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 13 место">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 14 место">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 15 место">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 16 место">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 17 место">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 18 место">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 19 место">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 20 место">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 21 место">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 22 место">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 23 место">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="5 ряд 24 место">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 1 место">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 2 место">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 3 место">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 4 место">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 5 место">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 6 место">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 7 место">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 8 место">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 9 место">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 10 место">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 11 место">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 12 место">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 13 место">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 14 место">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 15 место">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 16 место">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 17 место">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 18 место">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 19 место">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 20 место">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 21 место">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 22 место">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 23 место">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="6 ряд 24 место">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 1 место">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 2 место">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 3 место">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 4 место">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 5 место">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 6 место">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 7 место">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 8 место">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 9 место">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 10 место">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 11 место">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 12 место">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 13 место">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 14 место">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 15 место">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 16 место">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 17 место">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 18 место">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 19 место">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 20 место">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 21 место">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 22 место">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 23 место">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="7 ряд 24 место">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 1 место">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 2 место">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 3 место">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 4 место">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 5 место">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 6 место">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 7 место">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 8 место">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 9 место">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 10 место">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 11 место">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 12 место">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 13 место">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 14 место">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common" aria-label="8 ряд 15 место">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common"  aria-label="8 ряд 16 место">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common"  aria-label="8 ряд 17 место">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common"  aria-label="8 ряд 18 место">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common"  aria-label="8 ряд 19 место">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common"  aria-label="8 ряд 20 место">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common"  aria-label="8 ряд 21 место">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common"  aria-label="8 ряд 22 место">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common"  aria-label="8 ряд 23 место">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--common"  aria-label="8 ряд 24 место">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 1 место">
                            <span class="modal-ticket__spot-num">1</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 2 место">
                            <span class="modal-ticket__spot-num">2</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 3 место">
                            <span class="modal-ticket__spot-num">3</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 4 место">
                            <span class="modal-ticket__spot-num">4</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 5 место">
                            <span class="modal-ticket__spot-num">5</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 6 место">
                            <span class="modal-ticket__spot-num">6</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 7 место">
                            <span class="modal-ticket__spot-num">7</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 8 место">
                            <span class="modal-ticket__spot-num">8</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 9 место">
                            <span class="modal-ticket__spot-num">9</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 10 место">
                            <span class="modal-ticket__spot-num">10</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 11 место">
                            <span class="modal-ticket__spot-num">11</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 12 место">
                            <span class="modal-ticket__spot-num">12</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 13 место">
                            <span class="modal-ticket__spot-num">13</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 14 место">
                            <span class="modal-ticket__spot-num">14</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 15 место">
                            <span class="modal-ticket__spot-num">15</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 16 место">
                            <span class="modal-ticket__spot-num">16</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 17 место">
                            <span class="modal-ticket__spot-num">17</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa" aria-label="диваны 18 место">
                            <span class="modal-ticket__spot-num">18</span>
                        </button>
                    </div>
                </div>
                <ol class="modal-ticket__content-hall-rows modal-ticket__content-hall-rows--right">
                    <li class="modal-ticket__content-hall-row">1</li>
                    <li class="modal-ticket__content-hall-row">2</li>
                    <li class="modal-ticket__content-hall-row">3</li>
                    <li class="modal-ticket__content-hall-row">4</li>
                    <li class="modal-ticket__content-hall-row">5</li>
                    <li class="modal-ticket__content-hall-row">6</li>
                    <li class="modal-ticket__content-hall-row">7</li>
                    <li class="modal-ticket__content-hall-row">8</li>
                    <li class="modal-ticket__content-hall-row">9</li>
                </ol>
            </div>
            <div class="modal-ticket__content-buy">
                <div class="modal-ticket__content-buy-total">
                    <span class="modal-ticket__content-buy-total-text">Итог:</span>
                    <span class="modal-ticket__content-buy-total-num">0 BYN</span>
                </div>
                <button class="modal-ticket__content-buy-btn">Купить</button>
            </div>
        </div>
    </div>
`;

export default modalTicketTemplates;
