import Buyable from './Buyable';

export default class Gadjet implements Buyable {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  amount: number;

    constructor(id: number, name: string, price: number, amount: number = 1) { 
    this.id = id;
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}