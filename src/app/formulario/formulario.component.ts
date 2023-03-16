import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personBuild = new EventEmitter<Person>();
  //nameInput: string = '';
  //Last_nameInput: string = '';

  addPerson(nameInput: HTMLInputElement, Last_nameInput: HTMLInputElement){
    let person1 = new Person(nameInput.value,Last_nameInput.value);
    //this.persons.push(person1); //this way show data in the same component
    this.personBuild.emit(person1); //thso way show data in the father component
  }

}
