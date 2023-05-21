/* eslint-disable class-methods-use-this */
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

    user: UserType | null;

    constructor() {
        this.firebaseAuthUser = new FirebaseAuthUser();
        this.user = null;
    }

    createUser = async (email: string, password: string) => {
        await this.firebaseAuthUser.registerUser(email, password);
        const id = localStorage.getItem('userID') ?? '';
        userBlank.email = email;
        userBlank.password = password;
        userBlank.id = id;
        try {
            await setDoc(doc(db, 'users', id), userBlank);
            this.firebaseAuthUser.logInUser(email, password);
        } catch (e) {
            console.log(e);
        }
    };

    readUsers = async () => {
        const list: DocumentData[] = [];
        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.forEach((item) => {
            list.push(item.data());
        });
        return list;
    };

    getCurrentUser = async (isForce = false) => {
        const id = localStorage.getItem('userID') as string;
        if (isForce || this.user?.id !== id) {
            const users = await this.readUsers();
            this.user = (users.filter((x) => x.id === id) ?? []).pop() as UserType;
        }
        return this.user;
    };

    updateUserInfo = async (userObj: UserType) => {
        const id = localStorage.getItem('userID') as string;
        this.user = userObj;
        await setDoc(doc(db, 'users', id), userObj);
    };

    deleteUser = async () => {
        const id = localStorage.getItem('userID') as string;
        await deleteDoc(doc(db, 'users', id));
        localStorage.removeItem('userID');
    };

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
