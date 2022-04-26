import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usluga } from '../model/usluga/usluga';
import { Izvestaj } from '../model/izvestaj/izvestaj';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  
  constructor(private http:HttpClient) { }
  
  izmeniIzvestaj(noviIzvestaj: Izvestaj)  : Observable<any>{
  return this.http.put<any>('https://localhost:44395/api/Izvestaj/'+noviIzvestaj.rbIzvestaja,noviIzvestaj);
  }

  vratiUsluge() : Observable<any>{
  return this.http.get<any>('https://localhost:44395/api/Usluga');
  }

  vratiIzvestaje() : Observable<any>{
    return this.http.get<any>('https://localhost:44395/api/Izvestaj');
  }

  vratiJediniceMere() : Observable<any>{
    return this.http.get<any>('https://localhost:44395/api/JedinicaMere');
  }

  vratiPoslednjuUslugu() : Observable<any>{
    return this.http.get<any>('https://localhost:44395/api/Usluga/Last');
  }

  napraviUslugu(novaUsluga : Usluga) : Observable<any>{
    return this.http.post<any>('https://localhost:44395/api/Usluga', novaUsluga);
  }

  vratiUslugu(id : number) : Observable<any>{
    return this.http.get<any>('https://localhost:44395/api/Usluga/' + id);
  }

  izmeniUslugu(usluga : Usluga) : Observable<any>{
    return this.http.put<any>('https://localhost:44395/api/Usluga/' + usluga.uslugaID, usluga);
  }

  obrisiUslugu(id : number) : Observable<any>{
    return this.http.delete<any>('https://localhost:44395/api/Usluga/' + id);
  }

  obrisiIzvestaj(id: number) : Observable<any>{
    return this.http.delete<any>('https://localhost:44395/api/Izvestaj/'+ id);
  }

  vratiIzvestaj(id : number) : Observable<any>{
    return this.http.get<any>('https://localhost:44395/api/Izvestaj/' + id);
  }
  
  vratiPoslednjiIzvestaj() : Observable<any>{
    return this.http.get<any>('https://localhost:44395/api/Izvestaj/Last');
  }

  vratiRestorane() : Observable<any>{
    return this.http.get<any>('https://localhost:44395/api/Restoran/');
  }

   vratiZaposlene() : Observable<any>{
    return this.http.get<any>('https://localhost:44395/api/Zaposleni/');
  }

  napraviIzvestaj(noviIzvestaj : Izvestaj) : Observable<any>{
    return this.http.post<any>('https://localhost:44395/api/Izvestaj', noviIzvestaj);
  }

}
