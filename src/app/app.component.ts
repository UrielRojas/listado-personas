import { Component } from '@angular/core';
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

personAdded(person:Person){
  this.persons.push(person);
}
 
}
