import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    deleteUser,
} from 'firebase/auth';

export default class FirebaseAuthUser {
    auth;

    constructor() {
        this.auth = getAuth();
    }

    registerUser = async (email: string, password: string) => {
        const res = await createUserWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                const errorContainer = document.querySelector('.error-message') as HTMLElement;
                localStorage.setItem('userID', userCredential.user.uid);
                errorContainer.textContent = '';
                errorContainer.classList.remove('error-message--active');
                this.logInUser(email, password);
                // return userCredential;
            })
            .catch((error) => {
                const errorContainer = document.querySelector('.error-message') as HTMLElement;
                if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    errorContainer.textContent = 'Неправильный E-mail';
                    errorContainer.classList.add('error-message--active');
                }
                if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    errorContainer.textContent = 'Пароль должен состоять минимум из 6 символов';
                    errorContainer.classList.add('error-message--active');
                }
                if (error.message === 'FirebaseError: Firebase: Error (auth/email-already-in-use).') {
                    errorContainer.textContent = '';
                    errorContainer.classList.remove('error-message--active');
                    this.logInUser(email, password);
                }
            });
        return res;
    };

    logInUser = async (email: string, password: string): Promise<void> => {
        await signInWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                const errorContainer = document.querySelector('.error-message') as HTMLElement;
                errorContainer.textContent = '';
                errorContainer.classList.remove('error-message--active');
                console.log(userCredential);
                localStorage.setItem('isLogIn', 'true');
                window.location.href = '#/profile';
            })
            .catch((error) => {
                const errorContainer = document.querySelector('.error-message') as HTMLElement;
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    errorContainer.textContent = 'Неправильный пароль';
                    errorContainer.classList.add('error-message--active');
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
                    // ...
                    console.log('User has deleted');
                })
                .catch((error) => {
                    console.log(error.message);
                    // An error occurred
                    // ...
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
                    // ...
                });
        }
    };

    isUserAuth = async () => {
        await onAuthStateChanged(this.auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                // console.log(this.auth.currentUser);
                // ...
                return true;
            }
            // User is signed out
            // ...
            return false;
        });
        return localStorage.getItem('isLogIn') === 'true';
    };
}
