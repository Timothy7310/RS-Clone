type FeesType = 'BUDGET' | 'MARKETING' | 'RUS' | 'USA' | 'WORLD';

type Countries = {
    country: string;
};

type Genres = {
    genre: string;
};

type Premieres = {
    countries: Countries[],
    duration: number,
    genres: Genres[],
    kinopoiskId: number,
    nameEn?: string,
    nameRu?: string,
    posterUrl: string,
    posterUrlPreview: string,
    premiereRu: string,
    year: number,
};

type BoxOffice = {
    type: FeesType,
    amount: number,
    currencyCode: string,
    name: string,
    symbol: string
};
// TODO: разбить на несколько типов
type MovieType = {
    kinopoiskId: number;
    id: number,
    externalId: {
        tmdb: 278,
        imdb: string
    },
    type: string,
    name: string,
    description: string,
    slogan: string,
    year: number,
    poster: {
        url: string,
        previewUrl: string
    },
    backdrop: {
        url: string,
        previewUrl: string
    },
    rating: {
        tmdb: number,
        kp: number,
        imdb: number
    },
    votes: {
        tmdb: number,
        kp: number,
        imdb: number
    },
    videos: {
        trailers: [
            {
                _id: string,
                url: string,
                name: string,
                site: string,
                size: number,
                type: string
            },
        ],
        teasers: []
    },
    budget: {
        value: number,
        currency: string
    },
    fees: {
        world: {
            value: number,
            currency: string
        },
        russia: {
            value: number,
            currency: string
        },
        usa: {
            value: number,
            currency: string
        }
    },
    distributors: {
        distributor: string,
        distributorRelease: string
    },
    premiere: {
        country: string,
        world: string,
        russia: string,
        bluray: string,
        dvd: string
    },
    images: {
        postersCount: number,
        backdropsCount: number,
        framesCount: number
    },
    status: string,
    movieLength: number,
    productionCompanies: [
        {
            name: string,
            url: string,
            previewUrl: string
        },
    ],
    spokenLanguages: [
        {
            name: string,
            nameEn: string
        },
    ],
    facts: [
        {
            value: string
        },
    ],
    genres: [
        {
            name: string
        },
    ],
    countries: [
        {
            name: string
        },
    ],
    seasonsInfo: [],
    persons: [
        {
            id: number,
            name: string,
            enName: string,
            photo: string,
            enProfession: string
        },
    ],
    lists: []
};

type WatchedType = {
    total: number,
    items:
    {
        date: string,
        filmID: string,
        score: null | number,
    }[],
};

type ReviewsType = {
    total: number,
    items: {
        date: string,
        filmID: string,
        score?: null | number,
        type: string,
        text: string,
        title: string,
    }[],
};

type WillWatchType = {
    total: number,
    items: {
        date: string,
        filmID: string,
    }[],
};

type UserType = {
    avatar: string,
    country: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    nickname: string,
    id: string,
    city: string,
    reviews: ReviewsType,
    watched: WatchedType,
    willWatch: WillWatchType,
};

export {
    Countries,
    Genres,
    Premieres,
    BoxOffice,
    FeesType,
    MovieType,
    UserType,
    WatchedType,
    ReviewsType,
    WillWatchType,
};
