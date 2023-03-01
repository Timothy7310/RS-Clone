import Page from '../Page';
import loginTemplates from '../../templates/login';
import FirebaseStore from '../../server/firebaseStore';

class Login {
    page: Page;

    container: HTMLElement;

    path: string | undefined;

    firebaseStore;

    constructor(path?: string) {
        this.page = new Page(path);
        this.container = this.page.draw();
        this.firebaseStore = new FirebaseStore();
    }

    draw(): HTMLElement {
        this.container.classList.add('cinema');
        this.container.innerHTML = loginTemplates;
        return this.container;
    }

    clear(): void {
        this.page.clear();
    }

    loginEvent(target: HTMLElement, event: Event) {
        if (target.closest('#login-submit')) {
            event.preventDefault();
            const emailInput = document.querySelector('#login-email') as HTMLInputElement;
            const passwordInput = document.querySelector('#login-password') as HTMLInputElement;
            this.firebaseStore.createUser(emailInput.value, passwordInput.value);
        }
    }
}

export default Login;
