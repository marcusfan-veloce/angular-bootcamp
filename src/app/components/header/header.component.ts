

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Header {

  cartItems$: Observable<CartItem[]>

  constructor(public itemsService: ItemsService) {
    this.cartItems$ = this.itemsService.cartItems$
  }

}
