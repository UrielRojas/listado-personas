import { Person } from "./person.model";

export class PersonsService{

    persons: Person[] = [
        new Person('Uriel', 'Rojas'), 
        new Person('Abdiel', 'Rojas'), 
        new Person('Yeudiel', 'Rojas')];

    AddPerson(person:Person){
        this.persons.push(person);
    }
}