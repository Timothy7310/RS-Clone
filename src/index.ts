import './index.html';
import './scss/main.scss';
import './firebase';

import FirebaseAuthUser from './components/firebaseAuthUser';

const authUser = new FirebaseAuthUser();

// await authUser.registerUser('2abcde@gmail.com', 'qwerty1');
await authUser.logInUser('2abcde@gmail.com', 'qwerty1');
// await authUser.signOut();
// await authUser.isUserAuth();
// await authUser.deleteUser();

// For example
// import Controller from './components/controller/controller';

// const controller = new Controller();

// const movie = await controller.searchMovie('326', 'id');

// console.log(movie);
