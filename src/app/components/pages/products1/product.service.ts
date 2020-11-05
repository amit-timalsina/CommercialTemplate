import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public currency = 'Nrs';
  public catalogMode = false;

  constructor(private httpClient: HttpClient) {}

  private products(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/data/products2.json');
  }
  // Get products
  public getProduct(): Observable<Product[]> {
    return this.products();
  }

  // Get Products by id
  public getProductById(id: number): Observable<Product> {
    return this.products().pipe(map((items) => {
      return items.find((item: Product) => {
        return item.id === id;
      });
    })
    );
  }
}
