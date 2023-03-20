import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{
  @Input() person: Person;
  @Input() index: number;

  constructor(private personasService: PersonsService) { }

  ngOnInit(): void {
    
  }
  emitGreeting() {
    this.personasService.greeting.emit(this.index);

  }

}
