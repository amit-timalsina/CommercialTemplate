import { ProductService } from './../products1/product.service';
import { Observable, of } from 'rxjs';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems: Observable<CartItem[]> = of([]);
  public shoppingCartItems: CartItem[] = [];

  constructor(private cartService: CartService,
              public productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  // Remove cart items
  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  // Increase Product Quantity
  public increment(product: any, quantity: number = 1) {
    this.cartService.updateCartQuantity(product, quantity);
  }

  // Decrease product Quantity
  public decrement(product: any, quantity: number = -1) {
    this.cartService.updateCartQuantity(product, quantity);
  }

  // Get Total
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }
}
