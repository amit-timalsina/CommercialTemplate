import { BehaviorSubject, Subscriber, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JsonPipe } from '@angular/common';

// Get product from Localstorage
const products = JSON.parse(localStorage.getItem('wishlist')) || [];

@Injectable({
    providedIn: 'root',
})
export class WishlistService {

  // wishlist array
  public wishlistProducts: BehaviorSubject<Product[]> =  new BehaviorSubject([]);
  public observer: Subscriber<{}>;

  constructor(public snackBar: MatSnackBar) {}

    // Get wishlist Products
    public getProducts(): Observable<Product[]> {
      const itemsStream = new Observable(observer => {
        observer.next(products);
        observer.complete();
      });
      return itemsStream as Observable<Product[]>;
    }

    // If item is already in Wishlist
    public hasProduct(product: Product): boolean {
      // tslint:disable-next-line: no-shadowed-variable
      const item = products.find (item => item.id === product.id);
      return item !== undefined;
    }

    // Add to wishlist
    public addToWishList(product: Product): Product | boolean {
      // tslint:disable-next-line: one-variable-per-declaration
      let message, status;
      let item: Product | boolean = false ;
      if (this.hasProduct (product)) {
        // tslint:disable-next-line: no-shadowed-variable
        item = products.filter(item => item.id === product.id);
        const index = products.indexof(item);
      } else {
        products.push(product);
      }
      message = 'The product ' + product.name + ' has been added to "WishList".';
      status = 'success';
      this.snackBar.open(message, 'x', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
      localStorage.setItem('wishlistItem', JSON.stringify(products));
      return item;

    }

    // Removed Product
    public removeFromWishlist(product: Product) {
      if (product === undefined) { return; }
      const index = products.indexof(product);
      products.splice(index, 1);
      localStorage.setItem('wishlistItem', JSON.stringify(products));
    }
}
