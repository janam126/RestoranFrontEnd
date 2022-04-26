import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Usluga } from '../model/usluga/usluga';
import {ApiServiceService} from '../services/api-service.service';

@Component({
  selector: 'app-usluge',
  templateUrl: './usluge.component.html',
  styleUrls: ['./usluge.component.scss']
})
export class UslugeComponent implements OnInit {

  usluge: any;
  temp: Usluga[] = [];
  searchword: string;

  constructor(private service:ApiServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.vratiUsluge().subscribe((response) => {
      console.log(response);
      this.usluge = response;
      console.log(this.usluge);
    });
  }

  searchThis() {
    // if(!this.first){
    //   this.temp = this.zahtevi;
    //   this.first = true;
    // }else{
    //   this.zahtevi =  this.temp;
    // }
   
   
    //   this.zahtevi.forEach(element => {
    //     console.log(element.Datum.toLocaleString().substring(0, 10), this.searchword)
    //     if (element.Datum.toLocaleString().substring(0, 10) != this.searchword.toLocaleString().substring(0, 10)) {
    //       this.zahtevi = this.zahtevi.filter(item => item !== element);
    //     }
    //   });
    // this.searchword="";

  }

  prikaziUslugu(idZahteva: number) {
    console.log(idZahteva);
    this.router.navigate(([`/usluga/${idZahteva}`]))
  }

  izmeniUslugu() {
   this.router.navigate(([`/usluga-izmena`]))
  }

  obrisiZahtev(idZahteva: number) {
    console.log(idZahteva);
    this.service.obrisiUslugu(idZahteva).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
    });
  }

  kreirajUslugu(){
    this.router.navigate(([`/usluga-unos`]))
  }
}
