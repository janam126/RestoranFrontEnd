import { Restoran } from "../restoran/restoran";
import { Zaposleni } from "../zaposleni/zaposleni";
import { Stavka } from "../stavka/stavka";

export interface Izvestaj {
    rbIzvestaja: number,
    datumOD: Date,
    datumDO: Date,
    status: string,
    ukupanBrojDorucaka: number,
    restoran: Restoran,
    restoranID: number,
    zaposleni: Zaposleni,
    zaposleniID: number,
    stavkeIzvestaja: Stavka[]
}
