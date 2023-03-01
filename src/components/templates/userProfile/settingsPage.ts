import { DocumentData } from 'firebase/firestore';

const settingsPageTemplates = (userInfo: DocumentData): string => `
<div class="profile-settings">
    <h2 class="profile-settings__title">Настройки профиля</h2>
    <div class="profile-settings__wrap">
        <div class="profile-settings__input-wrap">
            <label for="profileFirstName" class="profile-settings__input-label">Имя</label>
            <input type="text" name="firstName" id="profileFirstName" class="profile-settings__input profile-input" placeholder="Введите ваше имя" value="${userInfo.firstName || ''}">
        </div>

        <div class="profile-settings__input-wrap">
            <label for="profileLastName" class="profile-settings__input-label">Фамилия</label>
            <input type="text" name="lastName" id="profileLastName" class="profile-settings__input profile-input" placeholder="Введите вашу фамилию" value="${userInfo.lastName || ''}">
        </div>

        <div class="profile-settings__input-wrap">
            <label for="profileNickname" class="profile-settings__input-label">Никнейм</label>
            <input type="text" name="nickname" id="profileNickname" class="profile-settings__input profile-input" placeholder="Введите ваш никнейм" value="${userInfo.nickname || 'Dude'}">
        </div>

        <div class="profile-settings__input-wrap">
            <label for="profileFirstName" class="profile-settings__input-label">Город</label>
            <input type="text" name="city" id="profileFirstName" class="profile-settings__input profile-input" placeholder="Введите ваш город" value="${userInfo.city || ''}">
        </div>

        <div class="profile-settings__input-wrap">
            <label for="profileCountry" class="profile-settings__input-label">Страна</label>
            <input type="text" name="country" id="profileCountry" class="profile-settings__input profile-input" placeholder="Введите вашу страну" value="${userInfo.country || ''}">
        </div>
    </div>

    <button class="profile-settings__save">Сохранить</button>
</div>
`;

export default settingsPageTemplates;
