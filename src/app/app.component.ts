import { Component } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of person';
  persons: Person[] = [
  new Person('Uriel', 'Rojas'), 
  new Person('Abdiel', 'Rojas'), 
  new Person('Yeudiel', 'Rojas')
];

constructor(private loggingService: LoggingService){}

personAdded(person:Person){
  this.loggingService.SendMessageToConsole("New Person added "+person.name);
  this.persons.push(person);
}
 
}
