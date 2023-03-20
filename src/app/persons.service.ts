import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Person } from "./person.model";
@Injectable()

export class PersonsService{

    persons: Person[] = [
        new Person('Uriel', 'Rojas'), 
        new Person('Abdiel', 'Rojas'), 
        new Person('Yeudiel', 'Rojas')];


    constructor(private loggingservice: LoggingService){}

    AddPerson(person:Person){
        this.loggingservice.SendMessageToConsole("Persona added: "+person.name+" "+person.lName);
        this.persons.push(person);
    }
}