export type TBasicColumn = {
    poster: string | undefined,
    trailer?: string | undefined,
    trailerDuration?: string | undefined,
    trailerLink?: string | undefined,
    trailerName?: string | undefined,
    trailerDate?: string | undefined,
};

export type TAboutTop = {
    movieName: string,
    alterMovieName: string,
    raiting: string,
    count: string,
    reviewsCount?: string,
};

export type TTableLine = {
    title: string,
    text: string,
};

export type TTtt = {
    poster?: string,
    trailer?: string,
    trailerDuration?: string,
    trailerLink?: string,
    trailerName?: string,
    trailerDate?: string,
    movieName?: string,
    alterMovieName?: string,
    raiting?: string,
    count?: string,
    reviewsCount?: string,
    title?: string,
    text?: string,
    year?: string,
    countries?: string,
    genres?: string,
    // countries?: string[],
    // genres?: string[],
    slogan?: string,
    budget?: string,
    feesUSA?: string,
    feesWorld?: string,
    premiere?: string,
    ageRating?: string,
    movieLength?: string,
};

export type TCountries = { name: string }[];

export type TGenres = { name: string }[];

export type TFees = {
    world: {
        currency: string,
        value: number,
        _id: string
    },
    usa: {
        currency: string,
        value: number,
        _id: string
    },
    _id: string,
};

export type TPersons = {
    enName: string,
    enProfession: string,
    id: number,
    name: string,
    photo: string,
};

export type TRating = {
    await: number,
    filmCritics: number,
    imdb: number,
    kp: number,
    russianFilmCritics: number,
    _id: string,
};

export type TVotes = {
    await: number,
    filmCritics: number,
    imdb: number,
    kp: number,
    russianFilmCritics: number,
    _id: string,
};

export type TPrequels = {
    alternativeName: string,
    enName: string,
    id: number,
    name: string,
    type: string,
    _id: string,
};

export type TTrailer = {
    _id: string,
    url: string,
    name: string,
    site: string,
};

export type TVideos = {
    _id: string,
    trailers: TTrailer[],
    teasers: [],
};

export type TFacts = {
    value: string,
    type: string,
    spoiler: boolean,
};

export type TMovie = {
    // ageRating: number,
    alternativeName: string,
    // backdrop: {url: string, previewUrl: string, _id: string},
    budget: { value: number, currency: string, _id: string },
    // collections: [],
    countries: TCountries,
    // createDate: string,
    description: string,
    // distributors: {distributor: string, distributorRelease: string},
    // enName: string,
    // externalId: {kpHD: string, imdb: string, _id: string}
    facts: TFacts[],
    fees: TFees,
    genres: TGenres,
    id: number,
    // images: {postersCount: number, backdropsCount: number, framesCount: number},
    // imagesInfo: {_id: string, framesCount: number},
    // lists: [],
    // logo: {_id: string, url: string},
    movieLength: number,
    name: string,
    // names: [{…}, {…}],
    persons: TPersons[],
    poster: { _id: string, url: string, previewUrl: string },
    premiere: { _id: string, country: string, world: string },
    // productionCompanies: [{…}, {…}, {…}, {…}],
    rating: TRating,
    ratingMpaa: string,
    // releaseYears: [],
    // seasonsInfo: [],
    sequelsAndPrequels: TPrequels[],
    // shortDescription: string,
    // similarMovies: [],
    slogan: string,
    // spokenLanguages: [{…}],
    // status: null,
    // technology: {_id: string, hasImax: false, has3D: false},
    // ticketsOnSale: false,
    // top10: null,
    // top250: null,
    // type: string,
    // typeNumber: number,
    // updateDates: [],
    // updatedAt: string,
    videos: TVideos,
    votes: TVotes,
    // watchability: {_id: '6339ab16c22d011bb5a840c1', items: null},
    year: number,
};

export type TReview = {
    author: string,
    authorId: number,
    createdAt: string,
    date: string,
    id: number,
    movieId: number,
    review: string,
    reviewDislikes: number,
    reviewLikes: number,
    title: string,
    type: string,
    updatedAt: string,
    userRating: number,
    __v: number
};

export type TReviews = {
    docs: TReview[],
    total: number,
    limit: number,
    page: number,
    pages: number,
};
