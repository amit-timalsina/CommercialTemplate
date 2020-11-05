import { CartService } from './../cart/cart.service';
import { ProductService } from './../products1/product.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../products1/product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  public products: Product[] = [];
  public counter = 1;
  public variantImage: any = '';
  public selectedColor: any = '';
  public selectedSize: any = '';

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, public productsService: ProductService, private cartService: CartService, public dialogRef: MatDialogRef<ProductDialogComponent>, @Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit() {
    this.productsService.getProduct().subscribe(product => this.products = product);

  }


  public addToCart(product: Product, quantity) {
    // tslint:disable-next-line: triple-equals
    if (quantity == 0) { return false; }
    // tslint:disable-next-line: radix
    this.cartService.addToCart(product, parseInt(quantity));
  }

  public close(): void {
    this.dialogRef.close();
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
       this.counter -= 1;
    }
  }

     // Add to cart
     public buyNow() {
      this.router.navigate(['/product', this.product.id]);
      this.close();
   }

}
