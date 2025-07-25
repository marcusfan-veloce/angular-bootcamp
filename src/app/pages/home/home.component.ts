import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService, SidebarStateService } from 'src/app/services/global.service';
import { CartItem, Item } from 'src/app/models/item';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: Item[] = [
    {
      id: 1,
      imgUrl: "assets/extra-latte.svg",
      name: "Extra Latte",
      price: 8.99,
      sizes: [250, 500],
      calories: 65,
      fat: "2.4g",
      cholesterol: "9.6mg",
      sodium: "55mg",
      carb: "6.8g",
      protein: "4.2g",
      vitD: "1.4mcg",
      calcium: "158mg",
      sugar: false
    },
    {
      id: 2,
      imgUrl: "assets/cappuccino.svg",
      name: "Cappuccino",
      price: 9.99,
      sizes: [250, 500],
      calories: 65,
      fat: "2.4g",
      cholesterol: "9.6mg",
      sodium: "55mg",
      carb: "6.8g",
      protein: "4.2g",
      vitD: "1.4mcg",
      calcium: "158mg",
      sugar: false
    },
    {
      id: 3,
      imgUrl: "assets/moccachino.svg",
      name: "Moccachino",
      price: 7.29,
      sizes: [250, 500],
      calories: 65,
      fat: "2.4g",
      cholesterol: "9.6mg",
      sodium: "55mg",
      carb: "6.8g",
      protein: "4.2g",
      vitD: "1.4mcg",
      calcium: "158mg",
      sugar: false
    }
  ]



  constructor(public sidebarState: SidebarStateService, private itemsService: ItemsService) {}

  sidebarVisible = false

  checkSidebar(item: Item): void {
    this.sidebarState.setItem(item)
    this.sidebarVisible = true
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

}
