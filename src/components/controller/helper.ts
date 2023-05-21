/* eslint-disable class-methods-use-this */
import { TPersons } from '../templates/movie/typesMovie';

export default class Helper {
    getPersons(persons: TPersons[], profession: string, numberPersons: number): string[] {
        const personAll = persons.filter(
            (person: TPersons) => person.enProfession === profession,
        );
        const personArr = personAll.slice(0, numberPersons);
        return personArr.map((person: TPersons) => person.name);
    }

    getCountPersons(persons: TPersons[], profession: string) {
        return persons.filter((person: TPersons) => person.enProfession === profession);
    }
}
