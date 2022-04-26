import { DatePipe } from '@angular/common';
import { Component, createNgModuleRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Izvestaj } from '../model/izvestaj/izvestaj';
import { ApiServiceService } from '../services/api-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-izvestaj',
  templateUrl: './izvestaj.component.html',
  styleUrls: ['./izvestaj.component.scss']
})
export class IzvestajComponent implements OnInit {
  izvestaji: any;
  temp: Izvestaj[] = [];
  datumOd: Date;
  datumDo: Date;

  constructor(private service: ApiServiceService, private datepipe:DatePipe, private router: Router) { }

  ngOnInit(): void {
    this.service.vratiIzvestaje().subscribe((response) => {
      this.izvestaji = response;
      this.sviIzvestaji = response;
      console.log(this.izvestaji);
    });
  }

  first: boolean = false;

  sviIzvestaji : Izvestaj[] = [];
  searchThis() {

    this.izvestaji = this.sviIzvestaji;

    this.izvestaji =  this.izvestaji.filter((item: Izvestaj) => {
      console.log("datumOd iz izvestaja", item.datumOD, "datumOd", this.datumOd, "datumDO iz izvestaja", item.datumDO, "datumOd", this.datumDo)
      return item.datumOD >= this.datumOd && item.datumDO<= this.datumDo;
  });


    console.log(this.izvestaji)
  }

  prikaziIzvestaj(rbIzvestaja: number) {
    console.log(rbIzvestaja);
    this.router.navigate(([`/prikaz/${rbIzvestaja}`]))
  }

  kreirajIzvestaj() {
    this.router.navigate(([`/kreiraj`]))
  }

  izmeniIzvestaj(rbIzvestaja: number) {
    console.log(rbIzvestaja);
    this.router.navigate(([`/izmena/${rbIzvestaja}`]))
  }

  obrisiIzvestaj(rbIzvestaja : number) {
    console.log(rbIzvestaja);
    this.service.obrisiIzvestaj(rbIzvestaja).subscribe((response) => {

      this.service.vratiIzvestaje().subscribe((response) => {
        this.izvestaji = response;
      });
    },
      (error) => {

        console.log("neuspesno");
      }
    );
  }

}