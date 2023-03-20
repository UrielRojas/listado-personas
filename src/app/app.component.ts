import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Person } from './person.model';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'List of person';
  persons: Person[] = [];

constructor(
  private loggingService: LoggingService, 
  private personsservice: PersonsService){}

  ngOnInit(): void {
    this.persons = this.personsservice.persons;
  }


 
}
