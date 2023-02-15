import { UserType } from '../types/types';

const userBlank: UserType = {
    avatar: 'https://vjoy.cc/wp-content/uploads/2020/11/1-35.jpg',
    country: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nickname: '',
    id: '',
    reviews: {
        total: 0,
        items: [{
            date: '',
            filmID: '',
            score: null,
            text: '',
            title: '',
        }],
    },
    watched: 0,
    willWatch: 0,
};

export default userBlank;
