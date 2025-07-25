import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService, SidebarStateService } from 'src/app/services/global.service';
import { Item, CartItem } from 'src/app/models/item';


@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {

  hoveredItem: CartItem | null = null

  cartItems$: Observable<CartItem[]>

  constructor(private itemsService: ItemsService) {
    this.cartItems$ = this.itemsService.cartItems$
  }

  cart = this.itemsService.getFullCart();

  getTotal(): number {
    let sum = 0;
    this.cart.forEach(c => {
      sum += c.count * c.item.price
    });
    return sum + 5
  }

  add(item: Item) {
    this.itemsService.addToCart(
      item,
      item.size!,
      item.sugar!,
    )
  }

  remove(item: Item) {
    this.itemsService.removeFromCart(
      item,
      item.size!,
      item.sugar!,
    )
  }

  getAmt(item: Item): number {
    const amt = this.itemsService.getAmount(
      item,
      item.size!,
      item.sugar!
    )

    return amt
  }

  clearItem(item: Item) {
    this.itemsService.clearItemFromCart(
      item,
      item.size!,
      item.sugar!
    )
  }


}
