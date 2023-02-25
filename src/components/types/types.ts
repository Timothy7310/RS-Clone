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

type TrailersType = {
    _id: string,
    url: string,
    name: string,
    site: string,
    size: number,
    type: string
};

type ProductionCompaniesType = {
    name: string,
    url: string,
    previewUrl: string
};

type SpokenLanguagesType = {
    name: string,
    nameEn: string
};

type FactsType = {
    value: string
};

type GenresType = {
    name: string
};

type CountriesType = {
    name: string
};

type PersonsType = {
    id: number,
    name: string,
    enName: string,
    photo: string,
    enProfession: string
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
        trailers: TrailersType[],
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
    productionCompanies: ProductionCompaniesType[],
    spokenLanguages: SpokenLanguagesType[],
    facts: FactsType[],
    genres: GenresType[],
    countries: CountriesType[],
    seasonsInfo: [],
    persons: PersonsType[],
    lists: []
};

type ImageType = {
    height: null | number,
    id: string,
    language: null,
    movieId: 426,
    previewUrl: string,
    type: string,
    url: string,
    width: null | number,
};

type ImagesType = {
    docs: ImageType[],
    limit: 10,
    page: 1,
    pages: 16,
    total: 155,
};

type MovieTestType = {
    docs: MovieType[],
    limit: number,
    page: number,
    pages: number,
    total: number,
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
    MovieTestType,
    ImagesType,
};
