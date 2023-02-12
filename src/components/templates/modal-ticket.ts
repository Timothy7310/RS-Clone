const modalTicketTemplates = `
    <div class="modal-ticket modal-ticket--active">
        <div class="modal-ticket__overlay"></div>
        <div class="modal-ticket__content">
            <button class="modal-ticket__close">
                <svg class="modal-ticket__close-icon">
                    <use href="./assets/img/sprite.svg#icon_close"></use>
                </svg>
            </button>
            <span class="modal-ticket__content-name">
                О чем говорят мужчины.  Простые удовольствия
            </span>
            <span class="modal-ticket__content-date">
                5 февраля. Кинотеатр RSSchool Cinema
            </span>
            <div class="modal-ticket__content-times">
                <button class="modal-ticket__content-time">09:30</button>
                <button class="modal-ticket__content-time">11:30</button>
                <button class="modal-ticket__content-time">13:30</button>
                <button class="modal-ticket__content-time">15:30</button>
                <button class="modal-ticket__content-time modal-ticket__content-time--active">17:30</button>
                <button class="modal-ticket__content-time">19:30</button>
                <button class="modal-ticket__content-time">21:30</button>
            </div>
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
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost" disabled>
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost modal-ticket__spot--active">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot modal-ticket__spot--low-cost">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">1</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">2</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">3</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">4</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">5</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">6</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">7</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">8</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">9</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">10</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">11</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">12</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">13</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">14</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">15</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">16</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">17</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">18</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">19</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">20</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">21</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">22</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">23</span>
                    </button>
                    <button class="modal-ticket__spot">
                        <span class="modal-ticket__spot-num">24</span>
                    </button>

                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">1</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">2</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">3</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">4</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">5</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">6</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">7</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">8</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">9</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">10</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">11</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">12</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">13</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">14</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">15</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">16</span>
                        </button>
                    </div>
                    <div class="modal-ticket__spot-sofa-warp">
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
                            <span class="modal-ticket__spot-num">17</span>
                        </button>
                        <button class="modal-ticket__spot modal-ticket__spot--sofa">
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
                    <span class="modal-ticket__content-buy-total-num">30 BYN</span>
                </div>
                <button class="modal-ticket__content-buy-btn">Купить</button>
            </div>
        </div>
    </div>
`;

export default modalTicketTemplates;
