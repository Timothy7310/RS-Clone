import {
    collection,
    doc,
    setDoc,
    getDocs,
    DocumentData,
    deleteDoc,
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase';
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
        this.firebaseAuthUser.logInUser(email, password);
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
    getCurrentUser = async () => {
        const id = localStorage.getItem('userID') as string;
        const users = await this.readUsers();
        const res = users.filter((x) => x.id === id);
        return res;
    };

    // eslint-disable-next-line class-methods-use-this
    // updateUserInfo = async <T extends keyof UserType>(field: T, value: UserType[T]) => {
    //     userBlank[field] = value;
    //     const id = localStorage.getItem('userID') as string;
    //     await setDoc(doc(db, 'users', id), userBlank);
    // };

    // eslint-disable-next-line class-methods-use-this
    updateUserInfo = async (userObj: UserType) => {
        const id = localStorage.getItem('userID') as string;
        await setDoc(doc(db, 'users', id), userObj);
    };

    // eslint-disable-next-line class-methods-use-this
    deleteUser = async () => {
        const id = localStorage.getItem('userID') as string;
        await deleteDoc(doc(db, 'users', id));
        localStorage.removeItem('userID');
    };

    // eslint-disable-next-line class-methods-use-this
    uploadFile = async (file: File) => {
        const storageRef = ref(storage, 'images/rivers.jpg');

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    localStorage.setItem('downloadURL', downloadURL);
                });
            },
        );
    };
}

export default FirebaseStore;
