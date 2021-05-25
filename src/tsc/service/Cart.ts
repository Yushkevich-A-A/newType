import Buyable from '../domain/Buyable';
import Gadjet from '../domain/Gadjet';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable ): void {
        // const checkExistItem = this._items.find(currentItem => currentItem.id === item.id);
        if (this._items.find(currentItem => currentItem.id === item.id)) {
            if ( this._items.find(currentItem => currentItem.id === item.id) instanceof Gadjet) {
                this._items.find(currentItem => currentItem.id === item.id)!.amount += 1;
            }
        } else {
            this._items.push(item);  
        }
    }

    get items(): Buyable[] { 
        return [...this._items]; 
    }

    sum(): number  {
        return this._items.reduce((acc: number, sum) => acc + sum.price * sum.amount, 0);
    }

    discountSum(value: number): number  {
        return this.sum() * ((100 - value) / 100);
    }

    deleteItem (id: number): void {
        const delItemIndex = this._items.findIndex((item: Buyable) => item.id === id);
        const delItem = this._items[delItemIndex];
        if (delItem instanceof Gadjet && delItem.amount > 1) {
            delItem.amount -= 1;
        } else {
            this._items.splice(delItemIndex, 1);            
        }


    }
}