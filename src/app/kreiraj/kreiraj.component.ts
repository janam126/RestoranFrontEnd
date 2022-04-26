import { Component, OnInit } from '@angular/core';
import { Izvestaj } from '../model/Izvestaj/izvestaj';
import { Restoran } from '../model/restoran/restoran';
import { Stavka } from '../model/stavka/stavka';
import { Zaposleni } from '../model/zaposleni/zaposleni';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kreiraj',
  templateUrl: './kreiraj.component.html',
  styleUrls: ['./kreiraj.component.scss']
})
export class KreirajComponent implements OnInit {

  izvestaj : Izvestaj = {
      rbIzvestaja: 0,
      datumOD: new Date(),
      datumDO: new Date(),
      status: "",
      ukupanBrojDorucaka: 0,

      restoran:  {restoranID: 0, nazivRestorana: ""},
      restoranID:0,
      zaposleni: {zaposleniID: 0, ime: "", prezime: ""},
    zaposleniID:0,
      stavkeIzvestaja: []
    };

    noviIzvestaj : Izvestaj = {
      rbIzvestaja: 0,
      datumOD: new Date(),
      datumDO: new Date(),
      status: "",
      ukupanBrojDorucaka: 0,

      restoran:  {restoranID: 0, nazivRestorana: ""},
      restoranID:0,
      zaposleni: {zaposleniID: 0, ime: "", prezime: ""},
    zaposleniID:0,
      stavkeIzvestaja: []
    };


    rbIzvestaja: number = 0;
    datumOD: Date = new Date();
    datumDO: Date = new Date();
    status: string = "";
    ukupanBrojDorucaka: number = 0;

    restorani: Restoran[] = [];
    restoran: Restoran = {restoranID: 0, nazivRestorana: ""};

    zaposleni: Zaposleni[] = [];
    zaposlen: Zaposleni = {zaposleniID: 0, ime: "", prezime: ""};

    stavkeIzvestaja: Stavka[] = new Array();
    stavkaIzvestaja: Stavka = {
      rbStavke: 0, 
      rbIzvestaj: 0,
      dan: "",
      datum: new Date(),
      brojDorucaka: 0
    };

    datum: Date;
    dan: string;
    brojDorucaka:number;


     rbStavke : number;


  constructor(private service: ApiServiceService, private router: Router) {

    this.service.vratiPoslednjiIzvestaj().subscribe((response) => {
      this.rbIzvestaja = response+1
      ;
      console.log(this.rbIzvestaja)
    },
      (error) => {
        console.log("neuspesno");
      }
    );

    this.service.vratiRestorane().subscribe((response) => {
      this.restorani = response;
      console.log(this.restorani)
    },
      (error) => {
        console.log("neuspesno");
      }
    );

    this.service.vratiZaposlene().subscribe((response) => {
      this.zaposleni = response;
      console.log(this.zaposleni)
    },
      (error) => {
        console.log("neuspesno");
      }
    );
  }

  ngOnInit(): void {

  }


  postaviStatus(){
    this.status = "U pripremi";
  }
  brd?:number =0;

obrisiStavku(rbStavke : number){
 this.brd =  this.stavkeIzvestaja.find(x => x.rbStavke === rbStavke)?.brojDorucaka;
 if(this.brd != undefined)
this.ukupanBrojDorucaka -= this.brd;


  this.stavkeIzvestaja =  this.stavkeIzvestaja.filter(function(item) {
    console.log(item.rbStavke, rbStavke)
    return item.rbStavke != rbStavke;
});
}



sacuvajIzvestaj() {

    this.noviIzvestaj.rbIzvestaja = this.rbIzvestaja;
    this.noviIzvestaj.datumOD = this.datumOD;
    this.noviIzvestaj.datumDO = this.datumDO;
    this.noviIzvestaj.status = this.status;
    this.noviIzvestaj.ukupanBrojDorucaka = this.ukupanBrojDorucaka;
    this.noviIzvestaj.restoran = this.restoran;
    this.noviIzvestaj.zaposleni = this.zaposlen;
    this.noviIzvestaj.stavkeIzvestaja = this.stavkeIzvestaja;
    console.log(this.noviIzvestaj);
    this.service.napraviIzvestaj(this.noviIzvestaj).subscribe((response) => {
      console.log("uspesno")
      this.router.navigate(([`/izvestaji`]))
    },
      (error) => {
        console.log("neuspesno");
      });
 }

a:boolean=true;

 

   dodajStavku() {

    let s: Stavka = {
      rbStavke: 0, 
      rbIzvestaj: 0,
      dan: "",
      datum: new Date(),
      brojDorucaka: 0
    };
    s.rbIzvestaj = this.rbIzvestaja;
    s.rbStavke = this.rbStavke;
    s.dan = this.dan;
    s.datum = this.datum;
    s.brojDorucaka = this.brojDorucaka;

    console.log ( s.rbIzvestaj ,
      s.rbStavke ,
      s.dan ,
      s.datum ,
      s.brojDorucaka )


    this.stavkeIzvestaja.push(s);

    this.ukupanBrojDorucaka += s.brojDorucaka;
    console.log(this.stavkeIzvestaja);
  }


  odustani(){
    console.log("s");
    location.reload();
  }

  onOptionsSelected($event: Event){
    this.status = "potpisan";
  }

 }
