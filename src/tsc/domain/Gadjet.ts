import Buyable from './Buyable';

export default class Gadjet implements Buyable {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly countable: boolean;
  amount: number;

    constructor(id: number, name: string, price: number) { 
    this.id = id;
    this.name = name;
    this.price = price;
    this.amount = 1;
    this.countable = true;
  }
}