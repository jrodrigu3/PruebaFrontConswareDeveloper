import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonasComponent } from './personas/personas.component';


@NgModule({
  declarations: [
    GeneralComponent,
    PersonasComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class GeneralModule { }
