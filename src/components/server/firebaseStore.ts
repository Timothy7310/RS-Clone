/* eslint-disable object-curly-newline */
/* eslint-disable class-methods-use-this */
import { addDoc, collection, doc, setDoc, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../../firebase';
import FirebaseAuthUser from './firebaseAuthUser';
import userBlank from './state';
import { UserType } from '../types/types';

class FirebaseStore {
    firebaseAuthUser;

    constructor() {
        this.firebaseAuthUser = new FirebaseAuthUser();
    }

    // eslint-disable-next-line class-methods-use-this
    addNewUser = async (email: string, password: string) => {
        await this.firebaseAuthUser.registerUser(email, password);
        const id = localStorage.getItem('userID') as string;
        // const res = await createUserWithEmailAndPassword(this.auth, email, password);
        userBlank.email = email;
        userBlank.password = password;
        userBlank.id = id;
        await setDoc(doc(db, 'users', id), userBlank);
    };

    getUsers = async () => {
        const list: DocumentData[] = [];
        // try {
        //     const querySnapshot = await getDocs(collection(db, 'users'));
        //     querySnapshot.forEach((item) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         list.push(item.data());
        //     });
        //     return list;
        // } catch (err) {
        //     console.log(err);
        // }
        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.forEach((item) => {
            // doc.data() is never undefined for query doc snapshots
            list.push(item.data());
        });
        console.log(list);
        return list;
    };

    updateUserInfo = async (field: string, value: string | number) => {
        userBlank[field as keyof UserType] = value;
        const id = localStorage.getItem('userID') as string;
        await setDoc(doc(db, 'users', id), userBlank);
    };
}

export default FirebaseStore;
