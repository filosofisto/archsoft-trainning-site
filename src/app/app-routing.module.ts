import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProgramaComponent} from './programa/programa.component';
import {AulasComponent} from './aulas/aulas.component';
import {ListasComponent} from './listas/listas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'programa', component: ProgramaComponent},
  {path: 'aulas', component: AulasComponent},
  {path: 'listas', component: ListasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
