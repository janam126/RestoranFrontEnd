import { Component, OnInit } from '@angular/core';
import { Izvestaj } from '../model/Izvestaj/izvestaj';
import { Restoran } from '../model/restoran/restoran';
import { Stavka } from '../model/stavka/stavka';
import { Zaposleni } from '../model/zaposleni/zaposleni';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-izmena-izvestaj',
  templateUrl: './izmena-izvestaj.component.html',
  styleUrls: ['./izmena-izvestaj.component.scss']
})
export class IzmenaIzvestajComponent implements OnInit {

  izvestaj: Izvestaj = {
    rbIzvestaja: 0,
    datumOD: new Date(),
    datumDO: new Date(),
    status: "",
    ukupanBrojDorucaka: 0,

    restoran: { restoranID: 0, nazivRestorana: "" },
    restoranID: 0,
    zaposleni: { zaposleniID: 0, ime: "", prezime: "" },
    zaposleniID: 0,
    stavkeIzvestaja: []
  };

  noviIzvestaj: Izvestaj = {
    rbIzvestaja: 0,
    datumOD: new Date(),
    datumDO: new Date(),
    status: "",
    ukupanBrojDorucaka: 0,

    restoran: { restoranID: 0, nazivRestorana: "" },
    restoranID: 0,
    zaposleni: { zaposleniID: 0, ime: "", prezime: "" },
    zaposleniID: 0,
    stavkeIzvestaja: []
  };


  rbIzvestaja: number = 0;
  // datumOD: Date | null = new Date();
  datumOD:string | null
  // datumDO:  Date | null = new Date();
  datumDO : string | null
  status: string = "";
  ukupanBrojDorucaka: number = 0;

  restorani: Restoran[] = [];
  restoran: Restoran = { restoranID: 0, nazivRestorana: "" };

  zaposleni: Zaposleni[] = [];
  zaposlen: Zaposleni = { zaposleniID: 0, ime: "", prezime: "" };

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
  brojDorucaka: number;


  rbStavke: number;


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.vratiIzvestaj(Number(id)).subscribe((response) => {
      this.izvestaj = response;
      this.stavkeIzvestaja = this.izvestaj.stavkeIzvestaja;
      this.rbIzvestaja = this.izvestaj.rbIzvestaja;
      this.restoran = this.izvestaj.restoran;
      this.datumOD = this.datePipe.transform(this.izvestaj.datumOD, 'yyyy-MM-dd'); 
      this.datumDO = this.datePipe.transform(this.izvestaj.datumDO,'yyyy-MM-dd');
      this.status = "u pripremi";
      this.ukupanBrojDorucaka = this.izvestaj.ukupanBrojDorucaka;
      console.log("uspesno")
      this.izvestaj.stavkeIzvestaja.forEach((stavka)=>{
          stavka.datum = new Date(this.datePipe.transform(this.izvestaj.datumDO,'yyyy-MM-dd')+"");  
      })
      console.log(this.izvestaj);
    },
      (error) => {
        console.log("neuspesno");
      });
  }

  constructor(private service: ApiServiceService, private router: Router, private route:ActivatedRoute, private datePipe: DatePipe) {
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


  postaviStatus() {
    this.status = "U pripremi";
  }
  brd?: number = 0;

  izmeniStavku(brojDorucakaStavka: number) {
    if (brojDorucakaStavka != null)
      this.ukupanBrojDorucaka += brojDorucakaStavka;
  }

  obrisiStavku(rbStavke: number) {
    this.brd = this.stavkeIzvestaja.find(x => x.rbStavke === rbStavke)?.brojDorucaka;
    if (this.brd != undefined)
      this.ukupanBrojDorucaka -= this.brd;


    this.stavkeIzvestaja = this.stavkeIzvestaja.filter(function (item) {
      console.log(item.rbStavke, rbStavke)
      return item.rbStavke != rbStavke;
    });
  }



  sacuvajIzvestaj() {

    this.noviIzvestaj.rbIzvestaja = this.rbIzvestaja;
    this.noviIzvestaj.datumOD = new Date(''+this.datumOD);
    this.noviIzvestaj.datumDO =  new Date(''+this.datumDO);
    this.noviIzvestaj.status = this.status;
    this.noviIzvestaj.ukupanBrojDorucaka = this.ukupanBrojDorucaka;
    this.noviIzvestaj.restoran = this.restoran;
    this.noviIzvestaj.zaposleni = this.zaposlen;
    this.noviIzvestaj.stavkeIzvestaja = this.stavkeIzvestaja;
    console.log(this.noviIzvestaj);
    this.service.izmeniIzvestaj(this.noviIzvestaj).subscribe((response) => {
      console.log("uspesno")
      this.router.navigate(([`/izvestaji`]))
    },
      (error) => {
        console.log("neuspesno");
      });
  }

  a: boolean = true;

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

    console.log(s.rbIzvestaj,
      s.rbStavke,
      s.dan,
      s.datum,
      s.brojDorucaka)


    this.stavkeIzvestaja.push(s);

    this.ukupanBrojDorucaka += s.brojDorucaka;
    console.log(this.stavkeIzvestaja);
  }


  odustani() {
    console.log("s");
    location.reload();
  }

  onOptionsSelected($event: Event) {
    this.status = "potpisan";
  }

  pocetakBr: number;

  sacuvajPocetnuVrednost(brd: number) {
    this.pocetakBr = brd;
  }

  promeniBrojDorucaka(brd: number) {
    this.ukupanBrojDorucaka = this.ukupanBrojDorucaka - this.pocetakBr + brd;
  }
}
