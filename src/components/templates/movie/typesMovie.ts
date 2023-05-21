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
    },
    usa: {
        currency: string,
        value: number,
    },
};

export type TPersons = {
    enName: string,
    enProfession: string,
    id: number,
    name: string,
    photo: string,
    profession: string,
};

export type TRating = {
    await: number,
    filmCritics: number,
    imdb: number,
    kp: number,
    russianFilmCritics: number,
};

export type TVotes = {
    await: number,
    filmCritics: number,
    imdb: number,
    kp: number,
    russianFilmCritics: number,
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
    type: string,
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

export type TNames = {
    name: string,
};

export type TPremiere = {
    country: string,
    world: string,
    russia: string,
    cinema: string,
    dvd: string,
};

export type TProduction = {
    name: string,
    previewUrl: string,
    url: string,
};

export type TSimilarMovies = {
    alternativeName: string,
    enName: string,
    id: number,
    name: string,
    poster: { url: string, previewUrl: string },
    type: string,
};

export type TSpokenLang = {
    name: string,
    nameEn: string,
};

export type TWashability = {
    logo: { url: string },
    name: string,
    url: string,
};

export type TMovie = {
    ageRating: number,
    alternativeName: string,
    backdrop: { url: string, previewUrl: string },
    budget: { value: number, currency: string },
    countries: TCountries,
    description: string,
    distributors: { distributor: string, distributorRelease: string },
    enName: null, // check it
    externalId: { kpHD: string, imdb: string, tmdb: number },
    facts: TFacts[];
    fees: TFees,
    genres: TGenres,
    id: number,
    images: { postersCount: number, backdropsCount: number, framesCount: number },
    imagesInfo: { framesCount: number },
    lists: [], // check it
    logo: { url: string },
    movieLength: number,
    name: string,
    names: TNames[],
    persons: TPersons[],
    poster: { url: string, previewUrl: string },
    premiere: TPremiere,
    productionCompanies: TProduction[],
    rating: TRating,
    ratingMpaa: string,
    seasonsInfo: [], // check it
    sequelsAndPrequels: TPrequels[], // check it снова пропали?
    shortDescription: string,
    similarMovies: TSimilarMovies[],
    slogan: string,
    spokenLanguages: TSpokenLang[],
    status: number, // check it
    technology: { hasImax: boolean, has3D: boolean },
    ticketsOnSale: boolean,
    top10: number, // check it
    top250: number, // check it
    type: string,
    typeNumber: number,
    updatedAt: string,
    videos: TVideos,
    votes: TVotes,
    watchability: { items: TWashability[] },
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

export type Top250FilmItem = {
    _id: string,
    id: number,
    type: string, // TODO: create enum
    name: string,
    top250: number
};

export type Top250PageData = {
    docs: Top250FilmItem[],
    total: number,
    limit: number,
    page: number,
    pages: number
};
