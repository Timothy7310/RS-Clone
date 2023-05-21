const userProfileSettingsTemplates = `
                    <div class="profile__settings">
                        <h2 class="profile__label-settings">Настройки профиля</h2>
                        <form class="profile__form" id="form">
                            <div class="profile__form-wrap">
                                <label class="profile__label-text" for="firstname">Имя</label>
                                <input class="profile__input" id="firstname" type="text" placeholder="Введите ваше имя">
                            </div>
                            <div class="profile__form-wrap">
                                <label class="profile__label-text" for="lastname">Фамилия</label>
                                <input class="profile__input" id="lastname" type="text" placeholder="Введите вашу фамилию">
                            </div>
                            <div class="profile__form-wrap">
                                <label class="profile__label-text" for="nickname">Никнейм</label>
                                <input class="profile__input" id="nickname" type="text" placeholder="Введите ваш никнейм">
                            </div>
                            <div class="profile__form-wrap">
                                <label class="profile__label-text" for="email">E-mail</label>
                                <input class="profile__input" id="email" type="text" placeholder="Введите ваш e-mail">
                            </div>
                            <div class="profile__form-wrap">
                                <label class="profile__label-text" for="city">Город</label>
                                <input class="profile__input" id="city" type="text" placeholder="Введите ваш город">
                            </div>
                            <div class="profile__form-wrap">
                                <label class="profile__label-text" for="country">Страна</label>
                                <input class="profile__input" id="country" type="text" placeholder="Введите вашу страну">
                            </div>
                            <button class="profile__form-btn" type="submit">Сохранить</button>
                        </form>
                    </div>`;

export default userProfileSettingsTemplates;
