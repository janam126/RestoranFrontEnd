import { Component, OnInit } from '@angular/core';
import { JedinicaMere } from '../model/jedinicaMere/jedinica-mere';
import { Usluga } from '../model/usluga/usluga';
import { ApiServiceService } from '../services/api-service.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-usluga-izmena',
  templateUrl: './usluga-izmena.component.html',
  styleUrls: ['./usluga-izmena.component.scss']
})
export class UslugaIzmenaComponent implements OnInit {

  uslugaID: number = 0; 
  nazivUsluge: string = ""; 
  opisUsluge: string = "";
  jediniceMere: JedinicaMere[] = [];

  jedinicaMere: JedinicaMere = {  sifraJM: 0, nazivJM: ""};

  Usluga = {
    uslugaID: 0, 
    nazivUsluge: "", 
    opisUsluge: "",
    jedinicaMere: { sifraJM: 0, nazivJM: ""},
    sifraJM: 0
  };

  usluga: Usluga;

  constructor(private service: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.vratiJediniceMere().subscribe((response) => {
      this.jediniceMere = response;
      console.log(this.jediniceMere)
    },
      (error) => {
        console.log("neuspesno");
      }
    );
  }

  pretrazi(){
 
    this.service.vratiUslugu(this.uslugaID).subscribe((response) => {
      if(response == null){
        this.nazivUsluge = "";
        this.opisUsluge = "";
        this.jedinicaMere.sifraJM = 0;
      }else{
        this.usluga = response;
        console.log(this.usluga)
        this.nazivUsluge = this.usluga.nazivUsluge;
        this.opisUsluge = this.usluga.opisUsluge;
        this.jedinicaMere = this.usluga.jedinicaMere;
        this.uslugaID =  this.usluga.uslugaID;
        console.log(this.jedinicaMere)
      }
    },
      (error) => {
        console.log("neuspesno");
      }
    );
  }

  izmeni(){
    this.usluga.uslugaID = this.uslugaID;
    this.usluga.nazivUsluge = this.nazivUsluge;
    this.usluga.opisUsluge = this.opisUsluge;
    this.usluga.jedinicaMere = this.jedinicaMere;

    this.service.izmeniUslugu(this.usluga).subscribe((response) => {
      console.log("uspesna izmena");
      this.router.navigate(([`/usluge`]));
    }, (error) => {
      console.log("neuspesno");
    });
  }
  obrisi(){
    this.usluga.uslugaID = this.uslugaID;

    this.service.obrisiUslugu(this.usluga.uslugaID).subscribe((response) => {
      console.log("uspesno brisanje");
      this.router.navigate(([`/usluge`]));
    }, (error) => {
      console.log("neuspesno");
    });
  }

  odustani() {
    location.reload();
  }


}
