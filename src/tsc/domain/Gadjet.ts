import Buyable from './Buyable';

export default class Gadjet implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
    ) { }
  amount: number = 1;
  
}