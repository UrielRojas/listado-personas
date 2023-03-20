import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Person } from '../person.model';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent  implements OnInit{

  //nameInput: string = '';
  //Last_nameInput: string = '';
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('Last_nameInput') Last_nameInput: ElementRef;


  constructor(
    private loggingService:LoggingService,
    private personasService: PersonsService){
      this.personasService.greeting.subscribe(
        (index: number) => alert("The index is: "+ index)
      );
    }

    ngOnInit(): void {
      
    }

  addPerson(){
    let person1 = new Person(this.nameInput.nativeElement.value, this.Last_nameInput.nativeElement.value);
    //this.persons.push(person1); //this way show data in the same component
    //this.loggingService.SendMessageToConsole("We send the person: "+person1.name+ " "+ person1.lName);
    //this.personBuild.emit(person1); //thso way show data in the father component
    this.personasService.AddPerson(person1);
  }


}
