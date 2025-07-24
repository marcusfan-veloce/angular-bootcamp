import { Component } from '@angular/core';

interface Item {
  id: number,
  imgUrl: string,
  name: string,
  price: number,
  sizes: number[]
  size? : number
  sugar? : boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Bootcamp';
  items: Item[] = [
    {
      id: 1,
      imgUrl: "assets/extra-latte.svg",
      name: "Extra Latte",
      price: 8.99,
      sizes: [250, 500],
    },
    {
      id: 2,
      imgUrl: "assets/cappuccino.svg",
      name: "Cappuccino",
      price: 9.99,
      sizes: [250, 500],
    },
    {
      id: 3,
      imgUrl: "assets/moccachino.svg",
      name: "Moccachino",
      price: 7.29,
      sizes: [250, 500],
    }
  ]

}
