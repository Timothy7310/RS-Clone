import Helper from '../../controller/helper';
import mainActors from './mainActorLine';
import tableLine from './tableLine';
import { TMovie, TPersons } from './typesMovie';

export const enum TableTitle {
    year = 'Год производства',
    countries = 'Страна',
    genres = 'Жанр',
    slogan = 'Слоган',
    director = 'Режиссер',
    writer = 'Сценарий',
    producer = 'Продюсер',
    operator = 'Оператор',
    composer = 'Композитор',
    designer = 'Художник',
    editor = 'Монтаж',
    budget = 'Бюджет',
    feesUSA = 'Сборы в США',
    feesWorld = 'Сборы в мире',
    premiere = 'Премьера в мире',
    ageRating = 'Рейтинг МРАА',
    movieLength = 'Время',
}
export default class GenerateTables {
    helper: Helper;

    constructor() {
        this.helper = new Helper();
    }

    // eslint-disable-next-line class-methods-use-this
    getMovieTable(movie: TMovie) {
        const tableData = {
            [TableTitle.year]: movie.year,
            [TableTitle.countries]: movie.countries.map((x: { name: string; }) => x.name).join(', '),
            [TableTitle.genres]: movie.genres.map((x: { name: string; }) => x.name).join(', '),
            [TableTitle.slogan]: movie.slogan,
            [TableTitle.director]: this.getDirector(movie.persons),
            [TableTitle.writer]: this.getWriters(movie.persons),
            [TableTitle.producer]: this.getProducer(movie.persons),
            [TableTitle.operator]: this.getOperator(movie.persons),
            [TableTitle.composer]: this.getComposer(movie.persons),
            [TableTitle.designer]: this.getDesigner(movie.persons),
            [TableTitle.editor]: this.getEditor(movie.persons),
            [TableTitle.budget]: `${movie.budget.currency} ${movie.budget.value}`,
            [TableTitle.feesUSA]: `${movie.fees.usa.currency} ${movie.fees.usa.value}`,
            [TableTitle.feesWorld]: `${movie.fees.world.currency} ${movie.fees.world.value}`,
            [TableTitle.premiere]: new Date(movie.premiere.world).toLocaleDateString(),
            [TableTitle.ageRating]: movie.ratingMpaa.toUpperCase(),
            [TableTitle.movieLength]: `${movie.movieLength} мин`,
        };
        const result = Object.entries(tableData).map(([title, value]) => tableLine(title, value ?? ''));
        return result.join('');
    }

    getActors(persons: TPersons[]): string {
        const actors = this.helper.getPersons(persons, 'actor', 10);
        const result = (actors).map((actor: string) => mainActors(actor));
        return result.join('');
    }

    getCountActors(persons: TPersons[]): number {
        const actors = this.helper.getCountPersons(persons, 'actor');
        const count = actors.length;
        return count;
    }

    getVoiceActors(persons: TPersons[]): string {
        const voiceActors = this.helper.getPersons(persons, 'voice_actor', 5);
        const result = (voiceActors).map((actor: string) => mainActors(actor));
        return result.join('');
    }

    getCountVoiceActors(persons: TPersons[]): number {
        const actors = this.helper.getCountPersons(persons, 'voice_actor');
        const count = actors.length;
        return count;
    }

    getDirector(persons: TPersons[]): string {
        const director = this.helper.getPersons(persons, 'director', 3);
        return director.join('');
    }

    getWriters(persons: TPersons[]): string {
        const writers = this.helper.getPersons(persons, 'writer', 3);
        return writers.join(', ');
    }

    getProducer(persons: TPersons[]): string {
        const producer = this.helper.getPersons(persons, 'producer', 3);
        return producer.join(', ');
    }

    getOperator(persons: TPersons[]): string {
        const operator = this.helper.getPersons(persons, 'operator', 3);
        return operator.join(', ');
    }

    getComposer(persons: TPersons[]): string {
        const composer = this.helper.getPersons(persons, 'composer', 3);
        return composer.join(', ');
    }

    getDesigner(persons: TPersons[]): string {
        const designer = this.helper.getPersons(persons, 'designer', 3);
        return designer.join(', ');
    }

    getEditor(persons: TPersons[]): string {
        const editor = this.helper.getPersons(persons, 'editor', 3);
        return editor.join(', ');
    }
}
