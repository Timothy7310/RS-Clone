import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    deleteUser,
} from 'firebase/auth';

enum ErrorCodes {
    AlreadyExist = 'auth/email-already-in-use',
    WeekPassword = 'auth/weak-password',
    InvalidEmail = 'auth/invalid-email',
    WrongPassword = 'auth/wrong-password',
}

export default class FirebaseAuthUser {
    auth;

    #errorContainer: HTMLElement | null = null;

    constructor() {
        this.auth = getAuth();
    }

    get errorContainer(): HTMLElement {
        if (!this.#errorContainer) {
            this.#errorContainer = document.querySelector('.error-message') as HTMLElement;
        }
        return this.#errorContainer;
    }

    registerUser = async (email: string, password: string) => {
        await createUserWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                localStorage.setItem('userID', userCredential.user.uid);
                this.clearErrorMessage();
                this.logInUser(email, password);
            })
            .catch((error) => {
                if (error.code === ErrorCodes.InvalidEmail) {
                    this.showErrorMessage('Неправильный E-mail');
                    return;
                }
                if (error.code === ErrorCodes.WeekPassword) {
                    this.showErrorMessage('Пароль должен состоять минимум из 6 символов');
                    return;
                }
                if (error.code === ErrorCodes.AlreadyExist) {
                    this.clearErrorMessage();
                    this.logInUser(email, password);
                    return;
                }
                this.showErrorMessage('Неизвестная ошибка');
            });
    };

    logInUser = async (email: string, password: string): Promise<void> => {
        await signInWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                this.clearErrorMessage();
                localStorage.setItem('isLogIn', 'true');
                localStorage.setItem('userID', userCredential.user.uid);

                window.location.href = '#/profile';
            })
            .catch((error) => {
                if (error.code === ErrorCodes.WrongPassword) {
                    this.showErrorMessage('Неправильный пароль');
                }
            });
    };

    signOut = async (): Promise<void> => {
        await signOut(this.auth)
            .then(() => {
                console.log('user sign out successful');
                // Sign-out successful.;
                localStorage.setItem('isLogIn', 'false');
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    updateUser = async (name: string, url:string): Promise<void> => {
        if (this.auth.currentUser) {
            await updateProfile(this.auth.currentUser, {
                displayName: name || this.auth.currentUser.displayName,
                photoURL: url || this.auth.currentUser.photoURL,
            })
                .then(() => {
                    // Profile updated!
                    console.log('User has deleted');
                })
                .catch((error) => {
                    console.log(error.message);
                    // An error occurred
                });
        }
    };

    deleteUser = async (): Promise<void> => {
        const user = this.auth.currentUser;

        if (user) {
            await deleteUser(user)
                .then(() => {
                    // User deleted.
                    localStorage.setItem('isLogIn', 'false');
                })
                .catch((error) => {
                    console.log(error.message);
                    // An error ocurred
                });
        }
    };

    isUserAuth = async () => {
        await onAuthStateChanged(this.auth, (user) => {
            if (user) {
                return true;
            }
            return false;
        });
        return localStorage.getItem('isLogIn') === 'true';
    };

    showErrorMessage(message: string): void {
        if (this.errorContainer) {
            this.errorContainer.textContent = message;
            this.errorContainer.classList.add('error-message--active');
        }
    }

    clearErrorMessage(): void {
        if (this.errorContainer) {
            this.errorContainer.textContent = '';
            this.errorContainer.classList.remove('error-message--active');
        }
    }
}
