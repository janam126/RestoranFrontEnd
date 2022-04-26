import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UslugeComponent } from './usluge/usluge.component';
import { IzvestajComponent } from './izvestaj/izvestaj.component';
import { UslugaUnosComponent } from './usluga-unos/usluga-unos.component';
import { UslugaIzmenaComponent } from './usluga-izmena/usluga-izmena.component';
import { PrikazComponent } from './prikaz/prikaz.component';
import { KreirajComponent } from './kreiraj/kreiraj.component';
import { IzmenaIzvestajComponent } from './izmena-izvestaj/izmena-izvestaj.component';

const routes: Routes = [
  {path: '', redirectTo: '/izvestaji', pathMatch: 'full'},
  {path: 'usluge', component:UslugeComponent},
  {path: 'izvestaji', component:IzvestajComponent},
  {path: 'usluga-unos', component:UslugaUnosComponent},
  {path: 'usluga-izmena', component:UslugaIzmenaComponent},
  {path: 'prikaz/:id', component:PrikazComponent},
  {path: 'kreiraj', component:KreirajComponent},
  {path: 'izmena/:id', component: IzmenaIzvestajComponent},
  {path: 'usluga/:id', component: UslugeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
