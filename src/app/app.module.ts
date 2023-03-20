import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonsService } from './persons.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService, PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
