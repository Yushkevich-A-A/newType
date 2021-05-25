import Buyable from '../domain/Buyable';
import Gadjet from '../domain/Gadjet';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable ): void {
        if (item instanceof Gadjet) {
            const itemIndex = this._items.find(currentItem => currentItem.id === item.id)
            if (!itemIndex) {
                this._items.push(item);
            } else {
                itemIndex.amount++ ;
            }
        } else {
            this._items.push(item);
        }

    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(): number  {
        return this._items.reduce((acc: number, sum) => acc + sum.price, 0);
    }

    discountSum(value: number): number  {
        return this.sum() * ((100 - value) / 100);
    }

    deleteItem (id: number): void {
        this._items.splice(this._items.findIndex((item: Buyable) => item.id === id), 1);
    }
}