import { CartService } from './../../pages/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../pages/cart/cart-item';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {
  shoppingCartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
   }

  ngOnInit(): void {
  }

}
