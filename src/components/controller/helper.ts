import { TPersons } from '../templates/movie/typesMovie';

export default class Helper {
    // eslint-disable-next-line class-methods-use-this
    getPersons(persons: TPersons[], profession: string, numberPersons: number): string[] {
        const personAll = persons.filter(
            (person: TPersons) => person.enProfession === profession,
        );
        const personArr = personAll.slice(0, numberPersons);
        return personArr.map((person: TPersons) => person.name);
    }

    // eslint-disable-next-line class-methods-use-this
    getCountPersons(persons: TPersons[], profession: string) {
        return persons.filter((person: TPersons) => person.enProfession === profession);
    }
}
