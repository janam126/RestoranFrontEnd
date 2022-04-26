import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UslugeComponent } from './usluge/usluge.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { IzvestajComponent } from './izvestaj/izvestaj.component';
import { FormsModule } from '@angular/forms';
import { UslugaUnosComponent } from './usluga-unos/usluga-unos.component';
import { UslugaIzmenaComponent } from './usluga-izmena/usluga-izmena.component';
import { PrikazComponent } from './prikaz/prikaz.component';
import { KreirajComponent } from './kreiraj/kreiraj.component';
import { IzmenaIzvestajComponent } from './izmena-izvestaj/izmena-izvestaj.component';



@NgModule({
  declarations: [
    AppComponent,
    UslugeComponent,
    IzvestajComponent,
    UslugaUnosComponent,
    UslugaIzmenaComponent,
    PrikazComponent,
    KreirajComponent,
    IzmenaIzvestajComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
