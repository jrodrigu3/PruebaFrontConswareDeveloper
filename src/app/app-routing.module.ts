import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina3Component } from './paginas/pagina3/pagina3.component';

const routes: Routes = [

  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina3', component: Pagina3Component },
  {path:'',redirectTo:'/pagina1',pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
