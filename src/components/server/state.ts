import { UserType } from '../types/types';

const userBlank: UserType = {
    avatar: 'https://vjoy.cc/wp-content/uploads/2020/11/1-35.jpg',
    country: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nickname: '',
    city: '',
    id: localStorage.getItem('userID') || '',
    reviews: {
        total: 0,
        items: [],
    },
    watched: {
        total: 0,
        items: [],
    },
    willWatch: {
        total: 0,
        items: [],
    },
};

export default userBlank;
