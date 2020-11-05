import { CartService } from './../cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../products1/product.model';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  public addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
    console.log(product, quantity);
  }
}
