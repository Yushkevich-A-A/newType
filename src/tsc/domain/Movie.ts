import Buyable from './Buyable';

export default class Movie implements Buyable {

  readonly id: number;
  readonly name: string;
  readonly nameRu: string;
  readonly mode: string;
  readonly price: number;
  readonly year: number;
  readonly country: string;
  readonly slogan: string;
  readonly genre: Array<string>;
  readonly timeStamp: number;
  readonly amount: number;
  readonly countable: boolean;
  
  constructor( id: number, name: string, nameRu: string, mode: string, price: number, year: number, country: string, slogan: string, genre: Array<string>, timeStamp: number ) {
    this.id = id;
    this.name = name;
    this.nameRu = nameRu;
    this.mode = mode;
    this.price = price;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.timeStamp = timeStamp;
    this.amount = 1;
    this.countable = false;
  }
}