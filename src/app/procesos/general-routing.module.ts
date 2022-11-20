import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GeneralComponent
      },
      {
        path: 'persona',
        component: PersonasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
