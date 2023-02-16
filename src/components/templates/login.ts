const loginTemplates = `
    <section class="login">
        <div class="login__overlay"></div>
        <div class="login__wrap">
            <button class="login__close">
                <svg class="login__close-icon">
                    <use href="./assets/img/sprite.svg#icon_close"></use>
                </svg>
            </button>
            <span class="login__text">Войдите или зарегистрируйтесь</span>
            <form action="" class="login__form" id="login-form">
                <input type="email" name="email" placeholder="E-mail" id="login-email" class="login__input">
                <input type="password" name="password" placeholder="Пароль" id="login-password" class="login__input">
                <button type="submit" id="login-submit" class="login__submit">Войти</button>
            </form>
        </div>
    </section>
`;

export default loginTemplates;
