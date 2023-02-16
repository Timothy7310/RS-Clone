import {
    collection,
    doc,
    setDoc,
    getDocs,
    DocumentData,
    deleteDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import FirebaseAuthUser from './firebaseAuthUser';
import userBlank from './state';
import { UserType } from '../types/types';

class FirebaseStore {
    firebaseAuthUser;

    constructor() {
        this.firebaseAuthUser = new FirebaseAuthUser();
    }

    createUser = async (email: string, password: string) => {
        await this.firebaseAuthUser.registerUser(email, password);
        const id = localStorage.getItem('userID') as string;
        userBlank.email = email;
        userBlank.password = password;
        userBlank.id = id;
        await setDoc(doc(db, 'users', id), userBlank);
    };

    // eslint-disable-next-line class-methods-use-this
    readUsers = async () => {
        const list: DocumentData[] = [];
        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.forEach((item) => {
            list.push(item.data());
        });
        return list;
    };

    // eslint-disable-next-line class-methods-use-this
    updateUserInfo = async <T extends keyof UserType>(field: T, value: UserType[T]) => {
        userBlank[field] = value;
        const id = localStorage.getItem('userID') as string;
        await setDoc(doc(db, 'users', id), userBlank);
    };

    // eslint-disable-next-line class-methods-use-this
    deleteUser = async () => {
        const id = localStorage.getItem('userID') as string;
        await deleteDoc(doc(db, 'users', id));
        localStorage.removeItem('userID');
    };
}

export default FirebaseStore;
