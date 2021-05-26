import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {

    readonly id: number;
    readonly name: string;
    readonly author: string;
    readonly price: number;
    readonly amount: number;
    readonly countable: boolean;
    
    constructor( id: number, name: string, author: string, price: number) { 
        this.id = id;
        this.name = name;
        this.author = author;
        this.price = price;
        this.amount = 1;
        this.countable = false;
    }
}