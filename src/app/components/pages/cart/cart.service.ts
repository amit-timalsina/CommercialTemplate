import { Product } from './../products1/product.model';
import { CartItem } from './cart-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscriber, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineAll, map } from 'rxjs/operators';


// Get product from LocalStorage
const products = JSON.parse(localStorage.getItem('cartItem')) || [];

@Injectable({
    providedIn: 'root',
})
export class CartService {
    // Array
    public cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
    public observer: Subscriber<{}>;

    constructor(public snackBar: MatSnackBar) {
        this.cartItems.subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            (products) => (products = products)
        );
    }

    // Get Products
    public getItems(): Observable<CartItem[]> {
        const itemsStream = new Observable((observer) => {
            observer.next(products);
            observer.complete();
        });
        return itemsStream as Observable<CartItem[]>;
    }

    // Add to cart
    public addToCart(product: Product, quantity: number) {
        // tslint:disable-next-line: one-variable-per-declaration
        let message: string, status: string;
        let item: CartItem | boolean = false;
        // If Products exist
        const hasItem = products.find(
            (items: { product: { id: number } }, index: string | number) => {
                if (items.product.id === product.id) {
                    const qty = products[index].quantity + quantity;
                    const stock = this.calculateStockCounts(
                        products[index],
                        quantity
                    );
                    if (qty !== 0 && stock) {
                        products[index].quantity = qty;
                        message =
                            'The Product ' +
                            product.name +
                            'has been added to cart.';
                        status = 'sucess';
                        this.snackBar.open(message, 'x', {
                            panelClass: [status],
                            verticalPosition: 'top',
                            duration: 3000,
                        });
                    }
                    return true;
                }
            }
        );

        // If Products doesn't exisst (Add new Products)
        if (!hasItem) {
            item = { product, quantity };
            products.push(item);
            message =
                'The product ' + product.name + ' has been added to cart.';
            status = 'sucess';
            this.snackBar.open(message, 'x', {
                panelClass: [status],
                verticalPosition: 'top',
                duration: 3000,
            });
        }

        localStorage.setItem('cartItem', JSON.stringify(products));
        return item;
    }

    // Calculate Product stock Counts

    // tslint:disable-next-line: ban-types
    public calculateStockCounts(
        product: CartItem,
        quantity: number
    // tslint:disable-next-line: ban-types
    ): CartItem | Boolean {
        const qty = product.quantity + quantity;
        const stock = product.product.stock;
        if (stock < qty) {
            // tslint:disable-next-line: max-line-length
            this.snackBar.open(
                'You can not choose more items than available. In stock ' +
                    stock +
                    ' items.',
                'x',
                { panelClass: 'error', verticalPosition: 'top', duration: 3000 }
            );
            return false;
        }
        return true;
    }

    // Removed in cart
    public removeFromCart(item: CartItem) {
        if (item === undefined) {
            return false;
        }
        const index = products.indexOf(item);
        products.splice(index, 1);
        localStorage.setItem('cartItem', JSON.stringify(products));
    }

    // Total amount
    public getTotalAmount(): Observable<number> {
        return this.cartItems.pipe(
            map((product: CartItem[]) => {
                return products.reduce((prev: number, curr: CartItem) => {
                    return prev + curr.product.price * curr.quantity;
                }, 0);
            })
        );
    }

    // Update Cart Value
    public updateCartQuantity(
        product: Product,
        quantity: number
    ): CartItem | boolean {
        return products.find(
            (items: { product: { id: number } }, index: string | number) => {
                if (items.product.id === product.id) {
                    const qty = products[index].quantity + quantity;
                    const stock = this.calculateStockCounts(
                        products[index],
                        quantity
                    );
                    if (qty !== 0 && stock) {
                        products[index].quantity = qty;
                        localStorage.setItem(
                            'cartItem',
                            JSON.stringify(products)
                        );
                        return true;
                    }
                }
            }
        );
    }
}
