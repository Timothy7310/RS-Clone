const settingsPageTemplates = `
    <div class="profile-settings">
        <h2 class="profile-settings__title">Настройки профиля</h2>
        <div class="profile-settings__wrap">
            <div class="profile-settings__input-wrap">
                <label for="profileFirstName" class="profile-settings__input-label">Имя</label>
                <input type="text" name="firstName" id="profileFirstName" class="profile-settings__input" placeholder="Введите ваше имя">
            </div>

            <div class="profile-settings__input-wrap">
                <label for="profileLastName" class="profile-settings__input-label">Фамилия</label>
                <input type="text" name="lastName" id="profileLastName" class="profile-settings__input" placeholder="Введите вашу фамилию">
            </div>

            <div class="profile-settings__input-wrap">
                <label for="profileNickname" class="profile-settings__input-label">Никнейм</label>
                <input type="text" name="nickname" id="profileNickname" class="profile-settings__input" placeholder="Введите ваш никнейм">
            </div>

            <div class="profile-settings__input-wrap">
                <label for="profileCity" class="profile-settings__input-label">Город</label>
                <input type="text" name="city" id="profileCity" class="profile-settings__input" placeholder="Введите ваш город">
            </div>

            <div class="profile-settings__input-wrap">
                <label for="profileCountry" class="profile-settings__input-label">Страна</label>
                <input type="text" name="country" id="profileCountry" class="profile-settings__input" placeholder="Введите вашу страну">
            </div>
        </div>

        <button class="profile-settings__save">Сохранить</button>
    </div>
`;

export default settingsPageTemplates;
