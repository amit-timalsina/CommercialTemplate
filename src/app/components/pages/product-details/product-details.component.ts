import { CartService } from './../cart/cart.service';
import { ProductService } from './../products1/product.service';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ProductZoomComponent } from './product-zoom/product-zoom.component';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../products1/product.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  public config: SwiperConfigInterface = {};
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();

  @ViewChild('zoomViewer', { static: true }) zoomViewer;
  @ViewChild(SwiperDirective, { static: true }) directiveRef: SwiperDirective;

  public product: Product = {};
  public products: Product[] = [];

  public image: any;
  public zoomImage: any;

  public counter = 1;

  index: number;
  bigProductImageIndex = 0;

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, public productsService: ProductService, public dialog: MatDialog, private router: Router, private cartService: CartService) {
    this.route.params.subscribe(params => {
      const id = +params.id;
      this.productsService.getProductById(id).subscribe(product => this.product = product);
    });
   }

  ngOnInit() {
    this.productsService.getProduct().subscribe(product => this.products = product);


    this.getRelatedProducts();
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 3,
      spaceBetween: 10,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: false,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        740: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3,
        },


      }
    };
  }


  public openProductDialog(product, bigProductImageIndex) {
    const dialogRef = this.dialog.open(ProductZoomComponent, {
      data: {product, index: bigProductImageIndex },
      panelClass: 'product-dialog',
    });
    // tslint:disable-next-line: no-shadowed-variable
    dialogRef.afterClosed().subscribe((product: { id: any; name: any; }) => {
      if (product) {
        this.router.navigate(['/products', product.id, product.name]);
      }
    });
  }


  public selectImage(index) {
    console.log(this.product);
    console.log(index);
    this.bigProductImageIndex = index;
  }




public increment() {
  this.counter += 1;
}

public decrement() {
  if (this.counter > 1) {
     this.counter -= 1;
  }
}

getRelatedProducts() {
  this.productsService.getProduct()
  .subscribe(
    (product: Product[]) => {
      this.products = product;
    });
}

  // Add to cart
  public addToCart(product: Product, quantity) {
    // tslint:disable-next-line: triple-equals
    if (quantity == 0) { return false; }
    // tslint:disable-next-line: radix
    this.cartService.addToCart(product, parseInt(quantity));
  }

   // Add to cart
   public buyNow(product: Product, quantity) {
    if (quantity > 0) {
      // tslint:disable-next-line: radix
      this.cartService.addToCart(product, parseInt(quantity));
    }
    this.router.navigate(['/checkout']);
 }



 public onMouseMove(e) {
  if (window.innerWidth >= 1280) {
    // tslint:disable-next-line: one-variable-per-declaration
    let image, offsetX, offsetY, x, y, zoomer;
    image = e.currentTarget;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    x = offsetX / image.offsetWidth * 100;
    y = offsetY / image.offsetHeight * 100;
    zoomer = this.zoomViewer.nativeElement.children[0];
    if (zoomer) {
      zoomer.style.backgroundPosition = x + '% ' + y + '%';
      zoomer.style.display = 'block';
      zoomer.style.height = image.height + 'px';
      zoomer.style.width = image.width + 'px';
    }
  }
}

public onMouseLeave(event) {
  this.zoomViewer.nativeElement.children[0].style.display = 'none';
}

public openZoomViewer() {
  this.dialog.open(ProductZoomComponent, {
    data: this.zoomImage,
    panelClass: 'zoom-dialog'
  });
}



}


