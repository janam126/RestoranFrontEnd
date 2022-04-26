import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Izvestaj } from '../model/Izvestaj/izvestaj';
import { ApiServiceService } from '../services/api-service.service';
import { Restoran } from '../model/restoran/restoran';
import { Stavka } from '../model/stavka/stavka';
import { Zaposleni } from '../model/zaposleni/zaposleni';
import { DatePipe} from '@angular/common';


@Component({
  selector: 'app-prikaz',
  templateUrl: './prikaz.component.html',
  styleUrls: ['./prikaz.component.scss']
})
export class PrikazComponent implements OnInit {

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

  // izvestaj: Izvestaj

  constructor(private service: ApiServiceService, private router: ActivatedRoute, private route:ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // console.log(Number(id));
    // this.apiservice.vratiIzvestaj(Number(id)).subscribe((response) => {
    //         this.izvestaj = response;
    //         console.log(this.izvestaj)
    //         console.log(this.izvestaj.rbIzvestaja)
    //       },
    //       (error) => {
    //         console.log("neuspesno");
    //       }
    //     );

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

      console.log(this.izvestaj);
    },
      (error) => {
        console.log("neuspesno");
      });
  }


}
