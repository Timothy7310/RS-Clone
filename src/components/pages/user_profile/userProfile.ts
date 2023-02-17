import Page from '../Page';
import userProfileTemplate from '../../templates/userProfile/userProfile';
import FirebaseStore from '../../server/firebaseStore';
import FirebaseAuthUser from '../../server/firebaseAuthUser';
import { UserType } from '../../types/types';

export default class UserProfile {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    firebaseStore;

    firebaseAuthUser;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.firebaseStore = new FirebaseStore();
        this.firebaseAuthUser = new FirebaseAuthUser();
    }

    draw(): HTMLElement {
        this.container.classList.add('user-profile');
        this.container.innerHTML = userProfileTemplate;
        this.renderPage();
        this.renderSettings();
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }

    async renderSettings() {
        const res = await this.firebaseStore.getCurrentUser();
        const userInfo = res[0];
        const entryPoint = document.querySelector('.profile__content') as HTMLElement;
        const result = `
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
        entryPoint.innerHTML = result;
    }

    async renderPage() {
        const res = await this.firebaseStore.getCurrentUser();
        const userInfo = res[0];
        const result = `
            <section class="profile">
                <div class="container display-flex">
                    <ul class="profile__user">
                        <li class="profile__photo">
                            <div class="profile__photo-wrap-img">
                                <img src="${userInfo.avatar}" alt="user">
                            </div>
                        </li>
                        <li class="profile__photo-change">
                            <label class="profile__photo-change-label">
                                <span class="profile__photo-change-text">Изменить</span>
                                <input name="uploadAvatar" type="file" class="profile-input profile__photo-change-input" accept="image/png, image/gif, image/jpeg">
                            </label>
                            <input name="avatar" type="hidden" class="profile-input">
                        </li>
                        <li class="profile__user-name">${userInfo.nickname || 'Dude'}</li>
                        <li class="profile__location">
                            <span class="profile__city">${userInfo.city || ''}</span>
                            <span class="profile__country">${userInfo.country || ''}</span>
                        </li>
                        <li class="profile__email">${userInfo.email}</li>
                        <li class="profile__line"></li>
                        <li class="profile__delete">
                            <a href="" class="profile__link profile__link--delete">
                                <svg class="profile__link-icon">
                                    <use href="./assets/img/sprite.svg#delete-logo"></use>
                                </svg>
                                <span class="profile__link-text">Удалить аккаунт</span>
                            </a>
                        </li>
                        <li class="profile__line"></li>
                        <li class="profile__list">
                            <a href="" class="profile__link">
                                <svg class="profile__link-icon">
                                    <use href="./assets/img/sprite.svg#user-logo"></use>
                                </svg>
                                <span class="profile__link-text">Настройки профиля</span>
                            </a>
                        </li>
                        <li class="profile__list">
                            <a href="" class="profile__link">
                                <svg class="profile__link-icon profile__link-icon--list">
                                    <use href="./assets/img/sprite.svg#list-logo"></use>
                                </svg>
                                <span class="profile__link-text">Оценки (${userInfo.watched})</span>
                            </a>
                        </li>
                        <li class="profile__list">
                            <a href="" class="profile__link">
                                <svg class="profile__link-icon">
                                    <use href="./assets/img/sprite.svg#review-logo"></use>
                                </svg>
                                <span class="profile__link-text">Рецензии (${userInfo.reviews.total})</span>
                            </a>
                        </li>
                        <li class="profile__list">
                            <a href="" class="profile__link">
                                <svg class="profile__link-icon">
                                    <use href="./assets/img/sprite.svg#movie-logo"></use>
                                </svg>
                                <span class="profile__link-text">Моё (${userInfo.willWatch})</span>
                            </a>
                        </li>
                        <li class="profile__list profile__list--log-out">
                            <a class="profile__log-out" href="#/main">Выйти</a>
                        </li>
                    </ul>
                    <div class="profile__content">

                    </div>
                    <div class="profile__activity">
                        <h3 class="profile__title-activity">Ваша активность:</h3>
                        <h4 class="profile__category-activity">вы просмотрели:</h4>
                        <p class="profile__item-activity">
                            фильмы <span class="count-movies count">${userInfo.watched}</span>
                        </p>
                        <p class="profile__item-activity">
                            сериалы <span class="count-serials count">15</span>
                        </p>
                        <p class="profile__item-activity">
                            короткометражки <span class="count-short-movies count">10</span>
                        </p>
                        <h4 class="profile__category-activity">вы написали:</h4>
                        <p class="profile__item-activity">рецензий
                            <span class="count-review count">${userInfo.reviews.total}</span>
                        </p>
                        <h4 class="profile__category-activity">ваша средняя оценка:</h4>
                        <p class="profile__item-activity count">7.88</p>
                    </div>
                </div>
            </section>
        `;

        this.container.innerHTML = result;
    }

    // eslint-disable-next-line class-methods-use-this
    async userProfileEvent(event: Event) {
        const target = event.target as HTMLButtonElement;
        if (target.closest('.profile-settings__save')) {
            const res = await this.firebaseStore.getCurrentUser();
            const userObj = res[0] as UserType;

            const inputs = Array.from(document.querySelectorAll('.profile-input')) as HTMLInputElement[];
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            inputs.map((input) => [input.name, input.value])
                .forEach(<T extends keyof UserType>(item: string[]) => {
                    const key = item[0] as T;
                    const value = item[1] as UserType[T];
                    userObj[key] = value;
                });
            target.disabled = true;
            await this.firebaseStore.updateUserInfo(userObj);

            const userAvatar = document.querySelector('.profile__photo-wrap-img') as HTMLElement;
            const userNickname = document.querySelector('.profile__user-name') as HTMLElement;
            const userCity = document.querySelector('.profile__city') as HTMLElement;
            const userCountry = document.querySelector('.profile__country') as HTMLElement;

            userAvatar.innerHTML = `<img src="${userObj.avatar}" alt="user">`;
            userNickname.textContent = userObj.nickname;
            userCity.textContent = userObj.city;
            userCountry.textContent = userObj.country;

            target.disabled = false;
        }

        if (target.closest('.profile__log-out')) {
            event.preventDefault();
            await this.firebaseAuthUser.signOut();
            window.location.href = '#/main';
        }

        if (target.closest('.profile__link--delete')) {
            event.preventDefault();
            await this.firebaseAuthUser.deleteUser();
            localStorage.removeItem('userID');
            window.location.href = '#/main';
        }
    }

    // eslint-disable-next-line class-methods-use-this
    async uploadAvatarEvent(event: Event) {
        const target = event.target as HTMLInputElement;

        if (target.closest('[name="uploadAvatar"]')) {
            const avatarInput = document.querySelector('[name="avatar"]') as HTMLInputElement;
            const files = target.files as FileList;
            await this.firebaseStore.uploadFile(files[0]);
            avatarInput.value = localStorage.getItem('downloadURL') ?? 'https://vjoy.cc/wp-content/uploads/2020/11/1-35.jpg';
        }
    }
}
