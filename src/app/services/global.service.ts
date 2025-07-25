import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { CartItem, Item } from "../models/item";

@Injectable({providedIn: 'root'})
export class SidebarStateService {
    private _item = new BehaviorSubject<Item | null>(null)
    public item$ = this._item.asObservable()

    setItem(item: Item): void {
        this._item.next(item)
    }

    getItem(): Item | null {
        return this._item.value
    }

}

@Injectable({providedIn: 'root'})
export class ItemsService {
    private cartItems = new BehaviorSubject<CartItem[]>([]);
    readonly cartItems$: Observable<CartItem[]> = this.cartItems.asObservable()

    totalItems$: Observable<number> = this.cartItems$.pipe(map(items => items.reduce((sum, item) => sum + item.count, 0)));


    addToCart(item: Item, size: 250 | 500, sugar: boolean) {
        const current = this.cartItems.value;
        const existing = current.find( idx =>
            idx.item.id === item.id &&
            idx.size === size &&
            idx.sugar === sugar
        )
        if (existing) {
            existing.count += 1
        } else {
            current.push({item, size, sugar, count: 1})
        }
        this.cartItems.next([...current])
    }

    removeFromCart(item: Item, size: 250 | 500, sugar: boolean) {
        const current = this.cartItems.value
        const idx = current.findIndex( v =>
            v.item.id === item.id &&
            v.size === size &&
            v.sugar === sugar
        )

        if (idx > -1) {
            const cartItem = current[idx]
            cartItem.count -= 1

            if (cartItem.count > 0) {
                this.cartItems.next([...current])
            } else {
                const updated = current.filter((_, i) => i !== idx);
                this.cartItems.next(updated);
            }
        }
    }

    clearItemFromCart(item: Item, size: 250 | 500, sugar: boolean) {
        const updated = this.cartItems.value.filter(v =>
            !(v.item.id === item.id &&
            v.size    === size &&
            v.sugar   === sugar)
        );
        this.cartItems.next(updated);
    }

    getAmount(item: Item, size: 250 | 500, sugar: boolean): number {
        const current = this.cartItems.value
        const idx = current.findIndex( v =>
            v.item.id === item.id &&
            v.size === size &&
            v.sugar === sugar
        )

        if (idx > -1) {
            return current[idx].count
        }else {
            return 0
        }
    }

    getFullCart(): CartItem[] {
        return this.cartItems.value
    }
}