import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('Last_nameInput') Last_nameInput: ElementRef;

  addPerson(){
    let person1 = new Person(this.nameInput.nativeElement.value, this.Last_nameInput.nativeElement.value);
    //this.persons.push(person1); //this way show data in the same component
    this.personBuild.emit(person1); //thso way show data in the father component
  }

}
