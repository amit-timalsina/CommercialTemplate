import { ProductDialogComponent } from './../product-dialog/product-dialog.component';
import { Router } from '@angular/router';
import { WishlistService } from './../products1/wishlist.service';
import { ProductService } from './../products1/product.service';
import { CartService } from './../cart/cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products1/product.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() product: Product;
// tslint:disable-next-line: no-output-on-prefix
@Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
  constructor(private cartService: CartService,
              public productService: ProductService,
              private dialog: MatDialog,
              private wishListService: WishlistService,
              private router: Router) { }

  ngOnInit() {
  }

    // Add to cart
    public addToCart(product: Product, quantity: number = 1) {
      this.cartService.addToCart(product, quantity);
      console.log(product, quantity);
    }

    // Add to wishlist
    public addToWishlist(product: Product) {
      this.wishListService.addToWishList (product);
    }

    public openProductDialog(product) {
      const dialogRef = this.dialog.open(ProductDialogComponent, {
        data: product,
        panelClass: 'product-dialog',
      });
      // tslint:disable-next-line: no-shadowed-variable
      dialogRef.afterClosed().subscribe(product => {
        if (product) {
          this.router.navigate(['/products', product.id, product.name]);
        }
      });
    }
}
