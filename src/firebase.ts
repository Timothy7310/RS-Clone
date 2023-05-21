import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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
export const db = getFirestore(app);
export const storage = getStorage(app);
