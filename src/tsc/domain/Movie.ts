import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
      readonly id: number,
      readonly name: string,
      readonly nameRu: string,
      readonly mode: string,
      readonly price: number,
      readonly year: number,
      readonly country: string,
      readonly slogan: string,
      readonly genre: Array<string>,
      readonly timeStamp: number,
      readonly amount: number,
  ) { }
}