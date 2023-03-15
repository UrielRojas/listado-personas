import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personBuild = new EventEmitter<Person>();
  nameInput: string = '';
  Last_nameInput: string = '';

  addPerson(){
    let person1 = new Person(this.nameInput, this.Last_nameInput);
    //this.persons.push(person1); //this way show data in the same component
    this.personBuild.emit(person1); //thso way show data in the father component
  }

}
