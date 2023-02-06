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

    registerUser = async (email: string, password: string): Promise<void> => {
        await createUserWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    logInUser = async (email: string, password: string): Promise<void> => {
        await signInWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    signOut = async (): Promise<void> => {
        await signOut(this.auth)
            .then(() => {
                console.log('user sign out successful');
                // Sign-out successful.
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
                })
                .catch((error) => {
                    console.log(error.message);
                    // An error ocurred
                    // ...
                });
        }
    };

    isUserAuth = async (): Promise<void> => {
        await onAuthStateChanged(this.auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                console.log(user);
                // console.log(this.auth.currentUser);
                // ...
            } else {
                // User is signed out
                // ...
                console.log('user log out');
            }
        });
    };
}
