import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//     apiKey: 'AIzaSyDHzFLnMZibjwbw34-rI4SsD-4hKvkLgm4',
//     authDomain: 'rs-clone-18c8d.firebaseapp.com',
//     projectId: 'rs-clone-18c8d',
//     storageBucket: 'rs-clone-18c8d.appspot.com',
//     messagingSenderId: '182695844224',
//     appId: '1:182695844224:web:d3ea245ffc921f7d964965',
// };

const firebaseConfig = {

    apiKey: 'AIzaSyCaPzTFlJQIwVaOE57wqcH1jpHcY2gGFc8',

    authDomain: 'rs-kinopisk-32855.firebaseapp.com',

    projectId: 'rs-kinopisk-32855',

    storageBucket: 'rs-kinopisk-32855.appspot.com',

    messagingSenderId: '471497377875',

    appId: '1:471497377875:web:1129214cc1a05b549b5ea6',

    measurementId: 'G-58HETCK25V',
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line import/prefer-default-export
export const db = getFirestore(app);
export const storage = getStorage(app);
