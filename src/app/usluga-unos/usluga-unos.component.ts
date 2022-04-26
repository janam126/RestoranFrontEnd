import { Component, OnInit } from '@angular/core';
import { JedinicaMere } from '../model/jedinicaMere/jedinica-mere';
import { Usluga } from '../model/usluga/usluga'; 
import { ApiServiceService } from '../services/api-service.service'; 
import {Router} from '@angular/router';

@Component({
  selector: 'app-usluga-unos',
  templateUrl: './usluga-unos.component.html',
  styleUrls: ['./usluga-unos.component.scss']
})
export class UslugaUnosComponent implements OnInit {

  uslugaID: number = 0; 
  nazivUsluge: string = ""; 
  opisUsluge: string = "";
  jediniceMere: JedinicaMere[] = [];

  jedinicaMere: JedinicaMere = {  sifraJM: 0, nazivJM: ""};

  novaUsluga: Usluga = {
    uslugaID: 0, 
    nazivUsluge: "", 
    opisUsluge: "",
    jedinicaMere: { sifraJM: 0, nazivJM: ""},
    sifraJM: 0
  };

  usluga: Usluga;

  constructor(private service: ApiServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.vratiJediniceMere().subscribe((response) => {
      this.jediniceMere = response;
      console.log(this.jediniceMere)
    },
      (error) => {
        console.log("neuspesno");
      }
    );

    this.service.vratiPoslednjuUslugu().subscribe((response) => {
      this.uslugaID  = response;
      console.log(this.uslugaID);
      if (this.usluga.uslugaID == 0) {
        this.uslugaID = 1;
      } else {
        this.uslugaID = this.usluga.uslugaID + 1;
      }
      console.log(this.uslugaID)
    },
      (error) => {
        console.log("neuspesno");
      }
    );
  }

  unesi() {
    this.novaUsluga.nazivUsluge = this.nazivUsluge;
    this.novaUsluga.opisUsluge = this.opisUsluge;
    this.novaUsluga.jedinicaMere.sifraJM = this.jedinicaMere.sifraJM;
    console.log(this.novaUsluga);

    this.service.napraviUslugu(this.novaUsluga).subscribe((response) => {
      console.log("uspesno");
      this.router.navigate(([`/usluge`]))
    },
      (error) => {
        console.log("neuspesno");
      });
      
  }

  odustani() {
    location.reload();
  }

}
