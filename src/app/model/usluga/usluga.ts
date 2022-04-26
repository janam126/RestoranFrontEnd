import { JedinicaMere } from "../jedinicaMere/jedinica-mere";

export interface Usluga {
    uslugaID: number,
    nazivUsluge: string,
    opisUsluge: string,
    jedinicaMere: JedinicaMere,
    sifraJM: number
}
