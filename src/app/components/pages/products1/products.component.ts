import { Subscriber } from 'rxjs';
import { ProductService } from './product.service';
import { OrderByPipe } from './../pipes/order-by.pipe';
import { Component, OnInit } from '@angular/core';
import { Product, ColorFilter } from './product.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public sortByOrder = ''; // Sorting
  public animation: any; // Animation
  public viewType = 'grid';
  public viewCol = 25;
  public page: any;
  public colorFilters: ColorFilter[] = [];

  public allItems: Product[] = [];
  public products: Product[] = [];
  public colors: any[] = [];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe((params: Params) => {
      this.productService.getProduct().subscribe((products) => {
        this.allItems = products;
        this.products = products.slice(0.8);
        this.getColors(products);
      });
    });
  }
  // Get current product colors
  public getColors(products) {
    const uniqueColors = [];
    const itemColor = Array();
    products.map((product, index) => {
      if (products.colors) {
        product.colors.map((color) => {
          // tslint:disable-next-line: no-shadowed-variable
          const index = uniqueColors.indexOf(color);
          // tslint:disable-next-line: curly
          if (index === -1) uniqueColors.push(color);
        });
      }
    });
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < uniqueColors.length; i++) {
      itemColor.push({ color: uniqueColors[i] });
    }
    this.colors = itemColor;
  }
  ngOnInit(): void {
  }

public changeViewType(viewType, viewCol) {
  this.viewType = viewType;
  this.viewCol = viewCol;
}
public fadeIn() {
  this.animation = 'fadeIn';
}
public fadeOut() {
  this.animation = 'fadeOut';
}
  public onChangeSorting(val) {
    this.sortByOrder = val;
    // tslint:disable-next-line: triple-equals
    this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }



  public onPageChanged(event) {
    this.page = event;
    // tslint:disable-next-line: no-unused-expression
    this.allItems;
    window.scrollTo(0, 0);
  }
}
