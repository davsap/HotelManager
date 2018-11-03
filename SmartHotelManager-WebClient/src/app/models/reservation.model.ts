import {Provider} from './provider.model';
import {Hotel} from './hotel.model';


export class Reservation {
  id: number;
  clientName: string;
  clientEamil: string;
  date: string;
  beginDate: string;
  endDate: string;
  guests: number;
  provider?: Provider;
  hotel?: Hotel;

  constructor(id: number, clientName: string, clientEamil: string, date: string,
              beginDate: string, endDate: string, guests: number, provider?: Provider, hotel?: Hotel) {
    this.id = id;
    this.clientName = clientName;
    this.clientEamil = clientEamil;
    this.date = date;
    this.beginDate = beginDate;
    this.endDate = endDate;
    this.guests = guests;
    this.provider = provider;
    this.hotel = hotel;
  }
}

