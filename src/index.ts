import './index.html';
import './scss/main.scss';
import './firebase';
import App from './components/router/app';
import FirebaseAuthUser from './components/server/firebaseAuthUser';
import FirebaseStore from './components/server/firebaseStore';

const authUser = new FirebaseAuthUser();
const store = new FirebaseStore();

// await authUser.registerUser('2abcde@gmail.com', 'qwerty1');
// await authUser.logInUser('2abcde@gmail.com', 'qwerty1');
// await authUser.signOut();
// await authUser.isUserAuth();
// await authUser.deleteUser();

// eslint-disable-next-line no-new
// new App();

const password = document.querySelector('#password') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const submit = document.querySelector('#submit') as HTMLButtonElement;

submit.addEventListener('click', (e) => {
    e.preventDefault();
    store.addNewUser(email.value, password.value);
});
store.getUsers();
